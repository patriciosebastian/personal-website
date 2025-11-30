import { Link } from "@inertiajs/react"
import { useRoute } from 'ziggy-js'

export default function Footer() {
    const route = useRoute();

    return (
        <footer className="relative overflow-hidden bg-white py-10 dark:bg-transparent mt-32 border-t">
            <div className="relative w-fit mx-auto px-4">
                <div className="flex justify-center items-center gap-8 mt-16 mb-24 sm:gap-12 md:gap-16">
                    <Link
                        href={route('home')}
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
                    >
                        HOME
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
                    >
                        PROJECTS
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
                    >
                        BLOG
                    </Link>
                </div>
                <div className="pointer-events-none select-none">
                    <div className="text-[12rem] justify-self-center font-black uppercase leading-none tracking-tighter text-zinc-100 dark:text-zinc-800 sm:text-[16rem] md:text-[20rem] lg:text-[16rem] -mb-16 sm:-mb-20 md:-mb-20.5 lg:-mb-19">
                        Patricio
                    </div>
                </div>
                <div className="absolute bottom-5.5 left-7.5 flex items-center justify-between sm:bottom-9.5 md:bottom-10 lg:bottom-8">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        © {new Date().getFullYear()} Patricio Salazar
                    </div>
                </div>
            </div>
        </footer>
    );
}
