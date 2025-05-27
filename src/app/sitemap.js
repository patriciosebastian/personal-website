import { supabase } from '@/lib/supabaseClient'

export default async function sitemap() {
  const baseUrl = 'https://patriciosalazar.dev';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/freelance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('slug, created_at, updated_at')
    .order('created_at', { ascending: false });

  let blogPages = [];

  if (!error && blogs) {
    blogPages = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.updated_at || blog.created_at),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  }

  return [...staticPages, ...blogPages];
}
