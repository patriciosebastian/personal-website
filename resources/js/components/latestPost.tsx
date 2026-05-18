import { Post } from '@/types'
import SectionHeading from './ui/section-heading'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from './ui/item'
import { Link, usePage } from '@inertiajs/react'
import { Badge, badgeVariants } from './ui/badge'
import { postTags } from '@/data/postTags'
import { useRoute } from 'ziggy-js'

export default function LatestPost() {
    const { latestPost } = usePage<{ latestPost: Post }>().props
    const route = useRoute();

    return (
        <section
            className="w-full mx-auto px-4 sm:px-6 lg:px-0 sm:w-[75%] lg:w-5/12 border-t border-border pt-16"
            id="latestPost"
        >
            <SectionHeading headingText="Latest Post" />
            <div className="flex w-full flex-col gap-4">
                <Item variant={"muted"} asChild>
                    <Link href={route('posts.show', { post: latestPost.slug })} prefetch>
                        <ItemContent className="space-y-4">
                            <ItemTitle className="font-serif text-[clamp(1.625rem,4vw,2.25rem)] font-normal leading-[1.2] w-full">
                                {latestPost.title}
                            </ItemTitle>
                            <ItemDescription className="flex flex-wrap items-center gap-2">
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
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <span className="text-sm text-muted-foreground">→</span>
                        </ItemActions>
                    </Link>
                </Item>
            </div>
        </section>
    );
}
