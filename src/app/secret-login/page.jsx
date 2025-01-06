'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import Image from 'next/image'

export default function SecretLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error logging in:", error);
      setLoading(false);
    } else {
      window.location.href = "/admin/create-post";
      setLoading(false);
    }
  };

  return (
    <div className="h-screen place-content-center flex flex-col gap-6">
      <Card className='h-1/2 overflow-hidden'>
        <CardContent className='h-full grid p-0 md:grid-cols-2'>
          <div className='relative hidden bg-muted md:block'>
            <Image
              src='https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/Misc/bixby-creek-bridge-big-sur.jpg'
              alt='Bixy Creek Bridge and Big Sur'
              className='absolute inset-0 h-full w-full object-cover object-center'
              width={2191}
              height={1460}
            />
          </div>
          <form onSubmit={handleLogin} className='p-6 md:p-8 place-content-center relative'>
            <div className='flex flex-col'>
              <div className='flex flex-col items-center text-center mb-6'>
                <h1 className='text-2xl font-bold'>Log in</h1>
                <p className='text-sm text-balance text-muted-foreground'>
                  Welcome back, Patricio.
                </p>
              </div>
              <input
                type='email'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='p-2 mb-2 rounded'
              />
              <input
                type='password'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='p-2 mb-2 rounded'
              />
              <Button type="submit" disabled={loading} className='mt-2'>
                {loading ? <Loader2 className="animate-spin" /> : 'Log in'}
              </Button>
            </div>
            <div className='text-center text-muted-foreground text-sm absolute bottom-0 left-0 right-0 mb-3'>
              Authorized personnel only.
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
