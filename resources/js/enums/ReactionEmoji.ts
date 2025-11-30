export enum ReactionEmoji {
  HEART = 'heart',
  FIRE = 'fire',
  ROCKET = 'rocket',
}

export const reactionEmojiLabels: Record<ReactionEmoji, string> = {
  [ReactionEmoji.HEART]: '❤️',
  [ReactionEmoji.FIRE]: '🔥',
  [ReactionEmoji.ROCKET]: '🚀',
};

export const reactionEmojiValues = Object.values(ReactionEmoji);

export type ReactionEmojiValue = `${ReactionEmoji}`;