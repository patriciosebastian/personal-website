import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "@inertiajs/react"
import { useRoute } from 'ziggy-js'

export default function Navbar() {
    const route = useRoute();

    return (
        <NavigationMenu className="w-full max-w-screen h-14 border-b">
            <NavigationMenuList className="gap-32">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="text-xl hover:bg-transparent">
                    <Link href={route('home')}>HOME</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl hover:bg-transparent">
                        <Link
                            href={route('home') + '#about'}
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    document.querySelector('#about')?.scrollIntoView();
                                    window.history.pushState(null, '', '#about');
                                }
                            }}
                        >
                            ABOUT
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl hover:bg-transparent">
                        <Link
                            href={route('home') + '#projects'}
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    document.querySelector('#projects')?.scrollIntoView();
                                    window.history.pushState(null, '', '#projects');
                                }
                            }}
                        >
                            PROJECTS
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl hover:bg-transparent">
                        <Link href={route('posts.index')}>BLOG</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
