import MainFooter from "@/components/main-footer"
import MobileNav from "@/components/mobile-nav"
import { badgeVariants } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Spacer from "@/components/ui/spacer"
import Image from "next/image"
import Link from "next/link"
import Handshake from "../../../public/handshake_optimized.svg"
import Responsive from "../../../public/responsive_optimized.svg"
import Success from "../../../public/success_optimized.svg"

export default function FreelancePage() {
  return (
    <main>
      <MobileNav />
      <section className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24">
        <div className="px-4 text-center lg:text-left text-balance">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            {/* Does Your Businees Have Web Development Needs?<br /> */}
            Do you need a website for your business?<br />
            Updating your existing one?<br />
            {/* <span className="text-yellow-300">I&apos;m Your Guy!</span> */}
            <span className="text-yellow-300">I do exactly that.</span>
          </h1>
          {/* <p className="text-lg lg:text-xl mb-8">
            I build responsive, fast, and SEO-optimized websites that convert
            visitors into customers. Let&apos;s create something amazing together!
          </p> */}
          <p className="text-lg lg:text-xl mb-8">
            I specialize in responsive, fast websites that look great and
            give your business that online presence your customers are looking for.
          </p>
          <div className="flex justify-center items-center gap-2">
            <Link href="#pricing" className={badgeVariants({ variant: "outline" }) + ` px-8 py-3 text-lg bg-transparent border border-white text-white hover:bg-white hover:text-black`}>
              View Pricing
            </Link>
            <Link href="#more" className={badgeVariants({ variant: "outline" }) + ` px-8 py-3 text-lg bg-yellow-300 text-black hover:bg-yellow-400`}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Spacer />

      {/* "Project Flow & Onboarding Process" */}
      <section className="text-center">
        <h2 className="text-3xl mb-16">Process Overview</h2>
        <div className="text-balance">
          <div className="mb-4">
            <Image src={Handshake} className="mx-auto" alt="hand-shake" width={100} height={100} />
            After you hire me, we work together on what you need to create the best website for your business.
          </div>
          <div className="mb-4">
            <Image src={Responsive} className="mx-auto" alt="hand-shake" width={100} height={100} />
            Receive a mock-up of your new or updated website based on our conversations.
          </div>
          <div>
            <Image src={Success} className="mx-auto" alt="hand-shake" width={100} height={100} />
            I&apos;ll revise the project up to 3 times to ensure your satisfaction.
          </div>
        </div>
      </section>
                
      <Spacer />

      {/* Service Offerings */}
      <section className="text-center">
        <h2 className="text-3xl mb-16">Services</h2>
        <div className="mb-4">Front-end/Design</div>
        <div className="mb-4">Backend</div>
        <div>Ecommerce (Shopify)</div>
      </section>
                
      <Spacer />

      {/* Pricing Cards */}
      <section>
        {/* Pricing Card 1 */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Tier 1</CardTitle>
            <CardDescription>Fixed rate</CardDescription>
            <p className="font-bold">$350</p>
            <hr />
          </CardHeader>
          <CardContent>
            <p className="mb-4">What you get</p>
            <ul>
              <li className="list-disc">Myself as your personal developer</li>
              <li className="list-disc">Custom development or platform development</li>
              <li className="list-disc">3 revisions</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Book A Conversation</Button>
          </CardFooter>
        </Card>

        {/* Pricing Card 2 */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Tier 2</CardTitle>
            <CardDescription>Fixed rate</CardDescription>
            <p className="font-bold">$700</p>
            <hr />
          </CardHeader>
          <CardContent>
            <p className="mb-4">What you get</p>
            <ul>
              <li className="list-disc">Myself as your personal developer</li>
              <li className="list-disc">Custom development or platform development</li>
              <li className="list-disc">3 revisions</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Book A Conversation</Button>
          </CardFooter>
        </Card>

        {/* Pricing Card 3 */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Tier 3</CardTitle>
            <CardDescription>Fixed rate</CardDescription>
            <p className="font-bold">$1,250</p>
            <hr />
          </CardHeader>
          <CardContent>
            <p className="mb-4">What you get</p>
            <ul>
              <li className="list-disc">Myself as your personal developer</li>
              <li className="list-disc">Custom development or platform development</li>
              <li className="list-disc">3 revisions</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Book A Conversation</Button>
          </CardFooter>
        </Card>
      </section>

      <Spacer />

      {/* Book A Call */}
      <section>
        <Card>
          <CardHeader>
            {/* use an img here */}
            <CardTitle>Book a 15 Minute Intro Call</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="https://calendly.com/psalazardev/introduction" target="_blank" className={badgeVariants({ variant: "default" }) + ` rounded px-8 py-4 text-base`}>Schedule Now</Link>
          </CardContent>
          <CardFooter>
            <p>Or email me at <a href="mailto:psalazardev@gmail.com" className="text-blue-500">psalazardev@gmail.com</a></p>
          </CardFooter>
        </Card>
      </section>

      <Spacer />

      <MainFooter />
    </main>
  );
}