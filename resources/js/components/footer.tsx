import { useNavLinks } from "@/data/navlinks"
import { Link } from "@inertiajs/react"

export default function Footer() {
    const navLinks = useNavLinks();

    return (
        <footer className="relative overflow-hidden border-t border-border mt-32">
            <div className="relative w-full mx-auto px-4 lg:w-fit">
                <div className="flex justify-center items-center gap-12 mt-10 mb-16 flex-wrap">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            prefetch
                            className="text-[13px] tracking-[0.04em] text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="pointer-events-none select-none text-center">
                    <div
                        className="font-display font-medium tracking-[-0.04em] leading-[0.85] -mb-[0.085em] text-watermark"
                        style={{ fontSize: 'clamp(4rem,18vw,16rem)' }}
                    >
                        Patricio
                    </div>
                </div>
                <div className="py-4 text-xs text-muted-foreground text-center">
                    © {new Date().getFullYear()} Patricio Salazar
                </div>
            </div>
        </footer>
    );
}
