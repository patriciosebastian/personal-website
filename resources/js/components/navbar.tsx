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
import { useRoute } from 'ziggy-js'
import { Separator } from './ui/separator'
import { useNavLinks } from '@/data/navlinks'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const route = useRoute();
    const navLinks = useNavLinks();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <nav className={`w-full sticky top-0 z-50 flex h-16 items-center justify-center px-4 lg:px-12 transition-[border-color,background-color] duration-400 border-b ${
            scrolled
                ? 'bg-background/82 backdrop-blur-md backdrop-saturate-150 border-border'
                : 'bg-background border-transparent'
        }`}>
            {/* Desktop */}
            <NavigationMenu className="w-full max-w-screen hidden md:flex justify-center">
                <NavigationMenuList className="gap-10">
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.label}>
                            <NavigationMenuLink
                                asChild
                                className="text-sm tracking-[0.04em] font-normal opacity-100 hover:opacity-40 transition-opacity duration-180 hover:bg-transparent focus:bg-transparent bg-transparent"
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

            {/* Mobile */}
            <div className="w-full flex items-center justify-between md:hidden">
                <Link
                    href={route('home')}
                    className="text-sm tracking-[0.04em] font-medium"
                    prefetch
                >
                    Home
                </Link>
                <Sheet>
                    <SheetTrigger>
                        <Menu className="size-5" />
                        <span className="sr-only">Toggle menu</span>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="font-display font-medium">Menu</SheetTitle>
                        </SheetHeader>
                        <Separator />
                        <div className="flex flex-col gap-4 pl-4">
                            {navLinks.map((link) => (
                                <SheetClose asChild key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-base tracking-[0.04em] py-3 transition-opacity hover:opacity-40"
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
