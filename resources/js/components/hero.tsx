import { buttonVariants } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import SocialIcons from './ui/social-icons'
import { Post } from '@/types'
import { useRoute } from 'ziggy-js'

export default function Hero({ latestPost }: { latestPost: Post }) {
    const route = useRoute();

    return (
        <section
            className="min-h-svh flex justify-center items-center relative px-4 sm:px-6 lg:px-0"
            id="hero"
        >
            <div className="w-full max-w-[640px] flex flex-col z-10">
                <h1 className="font-serif font-medium tracking-[-0.025em] leading-none text-[clamp(2.5rem,9vw,6rem)]">
                    PATRICIO SALAZAR
                </h1>
                <p className="text-[0.8125rem] font-medium tracking-[0.18em] uppercase text-brand mt-4.5 mb-10">
                    Software Developer
                </p>
                <p className="leading-[1.8] mb-10">
                    I strive to build <strong>unmistakable</strong> experiences by<br />
                    writing informed code that meets business needs.
                </p>
                <ol className="divide-y divide-border mb-11">
                    <li className="flex gap-5 py-3.5">
                        <span className="text-lg font-medium text-brand shrink-0 min-w-5">1</span>
                        <span className="text-[0.9375rem] leading-[1.65]">
                            I&apos;m currently writing <strong>Laravel</strong> and <strong>Livewire</strong> code at my place of work.
                        </span>
                    </li>
                    <li className="flex gap-5 py-3.5">
                        <span className="text-lg font-medium text-brand shrink-0 min-w-5">2</span>
                        <span className="text-[0.9375rem] leading-[1.65]">
                            Proficient in <strong>JavaScript</strong>, <strong>TypeScript</strong> and <strong>React</strong>.
                        </span>
                    </li>
                    <li className="flex gap-5 py-3.5">
                        <span className="text-lg font-medium text-brand shrink-0 min-w-5">3</span>
                        <span className="text-[0.9375rem] leading-[1.65]">
                            Working on side projects, exploring new technologies, learning and building in public, and writing about all of this on my blog.
                        </span>
                    </li>
                </ol>
                <div className="flex items-center gap-4 mb-11">
                    <Link
                        href="/#projects"
                        className={buttonVariants({ variant: "outline" }) + ` h-11 px-7 text-[0.8125rem] tracking-[0.08em] uppercase rounded font-normal`}
                    >
                        Projects
                    </Link>
                    <Link
                        href={route('posts.show', { post: latestPost.slug, ref: 'personal-website-hero' })}
                        className={buttonVariants({ variant: "outline" }) + ` h-11 px-7 text-[0.8125rem] tracking-[0.08em] uppercase rounded font-normal`}
                        prefetch
                    >
                        Latest Post
                    </Link>
                </div>
                <SocialIcons />
            </div>
        </section>
    );
};
