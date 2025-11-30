import { Post } from '@/types'
import SectionHeading from './ui/section-heading'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from './ui/item'
import { ChevronRightIcon } from 'lucide-react'
import { usePage } from '@inertiajs/react'
import { Badge, badgeVariants } from './ui/badge'

export default function LatestPost() {
    const { latestPost } = usePage<{ latestPost: Post }>().props
    const postTags = [
        'is_freelance',
        'is_web_development',
        'is_tech',
        'is_life',
        'is_entrepreneurship',
        'is_side_project',
        'is_product_review',
        'is_thoughts',
    ];

    return (
        <section className="w-5/12 mx-auto">
            <SectionHeading headingText="Latest Post" />
            <div className="flex w-full flex-col gap-4">
                <Item variant={"muted"} asChild>
                    <a href="#">
                        <ItemContent className="space-y-4">
                            <ItemTitle className="text-2xl text-balance">{latestPost.title}</ItemTitle>
                            <ItemDescription className="flex flex-wrap gap-y-2 md:block md:space-y-2 md:space-x-2">
                                {postTags.map((tag) => {
                                    if (latestPost[tag as keyof Post]) {
                                        return (
                                            <Badge
                                                key={tag}
                                                className={badgeVariants({ variant: "secondary" }) + `mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs dark:bg-gray-700`}
                                            >
                                                {tag.replace('is_', '').replaceAll('_', ' ')}
                                            </Badge>
                                        );
                                    }
                                })}
                                <p className="ml-auto mt-2">
                                    {latestPost.published_at
                                        ? new Date(latestPost.published_at).toLocaleDateString()
                                        : new Date(latestPost.created_at).toLocaleDateString()
                                    }
                                </p>
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <ChevronRightIcon className="size-4" />
                        </ItemActions>
                    </a>
                </Item>
            </div>
        </section>
    );
}
