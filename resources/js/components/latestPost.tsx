import { Post } from '@/types'
import SectionHeading from './ui/section-heading'
import { Link, usePage } from '@inertiajs/react'
import { postTags } from '@/data/postTags'
import { useRoute } from 'ziggy-js'
import { formatDate, getReadingTime } from '@/lib/utils'
import { useState } from 'react'

export default function LatestPost() {
    const { latestPost } = usePage<{ latestPost: Post }>().props
    const route = useRoute();
    const [hovered, setHovered] = useState(false);
    const publishDate = latestPost.published_at || latestPost.created_at;
    const readingTime = getReadingTime(latestPost.content);
    const activeTags = postTags
        .filter((tag) => latestPost[tag as keyof Post])
        .map((tag) => tag.replace('is_', '').replaceAll('_', ' '));

    return (
        <section
            className="w-full mx-auto px-4 sm:px-6 lg:px-0 pt-24 pb-40"
            id="latestPost"
        >
            <SectionHeading
                headingText="Latest Post"
                chapter="III"
            />
            <div className="max-w-180 mx-auto px-2">
                <Link
                    href={route('posts.show', { post: latestPost.slug })}
                    prefetch
                    className="block"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4.5">
                        {formatDate(publishDate)}
                        <span className="opacity-40 mx-1.5">·</span>
                        {readingTime} min read
                        {activeTags.length > 0 && (
                            <>
                                <span className="opacity-40 mx-1.5">·</span>
                                {activeTags.join(', ')}
                            </>
                        )}
                    </p>

                    <h3
                        className="font-display font-normal tracking-[-0.01em] leading-[1.2] text-foreground mb-5 transition-opacity duration-200"
                        style={{
                            fontSize: 'clamp(1.625rem, 4vw, 2.25rem)',
                            opacity: hovered ? 0.38 : 1,
                        }}
                    >
                        {latestPost.title}
                    </h3>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-border" />
                        <span className={`text-xs tracking-[0.08em] uppercase transition-colors duration-180 shrink-0 ${hovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                            Read →
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
