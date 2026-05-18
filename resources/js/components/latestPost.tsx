import { Post } from '@/types'
import SectionHeading from './ui/section-heading'
import { Link, usePage } from '@inertiajs/react'
import { Badge, badgeVariants } from './ui/badge'
import { postTags } from '@/data/postTags'
import { useRoute } from 'ziggy-js'

export default function LatestPost() {
    const { latestPost } = usePage<{ latestPost: Post }>().props
    const route = useRoute();

    return (
        <section
            className="max-w-[640px] mx-auto px-4 sm:px-6 lg:px-0 border-t border-border pt-16"
            id="latestPost"
        >
            <SectionHeading headingText="Latest Post" />
            <Link
                href={route('posts.show', { post: latestPost.slug })}
                prefetch
                className="group block"
            >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    {postTags.map((tag) => {
                        if (latestPost[tag as keyof Post]) {
                            return (
                                <Badge
                                    key={tag}
                                    className={badgeVariants({ variant: "secondary" }) + ` rounded text-[0.6875rem] px-2 py-0.5 tracking-[0.05em]`}
                                >
                                    {tag.replace('is_', '').replaceAll('_', ' ')}
                                </Badge>
                            );
                        }
                    })}
                    <span className="ml-auto text-[0.6875rem] tracking-[0.1em] uppercase text-muted-foreground">
                        {latestPost.published_at
                            ? new Date(latestPost.published_at).toLocaleDateString()
                            : new Date(latestPost.created_at).toLocaleDateString()
                        }
                    </span>
                </div>
                <p className="font-serif text-[clamp(1.625rem,4vw,2.25rem)] font-normal leading-[1.2] group-hover:opacity-40 transition-opacity duration-200">
                    {latestPost.title}
                </p>
                <div className="flex items-center gap-4 border-t border-border mt-5 pt-4">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-sm text-muted-foreground">Read →</span>
                </div>
            </Link>
        </section>
    );
}
