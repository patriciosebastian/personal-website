import { formatDate, getActiveTags, getReadingTime } from '@/lib/utils'
import { PostCardProps } from '@/types'
import { Link } from '@inertiajs/react'
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
                            className="group block py-11"
                            prefetch
                        >
                            <div className="space-y-3.5">
                                <div className="flex items-center gap-2.5 text-[12px] text-muted-foreground tracking-[0.05em] uppercase flex-wrap">
                                    <time dateTime={publishDate}>
                                        {formatDate(publishDate)}
                                    </time>
                                    <span className="opacity-40">·</span>
                                    <span>{readingTime} min read</span>
                                </div>
                                <h3
                                    className="font-display font-medium tracking-[-0.015em] leading-[1.2] text-foreground transition-opacity duration-200 group-hover:opacity-40 wrap-break-word"
                                    style={{ fontSize: 'clamp(1.5rem, 3.2vw, 1.875rem)' }}
                                >
                                    {post.title}
                                </h3>
                                {post.subtitle && (
                                    <p className="text-[15px] text-muted-foreground leading-[1.65]">
                                        {post.subtitle}
                                    </p>
                                )}
                                {post.preview_text && (
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                        {post.preview_text}
                                    </p>
                                )}
                                {activeTags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {activeTags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[11px] capitalize px-2.5 py-0.5 border border-border rounded text-muted-foreground tracking-[0.04em]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Link>
                        {index < posts.data.length - 1 && (
                            <Separator />
                        )}
                    </article>
                );
            })}
        </>
    );
}
