import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { badgeVariants } from "@/components/ui/badge"

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="container min-h-svh flex flex-col justify-center items-center text-center text-balance relative">
        <h1 className="text-8xl">Patricio Salazar</h1>
        <p>Full-stack Software Developer and stand up community member in Austin, TX.</p>
        {/* xxx Badges */}
        <div className="flex flex-wrap justify-center gap-3 h-24 pt-6">
          {/* NOTE: pages/sections or any other text (quantitave numbers or other text) || bigger font-size || possibly add icons to all link badges */}
          <Link href="/blog" className={badgeVariants({ variant: "outline" }) + ` h-12 justify-center px-8 border-2 border-black font-bold`}>About</Link>
          <Link href="/blog" className={badgeVariants({ variant: "outline" }) + ` h-12 justify-center px-8 border-2 border-black font-bold`}>Projects</Link>
          <Link href="/blog" className={badgeVariants({ variant: "outline" }) + ` h-12 justify-center px-8 border-2 border-black font-bold`}>Latest Article</Link>
        </div>
        {/* Social Badges */}
        <div className="flex gap-4 absolute bottom-16">
          <Link href="https://github.com/patriciosebastian" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>GitHub</Link>
          <Link href="https://www.linkedin.com/in/patriciosalazardev" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>Linkedin</Link>
          <Link href="mailto:psebastiansalazar@gmail.com" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>Email</Link>
          <Link href="/blog" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>Blog</Link>
        </div>
      </div>
    </main>
  );
}
