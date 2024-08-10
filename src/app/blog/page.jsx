import { supabase } from "@/lib/supabaseClient";
import MobileNav from "@/components/mobile-nav";

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
      <h1>Blog Page</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.sub_title}</p>
            <small>{new Date(blog.created_at).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
