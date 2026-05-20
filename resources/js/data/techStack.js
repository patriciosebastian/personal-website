import {
    SiAmazonwebservices,
    SiAtlassian,
    SiExpress,
    SiJavascript,
    SiLaravel,
    SiLivewire,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiReact,
    SiSentry,
    SiTailwindcss
} from "react-icons/si"

export const techStack = {
    languages: [
        {
            name: 'JavaScript',
            icon: SiJavascript,
            color: '#F7DF1E'
        },
        {
            name: 'PHP',
            icon: SiPhp,
            color: '#777BB4'
        },
    ],
    uiFrontend: [
        {
            name: 'Tailwind CSS',
            icon: SiTailwindcss,
            color: '#06B6D4'
        },
        {
            name: 'React',
            icon: SiReact,
            color: '#61DAFB'
        },
    ],
    backendFrameworks: [
        {
            name: 'Node.js',
            icon: SiNodedotjs,
            color: '#5FA04E'
        },
        {
            name: 'Express',
            icon: SiExpress,
            color: {
                light: '#000000',
                dark: '#FFFFFF'
            },
        },
        {
            name: 'Laravel',
            icon: SiLaravel,
            color: '#FF2D20'
        },
        {
            name: 'Livewire',
            icon: SiLivewire,
            color: '#FB70A9'
        },
    ],
    databaseTools: [
        {
            name: 'PostgreSQL',
            icon: SiPostgresql,
            color: '#4169E1'
        },
        {
            name: 'AWS',
            icon: SiAmazonwebservices,
            color: '#FF9900'
        },
        {
            name: 'Atlassian',
            icon: SiAtlassian,
            color: '#0052CC'
        },
        {
            name: 'Sentry',
            icon: SiSentry,
            color: '#362D59'
        },
    ],
};