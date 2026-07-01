import { Link } from '@inertiajs/react'
import SocialIcons from './ui/social-icons'
import { Post } from '@/types'
import { useRoute } from 'ziggy-js'
import { BIO_LINES } from '@/data/bioLines'

export default function Hero({ latestPost }: { latestPost: Post }) {
    const route = useRoute();

    return (
        <section
            className="min-h-svh flex justify-center items-center relative px-4 sm:px-6 lg:px-0"
            id="hero"
        >
            <div className="flex flex-col max-w-180 w-full z-10">
                <h1
                    className="font-display font-medium tracking-[-0.025em] leading-none text-foreground mb-4.5"
                    style={{ fontSize: 'clamp(2.5rem, 9vw, 6rem)' }}
                >
                    Patricio Salazar
                </h1>

                <p className="text-[13px] font-medium tracking-[0.18em] uppercase text-press-accent mb-10">
                    Software Engineer
                </p>

                <div className="mb-11">
                    <p className="text-base leading-[1.8] text-foreground mb-6">
                        Striving to build <em>unmistakable</em> experiences.
                    </p>
                    <div className="h-0.5 bg-foreground" />
                    {BIO_LINES.map((line, i) => (
                        <div
                            key={i}
                            className="flex items-baseline gap-5 py-3.5 border-b border-border"
                        >
                            <span className="font-display font-medium text-lg text-press-accent shrink-0 min-w-5 text-right leading-none">
                                {i + 1}
                            </span>
                            <p className="text-[15px] leading-[1.65] text-foreground">{line}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3 mb-11">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center justify-center h-11 px-7 border border-foreground rounded bg-transparent text-foreground text-[13px] tracking-[0.08em] uppercase hover:bg-foreground hover:text-background transition-colors duration-200"
                    >
                        Projects
                    </Link>
                    <Link
                        href={route('posts.show', { post: latestPost.slug, ref: 'personal-website-hero' })}
                        className="inline-flex items-center justify-center h-11 px-7 border border-foreground rounded bg-transparent text-foreground text-[13px] tracking-[0.08em] uppercase hover:bg-foreground hover:text-background transition-colors duration-200"
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
