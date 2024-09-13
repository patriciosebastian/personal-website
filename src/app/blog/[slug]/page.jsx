import MainFooter from '@/components/main-footer'
import MobileNav from '@/components/mobile-nav'
import Spacer from '@/components/ui/spacer'
import { supabase } from '@/lib/supabaseClient'
import parse from 'html-react-parser'
import Image from 'next/image'

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

  // Replace img tags with Next.js Image component
  const transform = (node) => {
    if (node.type === 'tag' && node.name === 'img') {
      const { src, alt, width, height, class: className } = node.attribs;
      return (
        <Image
          src={src}
          alt={alt || ''}
          width={width ? parseInt(width, 10) : 800}
          height={height ? parseInt(height, 10) : 500}
          className={className ? className : ''}
        />
      );
    }
  };

  return (
    <>
      <MobileNav />

      <Spacer />

      <div className="blog-post max-w-lg lg:max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-balance">{blog.title}</h1>
        <p>{blog.sub_title}</p>
        <small className="text-muted-foreground">{new Date(blog.created_at).toLocaleDateString()}</small>
        <Spacer className="h-6" />
        <div className="text-balance">{parse(blog.body, { replace: transform })}</div>
      </div>

      <Spacer />

      <MainFooter />
    </>
  );
}
