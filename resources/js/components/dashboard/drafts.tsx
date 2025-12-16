import { useFormatDateAndTime } from "@/hooks/use-format-date-time"
import { Post } from "@/types"
import { Item, ItemContent, ItemTitle } from "../ui/item"
import { Link } from "@inertiajs/react"
import { useRoute } from "ziggy-js"
import { useEffect, useState } from "react"

export default function Drafts({ draftPosts }: { draftPosts: Post[] }) {
    const formatDateAndTime = useFormatDateAndTime;
    const route = useRoute();
    const selectedPostSlug = route().params.post as string | undefined;
    const [selectedPost, setSelectedPost] = useState("");

    useEffect(() => {
        setSelectedPost(selectedPostSlug || "");
    }, [selectedPostSlug]);

    return (
        <>
            <div className="text-lg pl-6 my-4 font-semibold">Drafts</div>
            <ul className="space-y-4 px-6 mb-6">
                {draftPosts.map(draft => {
                    const { date, time } = formatDateAndTime(new Date(draft.created_at).toLocaleString());

                    return (
                        <Item
                            variant={"muted"}
                            className={`items-start wrap-anywhere
                                ${selectedPost === draft.slug
                                    ? 'bg-accent dark:bg-accent'
                                    : 'bg-muted/10 dark:bg-muted/20 hover:bg-muted/60 dark:hover:bg-muted/60'}`}
                            key={draft.id}
                        >
                            <Link
                                href={route('dashboard.index', { post: draft.slug })}
                                only={['postToPreview']}
                                className="w-full flex items-start gap-2 justify-between"
                            >
                                <ItemContent>
                                    <ItemTitle className="text-xs">{draft.title}</ItemTitle>
                                </ItemContent>
                                <ItemContent>
                                    <p className="text-xs">{date}</p>
                                    <p className="text-xs text-muted-foreground">{time}</p>
                                </ItemContent>
                            </Link>
                        </Item>
                    );
                })}
            </ul>
        </>
    );
};
