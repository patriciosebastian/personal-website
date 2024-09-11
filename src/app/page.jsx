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
        <p>Software Developer and stand up community member in Austin, TX.</p>
        {/* xxx Badges */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <Link href="#Projects" className={buttonVariants({ variant: "outline" }) + ` h-12 justify-center !border-foreground font-bold`}>Projects</Link>
          <Link href={`/blog/${latestBlog.slug}`} className={buttonVariants({ variant: "outline" }) + ` h-12 justify-center !border-foreground font-bold`}>Latest Post</Link>
        </div>
        {/* Social Badges */}
        <div className="flex justify-center items-center gap-4 absolute bottom-16">
          {/* github */}
          <Link href="https://github.com/patriciosebastian" className="justify-center px-4 font-bold" target="_blank">
            <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="#000000" className="stroke-foreground fill-background"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Link>
          {/* linkedin */}
          <Link href="https://www.linkedin.com/in/patriciosalazardev" className="justify-center px-4 font-bold" target="_blank">
            <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="#000000" className="stroke-foreground fill-background"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Link>
          {/* email */}
          <Link href="mailto:psebastiansalazar@gmail.com" className="justify-center px-4 font-bold" target="_blank">
            <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="#000000" className="stroke-foreground fill-none"><path d="M7 9L12 12.5L17 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke-width="1.5"></path></svg>
          </Link>
          {/* blog */}
          <Link href="/blog" className="justify-center px-4 font-bold">
            <svg width="30px" height="30px" viewBox="0 0 24 24" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" color="#000000" className="-rotate-[10deg] stroke-foreground fill-background"><path d="M2.90602 17.505L5.33709 3.71766C5.5289 2.62987 6.56621 1.90354 7.654 2.09534L19.4717 4.17912C20.5595 4.37093 21.2858 5.40824 21.094 6.49603L18.6629 20.2833C18.4711 21.3711 17.4338 22.0975 16.346 21.9057L4.52834 19.8219C3.44055 19.6301 2.71421 18.5928 2.90602 17.505Z" stroke-width="1.5"></path><path d="M8.92902 6.38184L16.8075 7.77102" stroke-width="1.5" stroke-linecap="round"></path><path d="M8.23444 10.3213L16.1129 11.7105" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.53986 14.2607L12.4639 15.129" stroke-width="1.5" stroke-linecap="round"></path></svg>
          </Link>
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
