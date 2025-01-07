'use client'

import TinyMCE from "@/components/tinyMCE"
import { Button } from "@/components/ui/button"
import Expandable from "@/components/ui/expandable"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

export default function CreatePostPage() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isFreelance, setIsFreelance] = useState(null);
  const [isWebDevelopment, setIsWebDevelopment] = useState(null);
  const [slug, setSlug] = useState('');
  const [isTech, setIsTech] = useState(null);
  const [isLife, setIsLife] = useState(null);
  const [isEntrepreneurship, setIsEntrepreneurship] = useState(null);
  const [isSideProject, setIsSideProject] = useState(null);
  const [isProductReview, setIsProductReview] = useState(null);
  const [isThoughts, setIsThoughts] = useState(null);
  const supabase = createClient();

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
      <Button className="absolute top-2 right-0 flex items-center space-x-2 text-sm text-muted-foreground" onClick={handleLogout} variant="secondary">Logout</Button>
      <div className="mb-2">
        <label htmlFor="title" className="text-muted-foreground">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          className="block p-2 rounded w-full bg-background border-2 border-background hover:border-secondary"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <Expandable trigger="Post details" className="text-base text-muted-foreground mb-2">
        <div className="grid grid-cols-3 items-center gap-4 text-white p-4 bg-secondary rounded-sm">
          <input type="text" name="subTitle" id="subTitle" placeholder="sub_title" className="p-2" onChange={(e) => setSubTitle(e.target.value)} />
          <input type="text" name="preview" id="preview" placeholder="preview" className="p-2" onChange={(e) => setPreview(e.target.value)} />
          <input type="text" name="slug" id="slug" placeholder="slug" className="p-2" onChange={(e) => setSlug(e.target.value)} />
          <div>
            <input type="checkbox" name="isFreelance" id="isFreelance" className="mr-2 align-middle" onChange={(e) => setIsFreelance(e.target.checked)} />
            <label htmlFor="isFreelance" className="align-middle">is_freelance</label>
          </div>
          <div>
            <input type="checkbox" name="isWebDevelopment" id="isWebDevelopment" className="mr-2 align-middle" onChange={(e) => setIsWebDevelopment(e.target.checked)} />
            <label htmlFor="isWebDevelopment" className="align-middle">is_web_development</label>
          </div>
          <div>
            <input type="checkbox" name="isTech" id="isTech" className="mr-2 align-middle" onChange={(e) => setIsTech(e.target.checked)} />
            <label htmlFor="isTech" className="align-middle">is_tech</label>
          </div>
          <div>
            <input type="checkbox" name="isLife" id="isLife" className="mr-2 align-middle" onChange={(e) => setIsLife(e.target.checked)} />
            <label htmlFor="isLife" className="align-middle">is_life</label>
          </div>
          <div>
            <input type="checkbox" name="isEntrepreneurship" id="isEntrepreneurship" className="mr-2 align-middle" onChange={(e) => setIsEntrepreneurship(e.target.checked)} />
            <label htmlFor="isEntrepreneurship" className="align-middle">is_entrepreneurship</label>
          </div>
          <div>
            <input type="checkbox" name="isSideProject" id="isSideProject" className="mr-2 align-middle" onChange={(e) => setIsSideProject(e.target.checked)} />
            <label htmlFor="isSideProject" className="align-middle">is_side_project</label>
          </div>
          <div>
            <input type="checkbox" name="isProductReview" id="isProductReview" className="mr-2 align-middle" onChange={(e) => setIsProductReview(e.target.checked)} />
            <label htmlFor="isProductReview" className="align-middle">is_product_review</label>
          </div>
          <div>
            <input type="checkbox" name="isThoughts" id="isThoughts" className="mr-2 align-middle" onChange={(e) => setIsThoughts(e.target.checked)} />
            <label htmlFor="isThoughts" className="align-middle">is_thoughts</label>
          </div>
        </div>
      </Expandable>
      <TinyMCE
        title={title}
        subTitle={subTitle}
        preview={preview}
        slug={slug}
        isFreelance={isFreelance}
        isWebDevelopment={isWebDevelopment}
        isTech={isTech}
        isLife={isLife}
        isEntrepreneurship={isEntrepreneurship}
        isSideProject={isSideProject}
        isProductReview={isProductReview}
        isThoughts={isThoughts}
      />
    </div>
  );
}
