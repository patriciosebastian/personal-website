import { SectionHeadingProps } from "@/types"
import { useEffect, useRef, useState } from "react"

export default function SectionHeading({ headingText, chapter }: SectionHeadingProps) {
    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = headingRef.current;
        if (!element) return;

        const check = () => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setIsVisible(true);
                window.removeEventListener('scroll', check);
            }
        };

        check();
        window.addEventListener('scroll', check, { passive: true });
        return () => window.removeEventListener('scroll', check);
    }, []);

    return (
        <div
            ref={headingRef}
            className="max-w-180 mx-auto px-2 mb-16"
        >
            <div className={`flex items-baseline gap-6 pb-5 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {chapter && (
                    <span className="font-display text-[11px] font-medium tracking-[0.22em] uppercase text-press-accent shrink-0 pt-2.5">
                        §&nbsp;{chapter}
                    </span>
                )}
                <h2 className="font-display text-[clamp(2rem,4.4vw,2.75rem)] font-medium tracking-[-0.015em] leading-[1.05] text-foreground">
                    {headingText}
                </h2>
            </div>
            <div
                className={`h-0.5 bg-foreground transition-[width] duration-900 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'w-full' : 'w-0'}`}
            />
        </div>
    );
}
