'use client'

import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

export default function CreatePostPage() {
  const supabase = createClient();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error getting session:', error.message);
      }

      if (session === null) {
        // window.location.href = '/secret-login';
        console.log('No session:', session);
      } else {
        setSession(session);
      }
    };
    getSession();
  }, []);

  if (session === null) return <p>Nice try! :D</p>;

  return (
    <>
      <h1>Create New Post</h1>
      <button>Logout</button>
    </>
  )
}
