'use client'

import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react"
import { throttle } from "@/lib/utils"

const emojis = [
  { label: 'heart', emoji: '❤️' },
  { label: 'fire', emoji: '🔥' },
  { label: 'rocket', emoji: '🚀' },
];

export default function Reactions({ postId }) {
  const [counts, setCounts] = useState({
    heart: null,
    fire: null,
    rocket: null,
  });

  const fetchReactionCounts = async () => {
    const { data, error } = await supabase
      .rpc('get_reaction_counts', { post_id_input: postId });

    if (error) {
      console.error("Error fetching reaction counts:", error);
    } else {
      const newCounts = { heart: null, fire: null, rocket: null };
      data.forEach(({ emoji, count}) => {
        if (emoji === '❤️') newCounts.heart = count;
        if (emoji === '🔥') newCounts.fire = count;
        if (emoji === '🚀') newCounts.rocket = count;
      });

      setCounts(newCounts);
    }
  };
  
  useEffect(() => {
    fetchReactionCounts();
    // eslint-disable-next-line
  }, [postId]);
  
  const handleClick = throttle(async (emojiLabel) => {
    const { data, error } = await supabase
      .from('reactions')
      .insert([{ post_id: postId, emoji: emojiLabel }]);

    if (error) {
      console.error("Error adding reaction:", error);
    } else {
      fetchReactionCounts();
    }
  }, 2000);

  return (
    <div className="flex justify-center items-center px-2 rounded-full space-x-2 w-fit border border-border bg-secondary/40 2xl:fixed 2xl:flex-col 2xl:left-3/4 2xl:mt-2 2xl:px-1 2xl:py-6 2xl:gap-2">
      {emojis.map(({ label, emoji }) => (
        <button
          key={label}
          onClick={() => handleClick(emoji)}
          className="p-1 rounded-full transition-all duration-200 2xl:ml-0! flex justify-center items-center"
        >
          <span className="2xl:text-2xl transition-transform duration-200 transform hover:scale-125 inline-block">{emoji}</span>
          <span className="ml-1 2xl:text-xl inline-block">{counts[label]}</span>
        </button>
      ))}
    </div>
  );
}