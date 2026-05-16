import { useRoute } from "ziggy-js";

export function useNavLinks() {
    const route = useRoute();

    return [
        {
            href: route('home'),
            label: 'HOME'
        },
        {
            href: route('home') + '#about',
            label: 'ABOUT'
        },
        {
            href: route('home') + '#projects',
            label: 'PROJECTS'
        },
        {
            href: route('posts.index'),
            label: 'BLOG'
        },
    ];
}
