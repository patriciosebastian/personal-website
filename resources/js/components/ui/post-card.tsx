import { formatDate, getActiveTags, getReadingTime } from '@/lib/utils'
import { PostCardProps } from '@/types'
import { Link } from '@inertiajs/react'
import { Badge } from './badge'
import { Separator } from './separator'
import { useRoute } from 'ziggy-js'

export default function PostCard({ posts }: PostCardProps) {
    const route = useRoute();

    return (
        <>
            {posts.data.map((post, index) => {
                const activeTags = getActiveTags(post);
                const readingTime = getReadingTime(post.content);
                const publishDate = post.published_at || post.created_at;

                return (
                    <article
                        className="min-w-0"
                        key={post.id}
                    >
                        <Link
                            href={route('posts.show', { post: post.slug, ref: 'personal-website-blog-index' })}
                            className="group block"
                            prefetch
                        >
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-[0.6875rem] tracking-[0.1em] uppercase text-muted-foreground flex-wrap">
                                    <time dateTime={publishDate}>
                                        {formatDate(publishDate)}
                                    </time>
                                    <span>·</span>
                                    <span>{readingTime} min read</span>
                                </div>
                                <h3 className="font-serif text-[clamp(1rem,3vw,1.375rem)] font-medium tracking-[-0.01em] leading-tight group-hover:opacity-40 transition-opacity duration-200 break-words">
                                    {post.title}
                                </h3>
                                {post.subtitle && (
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {post.subtitle}
                                    </p>
                                )}
                                {post.preview_text && (
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                        {post.preview_text}
                                    </p>
                                )}
                                {activeTags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {activeTags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className="rounded text-[0.6875rem] px-2.5 py-0.5 tracking-[0.05em] capitalize font-normal"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Link>
                        {index < posts.data.length - 1 && (
                            <Separator className="mt-12" />
                        )}
                    </article>
                );
            })}
        </>
    );
}
