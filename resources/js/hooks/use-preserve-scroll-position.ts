import { useEffect } from "react"

export function usePreserveScrollPosition({ ref }: { ref: React.RefObject<HTMLDivElement> }) {
    useEffect(() => {
        const container = ref?.current;

        if (!container) {
            return;
        }

        const savedScrollPos = sessionStorage.getItem('publishedPostsScrollPos');

        if (savedScrollPos) {
            const scrollPosition = parseInt(savedScrollPos, 10);
            container.scrollTo({ top: scrollPosition });
        }

        const handleScroll = () => {
            sessionStorage.setItem('publishedPostsScrollPos', container.scrollTop.toString());
        };

        container.addEventListener('scroll', handleScroll);

        return () => container.removeEventListener('scroll', handleScroll);
    });
}