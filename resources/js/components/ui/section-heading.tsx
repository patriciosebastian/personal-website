import { SectionHeadingProps } from "@/types"
import { useEffect, useRef, useState } from "react"

export default function SectionHeading({ headingText, subtitle }: SectionHeadingProps) {
    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={headingRef} className="flex flex-col items-start mb-16 overflow-hidden">
            <p className={`text-xs font-medium tracking-[0.22em] uppercase text-brand mb-6 pt-2.5 transition-all duration-[800ms] ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
                § {headingText}
            </p>
            <h2 className={`font-serif text-[clamp(2rem,4.4vw,2.75rem)] font-medium tracking-[-0.015em] leading-[1.05] transition-all duration-[800ms] ease-out ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
            }`}>
                {headingText}
            </h2>
            <div className={`h-0.5 bg-foreground mt-4 transition-all duration-[900ms] delay-300 ease-out ${
                isVisible ? 'w-full' : 'w-0'
            }`} />
            {subtitle && (
                <p className={`text-sm text-muted-foreground mt-3 transition-all duration-[600ms] ease-out delay-300 ${
                    isVisible
                        ? 'opacity-100'
                        : 'opacity-0'
                }`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
