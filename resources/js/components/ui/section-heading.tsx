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
        <div ref={headingRef} className="relative flex flex-col items-center mb-20 overflow-hidden">
            <h2 className={`text-4xl text-center uppercase transition-all duration-[800ms] ease-out ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
            }`}>
                {headingText}
            </h2>
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
