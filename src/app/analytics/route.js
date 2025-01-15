import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function POST(req) {
  const { slug } = await req.json();

  try {
    const { data, error: fetchError } = await supabase
      .from('page_views')
      .select('*')
      .eq('slug', slug)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      throw fetchError;
    }

    if (data) {
      const { error: updateError } = await supabase
        .from('page_views')
        .update({ total_visits: data.total_visits + 1 })
        .eq('slug', slug);

      if (updateError) {
        console.log('Error updating page views:', updateError);
      }
    } else {
      const { error: insertError } = await supabase
        .from('page_views')
        .insert([{
          slug: slug,
          total_visits: 1,
        }]);

      if (insertError) {
        console.log('Error inserting page views:', insertError);
      }
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error incrementing page views:', error);
    return NextResponse.json({ error: 'Error incrementing page views' }, { status: 500 });
  }
}
