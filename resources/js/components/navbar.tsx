import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Link } from '@inertiajs/react'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRoute } from 'ziggy-js'
import { Separator } from './ui/separator'
import { useNavLinks } from '@/data/navlinks'

export default function Navbar() {
    const route = useRoute();
    const navLinks = useNavLinks();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`w-full sticky top-0 z-50 flex h-14 items-center justify-between px-4 lg:px-8 transition-[background-color,border-color,backdrop-filter] duration-400 ${
            scrolled
                ? 'border-b border-border backdrop-blur-md bg-background/80'
                : 'border-b border-transparent bg-transparent'
        }`}>
            {/* Desktop Navigation */}
            <NavigationMenu className="w-full max-w-screen hidden md:flex">
                <NavigationMenuList className="gap-4 sm:gap-8 md:gap-16 lg:gap-32">
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.label}>
                            <NavigationMenuLink
                                asChild
                                className="text-sm tracking-wide hover:opacity-40 hover:bg-transparent focus:bg-transparent transition-opacity duration-[180ms]"
                            >
                                <Link
                                    href={link.href}
                                    prefetch
                                >
                                    {link.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <div className="w-full flex items-center justify-between md:hidden">
                <Link
                    href={route('home')}
                    className="text-sm font-medium tracking-wide"
                    prefetch
                >
                    HOME
                </Link>
                <Sheet>
                    <SheetTrigger>
                        <Menu className="size-6" />
                        <span className="sr-only">Toggle menu</span>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <Separator />
                        <div className="flex flex-col gap-4 pl-4">
                            {navLinks.map((link) => (
                                <SheetClose asChild key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-base font-medium py-3 transition-opacity hover:opacity-40"
                                        prefetch
                                    >
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
