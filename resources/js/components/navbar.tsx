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

export default function Navbar() {
    const route = useRoute();

    const navLinks = [
        { href: route('home'), label: 'HOME' },
        {
            href: route('home') + '#about',
            label: 'ABOUT',
        },
        {
            href: route('home') + '#projects',
            label: 'PROJECTS',
        },
        { href: route('posts.index'), label: 'BLOG' },
    ];

    return (
        <nav className="w-full flex h-14 items-center justify-between border-b px-4 lg:px-8">
            {/* Desktop Navigation */}
            <NavigationMenu className="w-full max-w-screen hidden md:flex">
                <NavigationMenuList className="gap-4 sm:gap-8 md:gap-16 lg:gap-32">
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.label}>
                            <NavigationMenuLink
                                asChild
                                className="text-base sm:text-lg md:text-xl hover:bg-transparent focus:bg-transparent"
                            >
                                <Link href={link.href}>
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
                    className="text-lg font-semibold"
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
                                        className="text-lg font-semibold py-3 transition-colors hover:text-accent-foreground"
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
