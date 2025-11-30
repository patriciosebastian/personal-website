import { Reaction } from "@/types"
import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item"
import { useState } from "react"
import { reactionEmojiLabels } from "@/enums/ReactionEmoji"

interface ReactionsProps {
    reactions: Reaction[];
}

export default function Reactions({ reactions }: ReactionsProps) {
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");

    function formatDateAndTime(created_at: string) {
        setDate(created_at.split(',')[0]);
        setTime(created_at.split(',')[1]);

        return { date, time };
    }

    return (
        <>
            <div className="text-lg pl-6 my-4 font-semibold">Latest Reactions</div>
            <ul className="space-y-4 px-6 mb-6">
                {reactions.map(reaction => (
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
                            <p className="text-xs">{formatDateAndTime(new Date(reaction.created_at).toLocaleString()).date}</p>
                            <p className="text-xs text-muted-foreground">{formatDateAndTime(new Date(reaction.created_at).toLocaleString()).time}</p>
                        </ItemContent>
                    </Item>
                ))}
            </ul>
        </>
    );
};
