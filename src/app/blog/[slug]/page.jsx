import ConvertKitForm from '@/components/convertKit-form'
import MainFooter from '@/components/main-footer'
import MobileNav from '@/components/mobile-nav'
import Reactions from '@/components/reactions'
import Spacer from '@/components/ui/spacer'
import { supabase } from '@/lib/supabaseClient'
import { trackPageView } from '@/lib/utils'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'

// Revalidate cache every hour
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { data: posts, error } = await supabase
    .from('blogs')
    .select('slug');

  if (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const description = blog.preview || 
    (blog.body ? blog.body.replace(/<[^>]*>/g, '').substring(0, 160) + '...' : 
    'Read this insightful blog post by Patricio Salazar');

    const tags = [];
    if (blog.is_freelance) tags.push('Freelance');
    if (blog.is_web_development) tags.push('Web Development');
    if (blog.is_tech) tags.push('Technology');
    if (blog.is_life) tags.push('Life');
    if (blog.is_side_project) tags.push('Side Project');
    if (blog.is_thoughts) tags.push('Thoughts');
    if (blog.is_product_review) tags.push('Product Review');
    tags.push("Full Stack", "Blog Post", "Learn In Public", "Software Development");

  return {
    title: blog.title,
    description: description,
    keywords: tags.join(', '),
    authors: [{ name: "Patricio Salazar" }],
    openGraph: {
      title: blog.title,
      description: description,
      url: `https://patriciosalazar.dev/blog/${slug}`,
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at || blog.created_at,
      authors: ["Patricio Salazar"],
      section: "Technology",
      tags: tags,
    },
    twitter: {
      card: "summary",
      title: blog.title,
      description: description,
      creator: "@patricio_slzr",
    },
    alternates: {
      canonical: `https://patriciosalazar.dev/blog/${slug}`,
    },
    other: {
      'article:author': 'Patricio Salazar',
      'article:published_time': blog.created_at,
      'article:modified_time': blog.updated_at || blog.created_at,
      'article:section': 'Technology',
      'article:tag': blog.tags || 'Software Development',
    },
  };
}

export default async function Page({ params }) {
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

  await trackPageView(slug);

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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blog.title,
          "description": blog.preview ?
          blog.preview :
          blog.body ?
          blog.body.replace(/<[^>]*>/g, '').substring(0, 160).trim() + "..."
            : "Read this insightful blog post by Patricio Salazar",
          "author": {
            "@type": "Person",
            "name": "Patricio Salazar",
            "url": "https://patriciosalazar.dev"
          },
          "publisher": {
            "@type": "Person",
            "name": "Patricio Salazar",
          },
          "datePublished": blog.created_at,
          "dateModified": blog.updated_at || blog.created_at,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://patriciosalazar.dev/blog/${slug}`
          },
          "url": `https://patriciosalazar.dev/blog/${slug}`,
          "keywords": (() => {
            const tags = [];
            if (blog.is_freelance) tags.push("Freelance");
            if (blog.is_web_development) tags.push("Web Development");
            if (blog.is_tech) tags.push("Technology");
            if (blog.is_life) tags.push("Lifestyle");
            if (blog.is_side_project) tags.push("Side Project");
            if (blog.is_thoughts) tags.push("Thoughts");
            if (blog.is_product_review) tags.push("Product Review");
            tags.push("Full Stack", "Blog Post", "Learn In Public", "Software Development");
            return tags.length > 0 ? tags.join(", ") : "software development, programming, web development, full stack, side project, learn in public";
          })(),
          "articleSection": "Technology",
          "inLanguage": "en-US"
        }),
      }}
    />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://patriciosalazar.dev"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://patriciosalazar.dev/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": blog.title,
                "item": `https://patriciosalazar.dev/blog/${slug}`
              }
            ]
          }),
        }}
      />

      <MobileNav />

      <Spacer />

      <div className="blog-post max-w-lg lg:max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-pretty">{blog.title}</h1>
        <p>{blog.sub_title}</p>
        <small>{new Date(blog.created_at).toLocaleDateString()}</small>
        <Spacer className="h-2 lg:hidden" />
        <Reactions postId={blog.id} />
        <Spacer className="h-6" />
        <div className="blog-post-body overflow-x-hidden">
          {parse(blog.body, { replace: transform })}
        </div>
      </div>

      <Spacer />

      <p className="relative border p-4 rounded">
        <div className="absolute size-8 -top-4 rounded-full flex justify-center items-center bg-accent text-primary font-bold border animate-spin duration-[2000ms]">
          ?
        </div>
        Got thoughts on this article or anything else? I&apos;d love to connect and hear from you. <a href="mailto:psebastiansalazar@gmail.com" className="underline font-bold">Hit me up!</a>
      </p>

      <Spacer />

      <ConvertKitForm />

      <Spacer />

      <MainFooter />
    </>
  );
}
