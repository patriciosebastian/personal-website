import { useNavLinks } from "@/data/navlinks"
import { Link } from "@inertiajs/react"

export default function Footer() {
    const navLinks = useNavLinks();
    return (
        <footer className="relative overflow-hidden bg-background border-t border-border mt-32">
            <div className="flex justify-center items-center gap-8 sm:gap-12 md:gap-16 py-12">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        prefetch
                        className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="pointer-events-none select-none overflow-hidden">
                <div
                    className="font-serif font-medium uppercase leading-none tracking-tighter text-[oklch(0.880_0.006_250)] dark:text-[oklch(0.220_0.006_250)] text-[clamp(4rem,18vw,16rem)]"
                    style={{ marginBottom: 'calc(-0.22em)' }}
                >
                    Patricio
                </div>
            </div>
            <div className="absolute bottom-0 left-4 sm:left-8 pb-3">
                <span className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Patricio Salazar
                </span>
            </div>
        </footer>
    );
}
