import MainFooter from '@/components/main-footer';
import MobileNav from '@/components/mobile-nav';
import Spacer from '@/components/ui/spacer';
import { supabase } from '@/lib/supabaseClient';

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    return <p>Error loading the blog post.</p>;
  }

  return (
    <main className="blog-post">
      {/* NOTE: update layout */}
      <MobileNav />

      <Spacer />

      <h1 className="text-3xl font-bold text-balance">{blog.title}</h1>
      <p>{blog.sub_title}</p>
      <small className="text-muted-foreground">{new Date(blog.created_at).toLocaleDateString()}</small>
      <Spacer className="h-12" />
      <div dangerouslySetInnerHTML={{__html: blog.body}} className="text-balance"></div>

      <Spacer />

      <MainFooter />
    </main>
  );
}
