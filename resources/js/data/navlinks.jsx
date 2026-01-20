import { useRoute } from "ziggy-js";

const route = useRoute();

const navLinks = [
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

export default navLinks;
