import PageHead from '@/components/page-head'
import MainLayout from '@/layouts/main-layout'
import { PostShowProps } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Link, usePage } from '@inertiajs/react'
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from 'lucide-react'
import { formatDate, getActiveTags, getReadingTime } from '@/lib/utils'
import SubscribeToBlogForm from '@/components/subscribe-to-blog-form'

export default function Show({ post }: PostShowProps) {
    const activeTags = getActiveTags(post);
    const publishDate = post.published_at || post.created_at;
    const readingTime = getReadingTime(post.content);
    const { seo } = usePage<{ seo: { title: string, description: string } }>().props;

    return (
        <>
            <PageHead
                title={seo.title}
                description={seo.description}
            />

            <MainLayout>
                <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    <div className="mb-12">
                        <Link
                            href={route('posts.index')}
                            prefetch
                            className="inline-flex items-center gap-2 text-xs tracking-[0.06em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
                        >
                            <ArrowLeftIcon className="size-3" />
                            Back to Blog
                        </Link>
                    </div>
                    <header className="mb-12">
                        {activeTags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {activeTags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="outline"
                                        className="rounded text-[0.6875rem] px-2.5 py-1 tracking-[0.05em] capitalize font-normal text-muted-foreground"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                        <h1 className="font-serif font-medium tracking-[-0.02em] leading-[1.12] text-[clamp(2rem,5vw,3.25rem)] mb-4.5 break-words">
                            {post.title}
                        </h1>
                        {post.subtitle && (
                            <p className="text-[1.0625rem] font-light text-muted-foreground leading-relaxed mb-8 wrap-break-word">
                                {post.subtitle}
                            </p>
                        )}
                        <div className="flex flex-wrap items-center gap-6 text-[0.6875rem] tracking-[0.1em] uppercase text-muted-foreground mb-10">
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="size-3.5" />
                                <time dateTime={publishDate}>
                                    {formatDate(publishDate)}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="size-3.5" />
                                <span>{readingTime} min read</span>
                            </div>
                        </div>
                        <Separator className="mt-8" />
                    </header>
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none
                            prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight
                            prose-h1:text-4xl prose-h1:mb-8
                            prose-h2:text-[1.625rem] prose-h2:tracking-[-0.02em] prose-h2:mt-14 prose-h2:mb-4.5
                            prose-h3:text-[1.25rem] prose-h3:tracking-[-0.01em] prose-h3:mt-10 prose-h3:mb-3.5
                            prose-p:leading-[1.85] prose-p:mb-6 prose-p:text-[1.0625rem]
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:font-semibold
                            prose-code:before:content-none prose-code:after:content-none prose-code:text-[0.875em] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-border
                            prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-pre:rounded
                            prose-img:rounded prose-img:shadow-lg
                            prose-blockquote:border-l-2 prose-blockquote:border-brand prose-blockquote:pl-8 prose-blockquote:italic prose-blockquote:font-serif prose-blockquote:text-[1.125rem] prose-blockquote:leading-[1.7] prose-blockquote:my-10
                            prose-ul:my-6 prose-ol:my-6
                            prose-li:my-2"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <footer className="mt-16">
                        <Separator className="mb-8" />
                        <div className="text-center">
                            <Link
                                href={route('posts.index')}
                                prefetch
                                className="inline-flex items-center gap-2 text-xs tracking-[0.06em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
                            >
                                <ArrowLeftIcon className="size-3" />
                                Back to All Posts
                            </Link>
                        </div>
                    </footer>
                </article>

                <p className="relative text-center border border-border p-4 rounded mx-auto max-w-lg my-24 lg:max-w-2xl">
                    <span className="absolute size-8 -top-4 rounded-full flex justify-center items-center bg-secondary text-foreground font-bold border border-border animate-spin duration-[3000ms]">
                        ?
                    </span>
                    Got thoughts on this article or anything else? <a href="mailto:psebastiansalazar@gmail.com" className="underline font-bold">Hit me up!</a>
                </p>

                <SubscribeToBlogForm />
            </MainLayout>
        </>
    )
}
