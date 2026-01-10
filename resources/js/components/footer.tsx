import { Link } from "@inertiajs/react"
import { useRoute } from 'ziggy-js'

export default function Footer() {
    const route = useRoute();

    return (
        <footer className="relative overflow-hidden bg-white py-10 dark:bg-transparent mt-32 border-t">
            <div className="relative w-full mx-auto px-4 lg:w-fit">
                <div className="flex justify-center items-center gap-8 mt-16 mb-24 sm:gap-12 md:gap-16">
                    <Link
                        href={route('home')}
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
                    >
                        HOME
                    </Link>
                    <Link
                        href={route('home') + '#about'}
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                document.querySelector('#about')?.scrollIntoView();
                                window.history.pushState(null, '', '#about');
                            }
                        }}
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
                    >
                        ABOUT
                    </Link>
                    <Link
                        href={route('home') + '#projects'}
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView();
                                window.history.pushState(null, '', '#projects');
                            }
                        }}
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
                    >
                        PROJECTS
                    </Link>
                    <Link
                        href={route('posts.index')}
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
                    >
                        BLOG
                    </Link>
                </div>
                <div className="pointer-events-none select-none">
                    <div className="text-[5rem] justify-self-center font-black uppercase leading-none tracking-tighter text-zinc-100 dark:text-zinc-800 sm:text-[8rem] md:text-[10rem] lg:text-[16rem] -mb-13 sm:-mb-15 md:-mb-17 lg:-mb-19">
                        Patricio
                    </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-between sm:bottom-4 md:bottom-6 lg:bottom-8 lg:left-7.5 lg:translate-0">
                    <div className="text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                        © {new Date().getFullYear()} Patricio Salazar
                    </div>
                </div>
            </div>
        </footer>
    );
}
