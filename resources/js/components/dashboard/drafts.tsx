import { useFormatDateAndTime } from "@/hooks/use-format-date-time"
import { Post } from "@/types"
import { Item, ItemContent, ItemTitle } from "../ui/item"

export default function Drafts({ draftPosts }: { draftPosts: Post[] }) {
    const formatDateAndTime = useFormatDateAndTime;

    return (
        <>
            <div className="text-lg pl-6 my-4 font-semibold">Drafts</div>
            <ul className="space-y-4 px-6 mb-6">
                {draftPosts.map(draft => {
                    const { date, time } = formatDateAndTime(new Date(draft.created_at).toLocaleString());

                    return (
                        <Item
                            variant={"muted"}
                            className="items-start"
                            key={draft.id}
                        >
                            <ItemContent>
                                <ItemTitle className="text-xs">{draft.title}</ItemTitle>
                            </ItemContent>
                            <ItemContent>
                                <p className="text-xs">{date}</p>
                                <p className="text-xs text-muted-foreground">{time}</p>
                            </ItemContent>
                        </Item>
                    );
                })}
            </ul>
        </>
    );
};
