import { useNavLinks } from "@/data/navlinks"
import { Link } from "@inertiajs/react"

export default function Footer() {
    const navLinks = useNavLinks();
    return (
        <footer className="relative overflow-hidden bg-background py-10 mt-32 border-t border-border">
            <div className="relative w-full mx-auto px-4 lg:w-fit">
                <div className="flex justify-center items-center gap-8 mt-16 mb-24 sm:gap-12 md:gap-16">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            prefetch
                            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="pointer-events-none select-none">
                    <div className="font-serif font-medium uppercase leading-none tracking-tighter text-[oklch(0.880_0.006_250)] dark:text-[oklch(0.220_0.006_250)] text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[16rem] -mb-13 sm:-mb-15 md:-mb-17 lg:-mb-19">
                        Patricio
                    </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-between sm:bottom-4 md:bottom-6 lg:bottom-8 lg:left-7.5 lg:translate-0">
                    <div className="text-xs text-muted-foreground sm:text-sm">
                        © {new Date().getFullYear()} Patricio Salazar
                    </div>
                </div>
            </div>
        </footer>
    );
}
