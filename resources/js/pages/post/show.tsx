import PageHead from '@/components/page-head'
import MainLayout from '@/layouts/main-layout'
import { PostShowProps } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Link } from '@inertiajs/react'
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { postTags } from '@/data/postTags'
import { formatDate, getActiveTags, getReadingTime } from '@/lib/utils'

export default function Show({ post }: PostShowProps) {
    const activeTags = getActiveTags(post, postTags);
    const publishDate = post.published_at || post.created_at;
    const readingTime = getReadingTime(post.content);

    return (
        <>
            <PageHead
                title={post.title}
                font='inter'
            />
            <MainLayout>
                <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    <div className="mb-8">
                        <Link href={route('posts.index')}>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2 -ml-2"
                            >
                                <ArrowLeftIcon className="size-4" />
                                Back to Blog
                            </Button>
                        </Link>
                    </div>
                    <header className="mb-12">
                        {activeTags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {activeTags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="outline"
                                        className="text-xs capitalize font-normal"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight break-words">
                            {post.title}
                        </h1>
                        {post.subtitle && (
                            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                                {post.subtitle}
                            </p>
                        )}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="size-4" />
                                <time dateTime={publishDate}>
                                    {formatDate(publishDate)}
                                </time>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="size-4" />
                                <span>{readingTime} min read</span>
                            </div>
                        </div>
                        <Separator className="mt-8" />
                    </header>
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none
                            prose-headings:font-bold prose-headings:tracking-tight
                            prose-h1:text-4xl prose-h1:mb-8
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                            prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:font-semibold
                            prose-code:before:content-none prose-code:after:content-none
                            prose-pre:bg-secondary prose-pre:border prose-pre:border-border
                            prose-img:rounded-lg prose-img:shadow-lg
                            prose-blockquote:border-l-4 prose-blockquote:border-primary
                            prose-blockquote:pl-6 prose-blockquote:italic
                            prose-ul:my-6 prose-ol:my-6
                            prose-li:my-2"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <footer className="mt-16">
                        <Separator className="mb-8" />
                        <div className="text-center">
                            <Link href={route('posts.index')}>
                                <Button
                                    variant="outline"
                                    className="gap-2"
                                >
                                    <ArrowLeftIcon className="size-4" />
                                    Back to All Posts
                                </Button>
                            </Link>
                        </div>
                    </footer>
                </article>
            </MainLayout>
        </>
    )
}
