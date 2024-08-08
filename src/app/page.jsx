import Link from 'next/link'
import { badgeVariants } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main>
      {/* Hero */}
      {/* NOTE: can I make the main el a .container? */}
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

      {/* About */}
      <div className="container px-4">
        <h2 className="text-4xl">About</h2>
        <Tabs defaultValue="career" className="border py-4">
          <TabsList className="bg-transparent border-b-2 rounded-none">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
            <TabsTrigger value="Other">Other...</TabsTrigger>
            <TabsTrigger value="Cool-stuff">Cool Stuff</TabsTrigger>
          </TabsList>
          <TabsContent value="career" className="px-4 py-2">I'm a Software Developer at <a className="underline" href="https://empire-medical.com/" target="_blank">Empire Medical</a>. In my previous work (both professional and personal) I've mainly used a pure JavaScript stack, but I use PHP & Laravel in my current position. I'm dedicated to building exceptional experiences and writing quality code that solves problems… and I like to push to production often! View my projects and skills to learn more.</TabsContent>
          <TabsContent value="tech-stack" className="px-4 py-2">
            <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Frontend</div>
            <ol className="grid grid-cols-2 mb-4">
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ol>
            <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Full-stack</div>
            <ol className="grid grid-cols-2 mb-4">
              <li>Livewire</li>
              <li>Next.js</li>
            </ol>
            <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Backend</div>
            <ol className="grid grid-cols-2 mb-4">
              <li>Node.js</li>
              <li>PHP</li>
              <li>Express.js</li>
              <li>Laravel</li>
            </ol>
            <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Database</div>
            <ol className="grid grid-cols-2 mb-4">
              <li>PostgreSQL</li>
            </ol>
            <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Tooling</div>
            <ol className="grid grid-cols-2 mb-4">
              <li>Git/GitHub</li>
              <li>Notion</li>
              <li>Postman</li>
              <li>Slack</li>
              <li>VSCode</li>
              <li>Communication</li>
            </ol>
          </TabsContent>
          <TabsContent value="Other" className="px-4 py-2">Other.</TabsContent>
          <TabsContent value="Cool-stuff" className="px-4 py-2">Cool stuff.</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
