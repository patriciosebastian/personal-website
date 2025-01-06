'use client'

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
    <>
      <h1>Create New Post</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
