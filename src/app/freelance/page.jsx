import MainFooter from "@/components/main-footer"
import MobileNav from "@/components/mobile-nav"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Spacer from "@/components/ui/spacer"
import Image from "next/image"
import Link from "next/link"
import ThumbsUp from "../../../public/Memoji_thumbsUp_optimized.png"

export default function FreelancePage() {
  return (
    <>
      <MobileNav />
      <section className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 mt-2 rounded-md max-w-lg lg:max-w-3xl mx-auto lg:mt-20">
        <div className="px-4 text-center lg:text-left text-balance">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4 text-center">
            Do you need a website for your business?<br />
            <span className="sm:whitespace-break-spaces sm:block sm:mt-4 sm:mb-4">Updating your existing one?</span><br className="sm:hidden" />
            <span className="text-yellow-300">I do exactly that.</span>
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-center">
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
      <section className="text-center max-w-lg lg:max-w-3xl mx-auto">
        <h2 className="section-heading text-3xl mb-16">Process Overview</h2>
        <div className="text-balance lg:flex justify-center items-center gap-4 lg:mx-auto">
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <svg width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="stroke-foreground fill-background mx-auto mb-4" stroke-width="18"><path d="M410.1 82.2c-14.8 13.1-33 27.3-50.8 30.9-32.8 6.6-68.2-8.7-95.3-4.6l-5.2.9c-4.6-1.2-9.5-2.2-14.7-3-3.7-.6-7.4-.8-11.1-.8-10.7 0-21.4 1.8-32 3.4a207 207 0 0 1-31 3.2 74 74 0 0 1-15-1.4 62.3 62.3 0 0 1-20.8-9.2 175.4 175.4 0 0 1-21-16.4 33.3 33.3 0 0 0-21.8-8.4c-6 0-12 1.6-17.5 4-4.8 2.2-9.5 5-14 8.5A133 133 0 0 0 37.5 111a198.4 198.4 0 0 0-26.3 41.6C7.8 159.9 5 167 3.2 174c-2 7-3.2 13.6-3.2 20 0 3.5.3 6.8 1.1 10 .9 3.3 2.2 6.5 4.2 9.4.6 1 1.3 1.6 2.1 2.3.1 0 4.4 3.5 9 8 2.4 2.2 4.8 4.7 6.8 7 2 2.4 3.6 4.7 4.1 6 2.7 5.5 9.4 19.1 18.3 34.3a335.8 335.8 0 0 0 23.2 34.5 26.2 26.2 0 0 0 37.8 36l.8-.7a26.2 26.2 0 0 0 40.7 31.4l4.3-3.9a26.2 26.2 0 0 0 39.8 33.2l6.5-5.9a26.2 26.2 0 0 0 39.4 33.7l10.6-9 2.9 1.3 7.2 4.2a53 53 0 0 0 11.2 5c4 1.3 8 2 12 2a32.7 32.7 0 0 0 24.7-11.2c4-4.4 6.5-9.5 7.8-14.8a35 35 0 0 0 46.3-26.2 35.1 35.1 0 0 0 33.3-11.1 34.8 34.8 0 0 0 8.4-18.2l3 .1a43.2 43.2 0 0 0 30.9-13.4 47.3 47.3 0 0 0 11-37c20.1-22.5 30.8-59.9 35.5-69.7 5.3-11.3 25.4-27.4 25.4-27.4 21.8-31.4-58.8-156.7-98.2-121.7zm15 234.2a18.8 18.8 0 0 1-11 12.3 22.7 22.7 0 0 1-8.6 1.8c-1.8 0-3.4-.3-4.8-.8h-.2l-29.9-28.9a10.5 10.5 0 0 0-14.6 15l24.2 23.4.2.6a14.3 14.3 0 0 1-2 15.8 13.8 13.8 0 0 1-10.6 4.7 14 14 0 0 1-9.4-3.5l-.6-.6-.3-.4-26.2-27.3a10.5 10.5 0 1 0-15.1 14.5l22.2 23.2.1.2a14.1 14.1 0 0 1-1.5 16.8 14.4 14.4 0 0 1-20 1.2l-.4-.4-8-6.5-13.3-14a10.5 10.5 0 0 0-15.3 14.3l12.6 13.4a14.2 14.2 0 0 1-1.6 16.5 12.1 12.1 0 0 1-4.2 3.2c-1.4.6-2.9 1-4.7 1-1.7 0-3.6-.3-5.8-1-2.1-.7-4.4-1.7-6.8-3.1l-3.8-2.2a26.2 26.2 0 0 0-34.9-39l2-1.8a26.2 26.2 0 1 0-34.8-39.2l-6.4 5.8a26.2 26.2 0 0 0-39.4-33.7l-8.5 7.7a26.2 26.2 0 0 0-41.4-30.2l-18 16c-2.3-2.8-4.5-5.9-6.8-9a426 426 0 0 1-31.2-54.5c-1-2-2-3.8-3.3-5.6-2.1-3-4.5-5.9-7-8.5a136.6 136.6 0 0 0-14-13l-.5-1.6c-.3-1.3-.6-3-.6-5 0-3.3.6-7.5 1.8-12.2 2-8.3 6-18 11.2-27.8a167.7 167.7 0 0 1 29.3-40A77.7 77.7 0 0 1 79 101.7c2.5-1.3 4.8-2.4 6.9-3 2-.6 4-1 5.5-1 1.5.1 2.8.3 4 .8 1.3.5 2.5 1.2 3.9 2.4 7.2 6.4 15 12.8 23.6 18.3 8.6 5.5 17.8 10 28 12.1 6.4 1.3 12.8 1.8 19.1 1.8 12 0 23.5-1.7 34.2-3.4l7.9-1.2c-8 5.5-15.8 12-24 19.7-23.5 22-43.8 48.7-55 60.9-11.2 12.1 9.7 33.2 42.9 23.6 33.2-9.7 47.6-34.5 47.6-34.5l41.7-15 41.4 9.5L406.8 283l17.3 16.7.4.3c.7.6 1.2 1.4 1.7 2.6.4 1.2.7 2.8.7 4.8 0 2.7-.6 6-1.8 9.1z" className="fill-none" /></svg>
            After you hire me, we work together on what you need to create the best website for your business.
          </div>
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <svg width="75" height="75" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="stroke-foreground mx-auto mb-4 fill-background"><g clip-path="url(#a)"><path d="M1 10V2c0-.6.4-1 1-1h28c.6 0 1 .4 1 1v16M21 31l-3-1v-5h4m0-4h-4m13 9c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1v-8c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v8Zm-16 0c0 .6-.4 1-1 1H2a1 1 0 0 1-1-1V14c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v16Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="a"><path className="fill-foreground" d="M0 0h32v32H0z"/></clipPath></defs></svg>
            Receive a mock-up of your new or updated website based on our conversations.
          </div>
          <div className="lg:w-1/3">
            <svg width="75" height="75" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="stroke-foreground mx-auto mb-4" stroke-width=".1"><path className="clr-i-outline clr-i-outline-path-1 fill-foreground" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Z"/><path className="clr-i-outline clr-i-outline-path-2 fill-foreground" d="M28 12.1a1 1 0 0 0-1.4 0l-11.1 11-6-6A1 1 0 0 0 8 18.5l7.5 7.5L28 13.5a1 1 0 0 0 0-1.4Z"/></svg>
            I&apos;ll revise the project an unlimited amount of times to ensure your satisfaction.
          </div>
        </div>
      </section>
                
      <Spacer />

      {/* Service Offerings */}
      <section className="text-center max-w-lg lg:max-w-3xl mx-auto">
        <h2 className="section-heading text-3xl mb-16">Services</h2>
        <div className="text-balance lg:flex justify-center items-center gap-4 lg:mx-auto">
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <svg width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="stroke-foreground fill-background mx-auto mb-4"><path d="M29 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM26.5 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM10 14.4H4v-.8h6v.8zm4-3H4v-.8h10v.8zm0-3H4v-.8h10v.8zm17 23H1v-.8h30v.8zm0-3H1v-.8h30v.8zm0-3H1v-.8h30v.8zm0-3H1a.4.4 0 0 1-.4-.4V1C.6.8.8.6 1 .6h30c.2 0 .4.2.4.4v21c0 .2-.2.4-.4.4zm-29.6-.8h29.2V4.4H1.4v17.2zm0-18h29.2V1.4H1.4v2.2zM24 15.4a4.4 4.4 0 1 1 0-8.8 4.4 4.4 0 0 1 0 8.8zm-1.5-1a3.6 3.6 0 0 0 4.8-5l-3 1.9-1.8 3zm-1.8-5a3.6 3.6 0 0 0 1.2 4.6l1.6-2.9-2.8-1.6zM21 9l2.9 1.7 3-1.7a3.6 3.6 0 0 0-6 0z"/></svg>
            Squarespace Websites
          </div>
          <div className="lg:w-1/3">
            <svg width="75" height="75" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="stroke-foreground dark:fill-background mx-auto mb-4 stroke-0 dark:stroke-1"><path d="M21 4.5h-.2l-.9.3c-.5-1.5-1.4-3-3.1-3h-.1A2 2 0 0 0 15 1c-3.9 0-5.8 4.8-6.3 7.3L6 9.2c-.9.2-.9.2-1 1L2.8 27.8l17 3.2zM17.1 3C18 3 18.6 4 19 5.1l-1.5.5V5c0-.8-.1-1.5-.3-2.2zm-.7 2.8V6l-3 1c.3-1.7 1.3-3 2.6-3.8a7.2 7.2 0 0 1 .4 2.6zM15 2l.5.2c-1.8 1-3 2.9-3.2 5l-2.3.7c.6-2.2 2.2-5.8 5-5.8zm.6 13.1c-.6-.3-1.4-.5-2.2-.5-1.8 0-1.9 1.1-1.9 1.4 0 1.6 4 2.2 4 5.8l.1.4c0 2.4-1.9 4.3-4.3 4.3h-.1c-1.7 0-3.2-.7-4.3-1.8l.8-2.6c.8.7 1.8 1.1 2.8 1.3h.1c.7 0 1.2-.5 1.2-1.2 0-2-3.3-2-3.3-5.4a5.5 5.5 0 0 1 6-5.5 5 5 0 0 1 2.4.4l-1.2 3.4zM20.2 31l9-2L25.9 7c0-.2-.1-.3-.3-.3l-2.4-.1-1.8-1.8-.1-.1L20 31z"/></svg>
            Shopify Websites
          </div>
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <svg width="75" height="75" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="stroke-foreground fill-foreground mx-auto mb-4" stroke-width=".1"><circle cx="23" cy="23" r="1"/><path d="M8 22h12v2H8z" className="dark:stroke-background dark:fill-foreground"/><circle cx="23" cy="9" r="1"/><path d="M8 8h12v2H8z" className="dark:stroke-background dark:fill-foreground"/><path d="M26 14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2v-4ZM6 6h20v6H6Zm20 20H6v-6h20Zm-4-8H10v-4h12Z"/></svg>
            Custom Code
          </div>
        </div>
      </section>

      <Spacer />

      {/* Pricing Cards */}
      <section className="max-w-lg lg:max-w-3xl mx-auto">
        {/* Pricing Card 1 */}
        <h2 className="section-heading text-3xl mb-16 text-center" id="Pricing">Pricing</h2>
        <div className="lg:flex flex-wrap justify-center items-center gap-4">
          <Card className="mb-4 lg:w-[48%]">
            <CardHeader>
              <CardTitle>Squarespace</CardTitle>
              <CardDescription>Fixed rate</CardDescription>
              <p className="font-bold">$350</p>
              <hr />
            </CardHeader>
            <CardContent>
              <p className="mb-4">What you get</p>
              <ul>
                <li className="list-disc">Myself as your personal developer</li>
                <li className="list-disc">Custom Squarespace website</li>
                <li className="list-disc">Unlimited revisions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Book A Call</Button>
            </CardFooter>
          </Card>

          {/* Pricing Card 2 */}
          <Card className="mb-4 lg:w-[48%]">
            <CardHeader>
              <CardTitle>Shopify</CardTitle>
              <CardDescription>Fixed rate</CardDescription>
              <p className="font-bold">$700</p>
              <hr />
            </CardHeader>
            <CardContent>
              <p className="mb-4">What you get</p>
              <ul>
                <li className="list-disc">Myself as your personal developer</li>
                <li className="list-disc">Custom Shopify website</li>
                <li className="list-disc">Unlimited revisions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Book A Call</Button>
            </CardFooter>
          </Card>

          {/* Pricing Card 3 */}
          <Card className="mb-4 lg:w-[48%]">
            <CardHeader>
              <CardTitle>Custom Code</CardTitle>
              <CardDescription>Fixed rate</CardDescription>
              <p className="font-bold">$1,250</p>
              <hr />
            </CardHeader>
            <CardContent>
              <p className="mb-4">What you get</p>
              <ul>
                <li className="list-disc">Myself as your personal developer</li>
                <li className="list-disc">Custom development from scratch</li>
                <li className="list-disc">Unlimited revisions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Book A Call</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Spacer />

      {/* Book A Call */}
      <section className="max-w-lg mx-auto">
        <Card>
          <CardHeader className="mb-4 bg-[#d1d5db] rounded-t-md">
            <Image src={ThumbsUp} className="mx-auto" alt="Thumbs Up Memoji" width={115} height={115} />
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-2xl mb-4">Book a 15-Minute<br /> Intro Call</p>
            <Link href="https://calendly.com/psalazardev/introduction" target="_blank" className={buttonVariants({ variant: "default" }) + ` px-8 py-4`}>Schedule Now</Link>
          </CardContent>
          <CardFooter>
            <p className="text-center mx-auto">Or email me at <a href="mailto:psalazardev@gmail.com" className="text-blue-500">psalazardev@gmail.com</a></p>
          </CardFooter>
        </Card>
      </section>

      <Spacer />

      <MainFooter />
    </>
  );
}