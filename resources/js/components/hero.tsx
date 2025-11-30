import { buttonVariants } from '@/components/ui/button'
import { Link } from '@inertiajs/react'

export default function Hero() {
    return (
        <section className="min-h-svh flex justify-center items-center relative">
            <div className="w-fit space-y-4 flex flex-col z-10">
                <h1 className="text-6xl">PATRICIO SALAZAR</h1>
                <p className="text-3xl">Software Developer</p>
                <div className="w-fit text-balance max-w-prose">
                    <p className="mb-4 lg:mb-5 lg:mt-2">
                        I strive to build <strong>unmistakable</strong> experiences by<br />
                        writing informed code that meets business needs.
                    </p>
                    <p>&gt; I&apos;m currently writing <strong>Laravel</strong> and <strong>Livewire</strong> code at my place of work.</p>
                    <p>&gt; Proficient in <strong>JavaScript</strong>, <strong>TypeScript</strong> and <strong>React</strong>.</p>
                    <p>
                        &gt; I&apos;m also working on side projects, exploring new technologies,<br />
                        learning and building in public, and writing about all of this on my blog.
                    </p>
                </div>
                <div className="flex items-center gap-4 mt-6 mb-16">
                    <Link
                        href="#Projects"
                        className={buttonVariants({ variant: "outline", size: "lg" }) + ` h-12 justify-center font-bold rounded-xs`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/"
                        className={buttonVariants({ variant: "outline", size: "lg" }) + ` h-12 justify-center font-bold rounded-xs`}
                    >
                        Latest Post
                    </Link>
                </div>
            </div>
        </section>
    );
};

