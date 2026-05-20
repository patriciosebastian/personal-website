import { useRoute } from "ziggy-js";

export function useNavLinks() {
    const route = useRoute();

    return [
        {
            href: route('home'),
            label: 'Home'
        },
        {
            href: route('home') + '#about',
            label: 'About'
        },
        {
            href: route('home') + '#projects',
            label: 'Projects'
        },
        {
            href: route('posts.index'),
            label: 'Blog'
        },
    ];
}
