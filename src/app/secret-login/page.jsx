'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'

export default function SecretLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabase = createClient();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error('Error logging in:', error);
      // should I rickroll them?
      // window.location.href = '/secret-login';
    } else {
      window.location.href = '/admin/create-post';
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
