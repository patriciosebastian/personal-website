import Link from 'next/link'
import { Badge, badgeVariants } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from '@/lib/supabaseClient'
import Image from 'next/image'
import MainFooter from '@/components/main-footer'
import MobileNav from '@/components/mobile-nav'
import Spacer from '@/components/ui/spacer'
import HelloWorld1 from '../../public/Hello_World_Desk_Setup_optimized.webp'
import HelloWorld2 from '../../public/Hello_World_Desk_Setup_2_optimized.webp'

export default async function Home() {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    console.error("Error fetching blogs:", error);
    return <p>Error loading blogs.</p>;
  }

  const latestBlog = blogs && blogs[0];

  return (
    <main>
      {/* Hero */}
      <div className="min-h-svh flex flex-col justify-center items-center text-center text-balance relative">
        <h1 className="text-8xl">Patricio Salazar</h1>
        <p>Full-stack Software Developer and stand up community member in Austin, TX.</p>
        {/* xxx Badges */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <Link href="#Projects" className={buttonVariants({ variant: "outline" }) + ` h-12 justify-center !border-foreground font-bold`}>Projects</Link>
          <Link href={`/blog/${latestBlog.slug}`} className={buttonVariants({ variant: "outline" }) + ` h-12 justify-center !border-foreground font-bold`}>Latest Article</Link>
        </div>
        {/* Social Badges */}
        <div className="flex gap-4 absolute bottom-16">
          {/* NOTE: should badges become icons? */}
          <Link href="https://github.com/patriciosebastian" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>GitHub</Link>
          <Link href="https://www.linkedin.com/in/patriciosalazardev" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>Linkedin</Link>
          <Link href="mailto:psebastiansalazar@gmail.com" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>Email</Link>
          <Link href="/blog" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>Blog</Link>
        </div>
      </div>

      <Spacer className="h-12" />

      {/* Mobile Nav Menu */}
      <MobileNav />

      <Spacer />

      {/* About */}
      <div>
        <h2 className="section-heading text-4xl text-center">About</h2>
        <Tabs defaultValue="career" className="rounded-md py-4">
          <TabsList className=" w-full bg-transparent border-b-2 rounded-none p-0 box-border">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
            <TabsTrigger value="Other">Other</TabsTrigger>
            <TabsTrigger value="Cool-stuff">Stuff</TabsTrigger>
          </TabsList>
          <TabsContent value="career" className="px-4 py-2">I&#39;m a Software Developer at <a className="underline" href="https://empire-medical.com/" target="_blank">Empire Medical</a>. In my previous work (both professional and personal) I&#39;ve mainly used a pure JavaScript stack, but I use PHP & Laravel in my current position. I&#39;m dedicated to building exceptional experiences and writing quality code that solves problems… and I like to push to production often! View my projects and skills to learn more.</TabsContent>
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
              <li>Atlassian</li>
              <li>Postman</li>
              <li>Slack</li>
              <li>VSCode</li>
              <li>Notion</li>
            </ol>
          </TabsContent>
          <TabsContent value="Other" className="px-4 py-2">Other.</TabsContent>
          <TabsContent value="Cool-stuff" className="px-4 py-2">Cool stuff.</TabsContent>
        </Tabs>
      </div>

      <Spacer />

      {/* Projects */}
      <div>
        <h2 className="section-heading text-4xl text-center" id="Projects">Projects</h2>
        {/* 1. */}
        <Card className="mb-4">
          <CardHeader>
            <Image src="https://www.patriciosalazar.dev/img/TouchBase_Desktop.png" alt="Touch Base" width={533} height={273} className="mb-4" />
            <CardTitle>Touch Base</CardTitle>
            <CardDescription className="text-pretty !mb-1">Full stack React Contacts Management app</CardDescription>
            <div className="flex flex-wrap items-center gap-1">
              <Badge variant="outline">CSS</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">Express.js</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">Firebase</Badge>
              <Badge variant="outline">SendGrid</Badge>
              <Badge variant="outline">AWS S3</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-balance">
              Touch Base uses React-Router for frontend navigation and Node.js & Express for its backend API, connected to a PSQL database. It features a fully responsive design, full CRUD capabilities for contacts and groups, Firebase Auth, and SendGrid for email functionality. AWS S3 is used for image hosting, and a demo login lets you easily tour the app and safely perform all actions.
            </p>
          </CardContent>
          <CardFooter>
            <a href="https://www.touchbaseapp.co" target='_blank' className={buttonVariants({ variant: "default" }) + ` h-12 justify-center`}>Visit Site</a> {/* <-- use external link icon  */}
          </CardFooter>
        </Card>

        {/* 2. */}
        <Card>
          <CardHeader>
            <Image src="https://www.patriciosalazar.dev/img/ClearCalc_Desktop.png" alt="ClearCalc" width={533} height={273} className="mb-4" />
            <CardTitle>ClearCalc</CardTitle>
            <CardDescription className="text-pretty !mb-1">ClearCalc is a JavaScrpit amortization schedule generator</CardDescription>
            <div className="flex flex-wrap items-center gap-1">
              <Badge variant="outline">HTML</Badge>
              <Badge variant="outline">CSS</Badge>
              <Badge variant="outline">Bootstrap 5</Badge>
              <Badge variant="outline">JavaScript</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-balance">
              ClearCalc is a JavaScript amortization schedule generator. Based on user inputs, it calculates loan details and generates a complete amortization schedule with all the data you would expect to see. Built with JavaScript and Bootstrap, it&#39;s designed to be straightforward and easy to use. It&#39;s fully responsive with side scrolling tables on smaller sized viewports. Try it out now!
            </p>
          </CardContent>
          <CardFooter>
            <a href="https://www.clearcalc.app" target='_blank' className={buttonVariants({ variant: "default" }) + ` h-12 justify-center`}>Visit Site</a>
          </CardFooter>
        </Card>
      </div>

      <Spacer />

      {/* Latest Blog */}
      {latestBlog ? (
        <>
          <h2 className="section-heading text-4xl text-center">Latest Blog</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-balance"><Link href={`/blog/${latestBlog.slug}`}>{latestBlog.title}</Link></CardTitle>
              <CardDescription className="text-primary">
                {latestBlog.sub_title}
              </CardDescription>
            </CardHeader>
            <CardFooter className="text-gray-500">
                {(latestBlog.is_freelance) ? <Badge variant="outline" className="mr-2">freelance</Badge> : null}
                {(latestBlog.is_web_development) ? <Badge variant="outline" className="mr-2">web development</Badge> : null}
                {(latestBlog.is_tech) ? <Badge variant="outline" className="mr-2">tech</Badge> : null}
                {(latestBlog.is_entrepreneurialism) ? <Badge variant="outline" className="mr-2">entrepreneurialism</Badge> : null}
                {(latestBlog.is_life) ? <Badge variant="outline" className="mr-2">life</Badge> : null}
                <small>{new Date(latestBlog.created_at).toLocaleDateString()}</small>
            </CardFooter>
          </Card>

          <Spacer />
        </>
      ) : (
        null
      )}

      {/* Spotify Playlists */}
      <h2 className="text-4xl text-center text-balance">For You</h2>
      <small className="block text-center mb-4 text-balance text-muted-foreground">
        Hey! I made these playlists for you, enjoy.<br />
        &#40;Don&apos;t worry, they don&apos;t have lyrics&#41;
      </small>
      {/* 1. */}
      <Card className="border bg-background mb-4 flex items-center">
        <CardHeader className="w-1/2 p-4 relative">
          <Image src={HelloWorld1} className="rounded mb-2" alt="Computer/Desk Set-up" />
          <div className="absolute !m-1">
            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-background dark:stroke-foreground"><path d="M7 15C7 15 11.5 14 16 16" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 12C6.5 12 12.5 10.5 17.5 13.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 9.00003C9 8.50005 14 8.00006 19 11" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </CardHeader>
        <CardContent className="w-1/2 p-4">
          <p className="font-bold text-balance mb-2 leading-tight">Hello World - beats to code to</p>
          <a href="https://open.spotify.com/playlist/77hkmQ7eTgfvpjPXDPjSRT?si=1f36b33a95fc4621" className={buttonVariants({ variant: "default", size: "sm" }) + ` justify-center`} target='_blank'>Play on Spotify</a>
        </CardContent>
      </Card>

      {/* 2. */}
      <Card className="border bg-background mb-4 flex items-center">
        <CardHeader className="w-1/2 p-4 relative">
          <Image src={HelloWorld2} className="rounded mb-2" alt="Computer/Desk Set-up with the universe in the background" />
          <div className="absolute !m-1">
            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-background dark:stroke-foreground"><path d="M7 15C7 15 11.5 14 16 16" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 12C6.5 12 12.5 10.5 17.5 13.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 9.00003C9 8.50005 14 8.00006 19 11" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </CardHeader>
        <CardContent className="w-1/2 p-4">
          <p className="font-bold text-balance mb-2 leading-tight">Hello World 2 - beats to code to</p>
          <a href="https://open.spotify.com/playlist/3TWuzDL7v8DKhcFatC1g8D?si=3279f73b5ba242a3" className={buttonVariants({ variant: "default", size: "sm" }) + ` justify-center`} target='_blank'>Play on Spotify</a>
        </CardContent>
      </Card>

      <Spacer />

      {/* Footer */}
      <MainFooter />
    </main>
  );
}
