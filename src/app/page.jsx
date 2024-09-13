import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
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
import TouchBase from '../../public/TouchBaseApp_Optimized.webp'
import ClearCalc from '../../public/ClearCalc_Optimized.webp'

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
    <>
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
            <svg width="34px" height="34px" viewBox="-2.5 0 19 19" xmlns="http://www.w3.org/2000/svg" className="stroke-background fill-foreground">
              <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"/>
            </svg>
          </Link>
          {/* linkedin */}
          <Link href="https://www.linkedin.com/in/patriciosalazardev" className="justify-center px-4 font-bold" target="_blank">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" className="stroke-background fill-foreground">
              <g>
              	<path d="M80.667,14H19.315C16.381,14,14,16.325,14,19.188v61.617C14,83.672,16.381,86,19.315,86h61.352
              		C83.603,86,86,83.672,86,80.805V19.188C86,16.325,83.603,14,80.667,14z M35.354,75.354H24.67V40.995h10.684V75.354z M30.012,36.297
              		c-3.423,0-6.19-2.774-6.19-6.194c0-3.415,2.767-6.189,6.19-6.189c3.415,0,6.189,2.774,6.189,6.189
              		C36.201,33.523,33.427,36.297,30.012,36.297z M75.35,75.354H64.683V58.646c0-3.986-0.078-9.111-5.551-9.111
              		c-5.558,0-6.405,4.341-6.405,8.822v16.998H42.052V40.995h10.245v4.692h0.146c1.426-2.7,4.91-5.549,10.106-5.549
              		c10.806,0,12.802,7.114,12.802,16.369V75.354z"/>
              </g>
            </svg>
          </Link>
          {/* email */}
          <Link href="mailto:psebastiansalazar@gmail.com" className="justify-center px-4 font-bold" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 24 24" className="stroke-background fill-foreground">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </Link>
          {/* blog */}
          <Link href="/blog" className="justify-center px-4 font-bold">
            <svg width="34px" height="34px" viewBox="0 0 24 24" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" color="#000000" className="-rotate-[10deg] stroke-background fill-foreground">
              <path d="M2.90602 17.505L5.33709 3.71766C5.5289 2.62987 6.56621 1.90354 7.654 2.09534L19.4717 4.17912C20.5595 4.37093 21.2858 5.40824 21.094 6.49603L18.6629 20.2833C18.4711 21.3711 17.4338 22.0975 16.346 21.9057L4.52834 19.8219C3.44055 19.6301 2.71421 18.5928 2.90602 17.505Z" stroke-width="1.5"></path>
              <path d="M8.92902 6.38184L16.8075 7.77102" stroke-width="1.5" stroke-linecap="round"></path>
              <path d="M8.23444 10.3213L16.1129 11.7105" stroke-width="1.5" stroke-linecap="round"></path>
              <path d="M7.53986 14.2607L12.4639 15.129" stroke-width="1.5" stroke-linecap="round"></path>
            </svg>
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
        <Tabs defaultValue="career" className="rounded-md py-4 max-w-lg lg:max-w-3xl mx-auto">
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
        <Card className="mb-4 max-w-md lg:flex lg:max-w-3xl xl:max-w-6xl mx-auto lg:mb-6">
          <CardHeader className="lg:w-1/2">
            <Image src={TouchBase} className="mb-4" />
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
          <CardContent className="lg:w-1/2">
            <p className="text-balance mb-6 lg:mt-6 lg:mb-8 xl:mb-20">
              Touch Base uses React-Router for frontend navigation and Node.js & Express for its backend API, connected to a PSQL database. It features a fully responsive design, full CRUD capabilities for contacts and groups, Firebase Auth, and SendGrid for email functionality. AWS S3 is used for image hosting, and a demo login lets you easily tour the app and safely perform all actions.
            </p>
            <a href="https://www.touchbaseapp.co" target='_blank' className={buttonVariants({ variant: "default" }) + ` h-12 justify-center lg:flex lg:mx-auto`}>Visit Site</a>
          </CardContent>
        </Card>

        {/* 2. */}
        <Card className="max-w-md lg:flex lg:max-w-3xl xl:max-w-6xl mx-auto">
          <CardHeader className="lg:w-1/2">
            <Image src={ClearCalc} className="mb-4" />
            <CardTitle>ClearCalc</CardTitle>
            <CardDescription className="text-pretty !mb-1">ClearCalc is a JavaScrpit amortization schedule generator</CardDescription>
            <div className="flex flex-wrap items-center gap-1">
              <Badge variant="outline">HTML</Badge>
              <Badge variant="outline">CSS</Badge>
              <Badge variant="outline">Bootstrap 5</Badge>
              <Badge variant="outline">JavaScript</Badge>
            </div>
          </CardHeader>
          <CardContent className="lg:w-1/2">
            <p className="text-balance mb-6 lg:mt-6 lg:mb-8 xl:mb-20">
              ClearCalc is a JavaScript amortization schedule generator. Based on user inputs, it calculates loan details and generates a complete amortization schedule with all the data you would expect to see. Built with JavaScript and Bootstrap, it&#39;s designed to be straightforward and easy to use. It&#39;s fully responsive with side scrolling tables on smaller sized viewports. Try it out now!
            </p>
            <a href="https://www.clearcalc.app" target='_blank' className={buttonVariants({ variant: "default" }) + ` h-12 justify-center lg:flex lg:mx-auto`}>Visit Site</a>
          </CardContent>
        </Card>
      </div>

      <Spacer />

      {/* Latest Post */}
      {latestBlog ? (
        <>
          <h2 className="section-heading text-4xl text-center">Latest Post</h2>
          <Card className="max-w-md lg:max-w-3xl mx-auto">
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
                <small className="ml-auto">{new Date(latestBlog.created_at).toLocaleDateString()}</small>
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
      <Card className="border bg-background mb-4 flex items-center max-w-md lg:max-w-3xl mx-auto lg:mb-6">
        <CardHeader className="w-1/2 p-4 relative">
          <Image src={HelloWorld1} className="rounded mb-2" alt="Computer/Desk Set-up" />
          <div className="absolute !m-1">
            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-background dark:stroke-foreground"><path d="M7 15C7 15 11.5 14 16 16" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 12C6.5 12 12.5 10.5 17.5 13.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 9.00003C9 8.50005 14 8.00006 19 11" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </CardHeader>
        <CardContent className="w-1/2 p-4 sm:text-center">
          <p className="font-bold text-balance mb-2 leading-tight">Hello World - beats to code to</p>
          <a href="https://open.spotify.com/playlist/77hkmQ7eTgfvpjPXDPjSRT?si=1f36b33a95fc4621" className={buttonVariants({ variant: "default", size: "sm" }) + ` justify-center`} target='_blank'>Play on Spotify</a>
        </CardContent>
      </Card>
      
      {/* 2. */}
      <Card className="border bg-background mb-4 flex items-center max-w-md lg:max-w-3xl mx-auto">
        <CardHeader className="w-1/2 p-4 relative">
          <Image src={HelloWorld2} className="rounded mb-2" alt="Computer/Desk Set-up with the universe in the background" />
          <div className="absolute !m-1">
            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-background dark:stroke-foreground"><path d="M7 15C7 15 11.5 14 16 16" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 12C6.5 12 12.5 10.5 17.5 13.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 9.00003C9 8.50005 14 8.00006 19 11" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </CardHeader>
        <CardContent className="w-1/2 p-4 sm:text-center">
          <p className="font-bold text-balance mb-2 leading-tight">Hello World 2 - beats to code to</p>
          <a href="https://open.spotify.com/playlist/3TWuzDL7v8DKhcFatC1g8D?si=3279f73b5ba242a3" className={buttonVariants({ variant: "default", size: "sm" }) + ` justify-center`} target='_blank'>Play on Spotify</a>
        </CardContent>
      </Card>

      <Spacer />

      {/* Footer */}
      <MainFooter />
    </>
  );
}
