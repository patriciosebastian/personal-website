import { supabase } from "@/lib/supabaseClient";
import MobileNav from "@/components/mobile-nav";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <main>
      <MobileNav />
      <div className="h-48 flex justify-start items-center border-b-[1px] mb-8">
        <h1 className="text-4xl">Blog</h1>
      </div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Card>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription className="text-primary">
                  {blog.sub_title}
                </CardDescription>
              </CardHeader>
              <CardFooter className="text-gray-500">
                {(blog.tag) ? <Badge>{blog.tag}</Badge> : null} <small>{new Date(blog.created_at).toLocaleDateString()}</small>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
