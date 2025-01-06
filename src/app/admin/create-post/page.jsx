'use client'

import TinyMCE from "@/components/tinyMCE"
import { Button, buttonVariants } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

export default function CreatePostPage() {
  const supabase = createClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error getting session:', error.message);
        redirectToLogin();
      }

      if (!data.user) {
        redirectToLogin();
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      } else {
        setUser(data.user);
      }
    };

    verifyUser();
  }, [supabase.auth]);

  const redirectToLogin = () => {
    window.location.href = '/secret-login';
  };

  if (!user) return <p>Loading...</p>;

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error logging out:', error);
    } else {
      redirectToLogin();
    }
  };

  return (
    <div className="relative min-h-svh place-content-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">Create New Post</h1>
      <div className="absolute top-2 right-0 flex items-center space-x-2 text-sm text-muted-foreground">
        <input type="checkbox" name="rteTheme" id="rteTheme" className="w-4 h-4 mr-[2px]" />Dark
        <Button onClick={handleLogout} variant="secondary">Logout</Button>
      </div>
      <div>
        <label htmlFor="title" className="text-muted-foreground">Title:</label>
        <input type="text" name="title" id="title" className="block p-2 mb-2 rounded w-full bg-background border-2 border-background hover:border-secondary" required />
      </div>
      <TinyMCE />
    </div>
  );
}
