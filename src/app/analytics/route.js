import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function POST(req) {
  const { slug } = req.json();

  try {
    const { data, error } = await supabase
      .from('page_views')
      .upsert(
        { slug, total_visits: 1 },
        { onConflict: ['slug'], count: true }
      )
      .eq('slug', slug)
      .increment('total_visits', 1);

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error incrementing page views:', error);
    return NextResponse.json({ error: 'Error incrementing page views' }, { status: 500 });
  }
}
