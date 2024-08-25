import MainFooter from "@/components/main-footer";
import MobileNav from "@/components/mobile-nav";
import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Spacer from "@/components/ui/spacer";
import Link from "next/link";

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

      {/* pricing(350. 700, 1250), learn more, free conversation, faq? */}

      <Spacer />

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

      <MainFooter />
    </main>
  );
}