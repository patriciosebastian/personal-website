import { supabase } from "@/lib/supabaseClient"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MobileNav from "@/components/mobile-nav"
import MainFooter from "@/components/main-footer"
import Spacer from "@/components/ui/spacer"
import Link from "next/link"

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
      <MobileNav />
      <div className="max-w-lg lg:max-w-3xl mx-auto">
        <div className="h-56 flex flex-col justify-center items-start gap-4 border-b-[1px] mb-8">
          <h1 className="text-4xl mt-14">Blog</h1>
          <p className="text-pretty">Look at you! Reading my blog &#129395;<br />
          I write about web development, entrepreneurialism, and things in life I care about.</p>
        </div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle className="text-balance"><Link href={`/blog/${blog.slug}`}>{blog.title}</Link></CardTitle>
                  <CardDescription className="text-primary">
                    {blog.sub_title}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="text-gray-500">
                  {(blog.is_freelance) ? <Badge variant="outline" className="mr-2">freelance</Badge> : null}
                  {(blog.is_web_development) ? <Badge variant="outline" className="mr-2">web development</Badge> : null}
                  {(blog.is_tech) ? <Badge variant="outline" className="mr-2">tech</Badge> : null}
                  {(blog.is_entrepreneurialism) ? <Badge variant="outline" className="mr-2">entrepreneurialism</Badge> : null}
                  {(blog.is_life) ? <Badge variant="outline" className="mr-2">life</Badge> : null}
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
