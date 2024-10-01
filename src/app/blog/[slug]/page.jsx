import ConvertKitForm from '@/components/convertKit-form'
import MainFooter from '@/components/main-footer'
import MobileNav from '@/components/mobile-nav'
import Reactions from '@/components/reactions'
import Spacer from '@/components/ui/spacer'
import { supabase } from '@/lib/supabaseClient'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'

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

    // Replace anchor tags with Next.js Link component
    if (node.type === 'tag' && node.name === 'a') {
      const { href, class: className } = node.attribs;
      return (
        <Link
          href={href}
          className={className ? className : ''}
          target="_blank"
          rel="noopener noreferrer"
        >
          {node.children[0].data}
        </Link>
      );
    }
  };

  return (
    <>
      <MobileNav />

      <Spacer />

      <div className="blog-post max-w-lg lg:max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-pretty">{blog.title}</h1>
        <p>{blog.sub_title}</p>
        <small>{new Date(blog.created_at).toLocaleDateString()}</small>
        <Spacer className="h-2 lg:hidden" />
        <Reactions postId={blog.id} />
        <Spacer className="h-6" />
        <div>{parse(blog.body, { replace: transform })}</div>
      </div>

      <Spacer />

      <ConvertKitForm />

      <Spacer />

      <MainFooter />
    </>
  );
}
