import { useFormatDateAndTime } from "@/hooks/use-format-date-time"
import { PaginatedData, Post } from "@/types"
import { Item, ItemContent, ItemTitle } from "../ui/item"
import { Link } from "@inertiajs/react"
import { useRoute } from "ziggy-js"
import { Activity, useEffect, useState } from "react"
import InertiaPagination from "../ui/inertia-pagination"

interface DraftPostsProps {
    draftPosts: PaginatedData<Post>;
}

export default function Drafts({ draftPosts }: DraftPostsProps) {
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
                {draftPosts.data.map(draft => {
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
                                className="w-full flex justify-between items-start gap-2"
                            >
                                <ItemContent>
                                    <ItemTitle>{draft.title}</ItemTitle>
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
            <Activity mode={Object.keys(draftPosts).length > 10 ? 'visible' : 'hidden'}>
                <InertiaPagination
                    current_page={draftPosts.current_page}
                    last_page={draftPosts.last_page}
                    first_page_url={draftPosts.first_page_url!}
                    last_page_url={draftPosts.last_page_url!}
                    prev_page_url={draftPosts.prev_page_url!}
                    next_page_url={draftPosts.next_page_url!}
                    links={draftPosts.links}
                    className="w-fit my-4 mr-0"
                />
            </Activity>
        </>
    );
};
