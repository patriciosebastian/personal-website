import PageHead from '@/components/page-head'
import MainLayout from '@/layouts/main-layout'
import { PostShowProps } from '@/types'
import { Link, usePage } from '@inertiajs/react'
import { ArrowLeftIcon } from 'lucide-react'
import { formatDate, getActiveTags, getReadingTime } from '@/lib/utils'
import SubscribeToBlogForm from '@/components/subscribe-to-blog-form'
import { useState } from 'react'

export default function Show({ post }: PostShowProps) {
    const activeTags = getActiveTags(post);
    const publishDate = post.published_at || post.created_at;
    const readingTime = getReadingTime(post.content);
    const { seo } = usePage<{ seo: { title: string, description: string } }>().props;
    const [emailHovered, setEmailHovered] = useState(false);

    return (
        <>
            <PageHead
                title={seo.title}
                description={seo.description}
            />

            <MainLayout>
                <article className="w-full max-w-180 mx-auto px-4 md:px-0 py-16">
                    <div className="mb-12">
                        <Link
                            href={route('posts.index')}
                            prefetch
                        >
                            <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.06em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150">
                                <ArrowLeftIcon className="size-3" />
                                Back to Blog
                            </span>
                        </Link>
                    </div>

                    <header className="mb-14">
                        {activeTags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {activeTags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11px] capitalize px-2.5 py-0.5 border border-border rounded text-muted-foreground tracking-[0.05em]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1
                            className="font-display font-medium tracking-[-0.02em] leading-[1.12] text-foreground mb-4.5 wrap-break-word"
                            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
                        >
                            {post.title}
                        </h1>

                        {post.subtitle && (
                            <p className="text-[17px] font-light text-muted-foreground leading-[1.65] mb-8 wrap-break-word">
                                {post.subtitle}
                            </p>
                        )}

                        <div className="flex flex-wrap items-center gap-6 text-[13px] text-muted-foreground tracking-[0.03em] mb-10">
                            <span>Patricio Salazar</span>
                            <span className="opacity-30">—</span>
                            <time dateTime={publishDate}>{formatDate(publishDate)}</time>
                            <span className="opacity-30">—</span>
                            <span>{readingTime} min read</span>
                        </div>

                        <div className="h-0.5 bg-foreground" />
                    </header>

                    <div
                        className="prose prose-lg dark:prose-invert max-w-none
                            prose-headings:font-display prose-headings:font-medium prose-headings:not-italic
                            prose-headings:tracking-tight
                            prose-h1:text-4xl prose-h1:mb-8
                            prose-h2:text-[26px] prose-h2:tracking-[-0.02em] prose-h2:mt-12 prose-h2:mb-6
                            prose-h3:text-2xl prose-h3:tracking-[-0.01em] prose-h3:mt-8 prose-h3:mb-4
                            prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-foreground prose-a:no-underline hover:prose-a:underline
                            prose-strong:font-semibold
                            prose-code:before:content-none prose-code:after:content-none
                            prose-pre:bg-secondary prose-pre:border prose-pre:border-border
                            prose-img:rounded-lg prose-img:shadow-lg
                            prose-blockquote:border-l-2 prose-blockquote:border-press-accent
                            prose-blockquote:pl-8 prose-blockquote:italic prose-blockquote:my-10
                            prose-ul:my-6 prose-ol:my-6
                            prose-li:my-2"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <footer className="mt-16">
                        <div className="h-px bg-border mb-10" />
                        <div className="text-center">
                            <Link
                                href={route('posts.index')}
                                prefetch
                            >
                                <span className="inline-flex items-center gap-2 px-5.5 py-2 border border-border rounded text-[13px] tracking-[0.05em] text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-180">
                                    <ArrowLeftIcon className="size-3" />
                                    Back to all posts
                                </span>
                            </Link>
                        </div>
                    </footer>
                </article>

                <div className="relative text-left border border-border rounded-sm mx-auto max-w-150 my-20 p-9 lg:max-w-150">
                    <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-press-accent mb-3">
                        §&nbsp;Got thoughts?
                    </p>
                    <p className="text-[15px] leading-[1.7] text-foreground">
                        I would love to hear them.{' '}
                        <a
                            href="mailto:psebastiansalazar@gmail.com"
                            onMouseEnter={() => setEmailHovered(true)}
                            onMouseLeave={() => setEmailHovered(false)}
                            className="text-foreground transition-colors duration-150"
                            style={{ borderBottom: `1px solid ${emailHovered ? 'currentColor' : 'var(--border)'}`, paddingBottom: 1 }}
                        >
                            Reach out.
                        </a>
                    </p>
                    <p className="text-[13px] text-muted-foreground mt-1.5">psebastiansalazar@gmail.com</p>
                </div>

                <SubscribeToBlogForm />
            </MainLayout>
        </>
    )
}
