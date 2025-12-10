import { Post } from '@/types'
import SectionHeading from './ui/section-heading'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from './ui/item'
import { ChevronRightIcon } from 'lucide-react'
import { Link, usePage } from '@inertiajs/react'
import { Badge, badgeVariants } from './ui/badge'
import { postTags } from '@/data/postTags'
import { useRoute } from 'ziggy-js'

export default function LatestPost() {
    const { latestPost } = usePage<{ latestPost: Post }>().props
    const route = useRoute();

    return (
        <section
            className="w-5/12 mx-auto"
            id="latestPost"
        >
            <SectionHeading headingText="Latest Post" />
            <div className="flex w-full flex-col gap-4">
                <Item variant={"muted"} asChild>
                    <Link href={route('posts.show', { post: latestPost.slug })}>
                        <ItemContent className="space-y-4">
                            <ItemTitle className="text-2xl text-balance">{latestPost.title}</ItemTitle>
                            <ItemDescription className="flex flex-wrap items-center space-x-2 space-y-2 md:space-y-0">
                                {postTags.map((tag) => {
                                    if (latestPost[tag as keyof Post]) {
                                        return (
                                            <Badge
                                                key={tag}
                                                className={badgeVariants({ variant: "secondary" }) + `mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs block dark:bg-gray-700`}
                                            >
                                                {tag.replace('is_', '').replaceAll('_', ' ')}
                                            </Badge>
                                        );
                                    }
                                })}
                                <span className="ml-auto">
                                    {latestPost.published_at
                                        ? new Date(latestPost.published_at).toLocaleDateString()
                                        : new Date(latestPost.created_at).toLocaleDateString()
                                    }
                                </span>
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <ChevronRightIcon className="size-4" />
                        </ItemActions>
                    </Link>
                </Item>
            </div>
        </section>
    );
}
