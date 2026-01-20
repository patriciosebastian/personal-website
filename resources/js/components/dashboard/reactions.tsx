import { Reaction } from "@/types"
import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item"
import { reactionEmojiLabels } from "@/enums/ReactionEmoji"
import { useFormatDateAndTime } from "@/hooks/use-format-date-time"

interface ReactionsProps {
    reactions: Reaction[];
}

export default function Reactions({ reactions }: ReactionsProps) {
    const formatDateAndTime = useFormatDateAndTime;

    return (
        <>
            <div className="text-lg pl-6 my-4 font-semibold">Latest Reactions</div>
            <ul className="space-y-4 px-6 mb-6">
                {reactions.map(reaction => {
                    const { date, time } = formatDateAndTime(new Date(reaction.created_at).toLocaleString());

                    return (
                        <Item
                            variant={"muted"}
                            className="items-start"
                            key={reaction.id}
                        >
                            <ItemMedia>
                                {reactionEmojiLabels[reaction.emoji]}
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle className="text-xs">{reaction.post?.title}</ItemTitle>
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
