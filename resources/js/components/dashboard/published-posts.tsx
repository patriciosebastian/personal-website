import { PaginatedData, Post } from "@/types"
import { Item, ItemContent, ItemDescription, ItemTitle } from "../ui/item"
import { useFormatDateAndTime } from "@/hooks/use-format-date-time"
import { Link } from "@inertiajs/react"
import { useRoute } from "ziggy-js"
import { useEffect, useState } from "react"

interface PublishedPostsProps {
    publishedPosts: PaginatedData<Post>;
}

export default function PublishedPosts({ publishedPosts }: PublishedPostsProps) {
    const formatDateAndTime = useFormatDateAndTime;
    const route = useRoute();
    const selectedPostSlug = route().params.post as string | undefined;
    const [selectedPost, setSelectedPost] = useState("");

    useEffect(() => {
        setSelectedPost(selectedPostSlug || "");
    }, [selectedPostSlug]);

    return (
        <div>
            <div className="text-lg pl-6 my-4 font-semibold">Published Posts</div>
            <ul className="space-y-4 px-6 mb-6">
                {publishedPosts.data.map(post => {
                    const { date, time } = formatDateAndTime(post.published_at ? new Date(post.published_at).toLocaleString() : "");

                    return (
                        <Item
                            variant={"muted"}
                            className={`items-start wrap-anywhere
                                ${selectedPost === post.slug
                                    ? 'bg-accent dark:bg-accent'
                                    : 'bg-muted/10 dark:bg-muted/20 hover:bg-muted/60 dark:hover:bg-muted/60'}`}
                            key={post.id}
                        >
                            <Link
                                href={route('dashboard.index', { post: post.slug })}
                                only={['postToPreview']}
                                className="flex items-start gap-2"
                            >
                                <ItemContent>
                                    <ItemTitle>{post.title}</ItemTitle>
                                    <ItemDescription>{post.preview_text}</ItemDescription>
                                </ItemContent>
                                <ItemContent>
                                    <p>{date}</p>
                                    <p className="text-xs text-muted-foreground">{time}</p>
                                </ItemContent>
                            </Link>
                        </Item>
                    );
                })}
            </ul>
        </div>
    );
};
