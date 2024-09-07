import MainFooter from "@/components/main-footer"
import MobileNav from "@/components/mobile-nav"
import { badgeVariants } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Spacer from "@/components/ui/spacer"
import Image from "next/image"
import Link from "next/link"
import Handshake from "../../../public/handshake_optimized.svg"
import Responsive from "../../../public/responsive_optimized.svg"
import Success from "../../../public/success_optimized.svg"
import Frontend from "../../../public/frontend_optimized.svg"
import Backend from "../../../public/backend_optimized.svg"
import Shopify from "../../../public/shopify_optimized.svg"
import ThumbsUp from "../../../public/Memoji_thumbsUp_optimized.png"

export default function FreelancePage() {
  return (
    <main>
      <MobileNav />
      <section className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="px-4 text-center lg:text-left text-balance">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Do you need a website for your business?<br />
            Updating your existing one?<br />
            <span className="text-yellow-300">I do exactly that.</span>
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            I specialize in building fast, mobile-friendly websites for small and medium businesses.
            Elevate your brand&apos;s online presence and connect your offerings to your customers.
          </p>
          <div className="flex justify-center items-center gap-2">
            <Link href="#Pricing" className={buttonVariants({ variant: "outline" }) + ` px-8 py-3 text-lg bg-transparent border border-white text-white hover:bg-white hover:text-black`}>
              View Pricing
            </Link>
            <Link href="https://calendly.com/psalazardev/introduction" className={buttonVariants({ variant: "outline" }) + ` px-8 py-3 text-lg bg-yellow-300 text-black hover:bg-yellow-400`} target="_blank">
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      <Spacer />

      {/* "Project Flow & Onboarding Process" */}
      <section className="text-center">
        <h2 className="section-heading text-3xl mb-16">Process Overview</h2>
        <div className="text-balance">
          <div className="mb-8">
            <Image src={Handshake} className="mx-auto mb-4" alt="hand-shake" width={75} height={75} />
            After you hire me, we work together on what you need to create the best website for your business.
          </div>
          <div className="mb-8">
            <Image src={Responsive} className="mx-auto mb-4" alt="hand-shake" width={75} height={75} />
            Receive a mock-up of your new or updated website based on our conversations.
          </div>
          <div>
            <Image src={Success} className="mx-auto mb-4" alt="hand-shake" width={75} height={75} />
            I&apos;ll revise the project up to 3 times to ensure your satisfaction.
          </div>
        </div>
      </section>
                
      <Spacer />

      {/* Service Offerings */}
      <section className="text-center">
        <h2 className="section-heading text-3xl mb-16">Services</h2>
        <div className="mb-8">
          <Image src={Frontend} className="mx-auto mb-4" alt="The elements of a web page - Front end" width={75} height={75} />
          Front-end/Design
        </div>
        <div className="mb-8">
          <Image src={Backend} className="mx-auto mb-4" alt="Backend database" width={75} height={75} />
          Backend
        </div>
        <div>
          <Image src={Shopify} className="mx-auto mb-4" alt="Shopify logo" width={75} height={75} />
          Ecommerce (Shopify)
        </div>
      </section>
                
      <Spacer />

      {/* Pricing Cards */}
      <section>
        {/* Pricing Card 1 */}
        <h2 className="section-heading text-3xl mb-16 text-center" id="Pricing">Pricing</h2>
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
            <Button>Book A Call</Button>
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
            <Button>Book A Call</Button>
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
            <Button>Book A Call</Button>
          </CardFooter>
        </Card>
      </section>

      <Spacer />

      {/* Book A Call */}
      <section>
        <Card>
          <CardHeader className="mb-4 bg-[#d1d5db] rounded-t-md">
            <Image src={ThumbsUp} className="mx-auto" alt="Thumbs Up Memoji" width={115} height={115} />
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-2xl mb-4">Book a 15-Minute<br /> Intro Call</p>
            <Link href="https://calendly.com/psalazardev/introduction" target="_blank" className={buttonVariants({ variant: "default" }) + ` px-8 py-4`}>Schedule Now</Link>
          </CardContent>
          <CardFooter>
            <p className="text-center">Or email me at <a href="mailto:psalazardev@gmail.com" className="text-blue-500">psalazardev@gmail.com</a></p>
          </CardFooter>
        </Card>
      </section>

      <Spacer />

      <MainFooter />
    </main>
  );
}