import Link from 'next/link'
import { Badge, badgeVariants } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import MainFooter from '@/components/main-footer'
import MobileNav from '@/components/mobile-nav'
import Spacer from '@/components/ui/spacer'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="min-h-svh flex flex-col justify-center items-center text-center text-balance relative">
        <h1 className="text-8xl">Patricio Salazar</h1>
        <p>Full-stack Software Developer and stand up community member in Austin, TX.</p>
        {/* xxx Badges */}
        <div className="flex flex-wrap justify-center gap-3 h-24 pt-6">
          <Link href="/blog" className={badgeVariants({ variant: "outline" }) + ` h-12 justify-center px-8 border-2 border-primary font-bold`}>About</Link>
          <Link href="/blog" className={badgeVariants({ variant: "outline" }) + ` h-12 justify-center px-8 border-2 border-primary font-bold`}>Projects</Link>
          <Link href="/blog" className={badgeVariants({ variant: "outline" }) + ` h-12 justify-center px-8 border-2 border-primary font-bold`}>Latest Article</Link>
        </div>
        {/* Social Badges */}
        <div className="flex gap-4 absolute bottom-16">
          <Link href="https://github.com/patriciosebastian" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>GitHub</Link>
          <Link href="https://www.linkedin.com/in/patriciosalazardev" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>Linkedin</Link>
          <Link href="mailto:psebastiansalazar@gmail.com" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>Email</Link>
          <Link href="/blog" className={badgeVariants({ variant: "default" }) + ` w-16 h-8 justify-center px-8 font-bold`}>Blog</Link>
        </div>
      </div>

      <Spacer className="h-12" />

      {/* Mobile Nav Menu */}
      <MobileNav />

      <Spacer className="h-12" />

      {/* About */}
      <div>
        <h2 className="section-heading text-4xl text-center">About</h2>
        <Tabs defaultValue="career" className="border rounded-md py-4 bg-background">
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

      <Spacer />

      {/* Projects */}
      <div>
        <h2 className="section-heading text-4xl text-center">Projects</h2>
        {/* 1. */}
        <Card className="mb-4">
          <CardHeader>
            <Image src="https://www.patriciosalazar.dev/img/TouchBase_Desktop.png" alt="Touch Base" width={533} height={273} />
            {/* NOTE: possibly remove this */}
            <small className="text-center flex justify-center items-center !mb-4"><span className="text-green-600 text-lg leading-none">&#10687;&nbsp;</span>Live site available</small>
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
            <p>
              Touch Base uses React-Router for frontend navigation and Node.js & Express for its backend API, connected to a PSQL database. It features a fully responsive design, full CRUD capabilities for contacts and groups, Firebase Auth, and SendGrid for email functionality. AWS S3 is used for image hosting, and a demo login lets you easily tour the app and safely perform all actions.
            </p>
          </CardContent>
          <CardFooter>
            <a href="https://www.touchbaseapp.co" target='_blank' className={buttonVariants({ variant: "secondary" }) + ` h-12 justify-center`}>Visit Site</a> {/* <-- use external link icon  */}
          </CardFooter>
        </Card>

        {/* 2. */}
        <Card>
          <CardHeader>
            <Image src="https://www.patriciosalazar.dev/img/ClearCalc_Desktop.png" alt="ClearCalc" width={533} height={273} />
            <small className="text-center flex justify-center items-center !mb-4"><span className="text-green-600 text-lg leading-none">&#10687;&nbsp;</span>Live site available</small>
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
            <p>
              ClearCalc is a JavaScript amortization schedule generator. Based on user inputs, it calculates loan details and generates a complete amortization schedule with all the data you would expect to see. Built with JavaScript and Bootstrap, it&#39;s designed to be straightforward and easy to use. It&#39;s fully responsive with side scrolling tables on smaller sized viewports. Try it out now!
            </p>
          </CardContent>
          <CardFooter>
            <a href="https://www.clearcalc.app" target='_blank' className={buttonVariants({ variant: "secondary" }) + ` h-12 justify-center`}>Visit Site</a>
          </CardFooter>
        </Card>
      </div>

      <Spacer />

      {/* Footer */}
      <MainFooter />
    </main>
  );
}
