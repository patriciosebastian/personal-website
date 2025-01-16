import { cookies } from "next/headers"
import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function POST(req) {
  const { slug } = await req.json();
  const cookieStore = cookies();
  const ownerCookie = cookieStore.get('owner');

  if (ownerCookie?.value === 'true') {
    return NextResponse.json(
      { message: "Page view tracking skipped for owner" },
      { status: 200 }
    );
  }

  try {
    const { data, error: fetchError } = await supabase
      .from('blog_page_views')
      .select('*')
      .eq('slug', slug)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      throw fetchError;
    }

    if (data) {
      const { error: updateError } = await supabase
        .from('blog_page_views')
        .update({ total_visits: data.total_visits + 1 })
        .eq('slug', slug);

      if (updateError) {
        console.log('Error updating page views:', updateError);
      }
    } else {
      const { error: insertError } = await supabase
        .from('blog_page_views')
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
