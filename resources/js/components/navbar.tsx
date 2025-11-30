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
                        <Link href="/">ABOUT</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl hover:bg-transparent">
                        <Link href="/">PROJECTS</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-xl hover:bg-transparent">
                        <Link href="/">BLOG</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
