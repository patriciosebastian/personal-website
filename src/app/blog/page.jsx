import { supabase } from "@/lib/supabaseClient"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MobileNav from "@/components/mobile-nav"
import MainFooter from "@/components/main-footer"
import Spacer from "@/components/ui/spacer"
import Link from "next/link"

// Revalidate cache every hour
export const revalidate = 3600;

export const metadata = {
  title: "Blog - Patricio Salazar",
  description: "Read about my latest learnings in Full Stack Software Development. Or, follow for updates on my build-in-public and learn-in-public Side Projects.",
  keywords: ["Blog", "Software Development", "Full Stack", "Programming", "Web Development", "Tech Articles", "Tutorials", "JavaScript", "Next.js", "React", "Laravel", "PHP", "Side Projects", "Learn In Public", "Build In Public", "Solopreneur"],
  openGraph: {
    title: "Blog - Patricio Salazar",
    description: "Read about my latest learnings in Full Stack Software Development. Or, follow for updates on my build-in-public and learn-in-public Side Projects.",
    url: "https://patriciosalazar.dev/blog",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog - Patricio Salazar",
    description: "Read about my latest learnings in Full Stack Software Development. Or, follow for updates on my build-in-public and learn-in-public Side Projects.",
  },
  alternates: {
    canonical: "https://patriciosalazar.dev/blog",
  },
};

export default async function BlogPage() {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
    return <p>Error loading blogs.</p>;
  }

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Patricio Salazar Blog",
            "description": "Full Stack Software development blog with tutorials, build-in-public insights, and side projects",
            "url": "https://patriciosalazar.dev/blog",
            "author": {
              "@type": "Person",
              "name": "Patricio Salazar",
              "jobTitle": "Software Developer"
            },
            "publisher": {
              "@type": "Person",
              "name": "Patricio Salazar"
            },
            "blogPost": blogs?.map(blog => ({
              "@type": "BlogPosting",
              "headline": blog.title,
              "description": blog.preview,
              "url": `https://patriciosalazar.dev/blog/${blog.slug}`,
              "datePublished": blog.created_at,
              // "dateModified": blog.updated_at || blog.created_at,
              "author": {
                "@type": "Person",
                "name": "Patricio Salazar"
              }
            })) || []
          }),
        }}
      />

      <MobileNav />
      <div className="max-w-lg lg:max-w-3xl mx-auto">
        <div className="h-56 flex flex-col justify-center items-start gap-4 border-b mb-8">
          <h1 className="text-4xl mt-14">Blog</h1>
          <p className="text-pretty">Look at you! Thanks for stopping by &#129395;<br />
          I write about web development, side projects, and things in life I care about.</p>
        </div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle className="text-balance hover:text-muted-foreground w-fit">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-primary">
                    {blog.sub_title}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-y-2 md:flex-none">
                  {(blog.is_freelance) ? <Badge variant="outline" className="mr-2">freelance</Badge> : null}
                  {(blog.is_web_development) ? <Badge variant="outline" className="mr-2">web development</Badge> : null}
                  {(blog.is_tech) ? <Badge variant="outline" className="mr-2">tech</Badge> : null}
                  {/* {(blog.is_entrepreneurship) ? <Badge variant="outline" className="mr-2">side project</Badge> : null} */}
                  {(blog.is_life) ? <Badge variant="outline" className="mr-2">life</Badge> : null}
                  {(blog.is_side_project) ? <Badge variant="outline" className="mr-2">side project</Badge> : null}
                  <small className="ml-auto">{new Date(blog.created_at).toLocaleDateString()}</small>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <Spacer />

      <MainFooter />
    </>
  );
}
