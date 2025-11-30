import { Badge, badgeVariants } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from '@inertiajs/react'
import SectionHeading from './ui/section-heading'

export default function About() {
    return (
        <section className="min-h-svh">
            <SectionHeading headingText="About" />
            <div className="relative flex justify-center items-center">
                <Tabs defaultValue="career" className="w-5/12 space-y-12">
                    <TabsList className="w-full bg-transparent rounded-none p-0 box-border mb-12">
                        <TabsTrigger value="career">Career</TabsTrigger>
                        <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
                        <TabsTrigger value="personal">Personal</TabsTrigger>
                        <TabsTrigger value="cool-stuff">Stuff</TabsTrigger>
                    </TabsList>
                    <TabsContent value="career" className="space-y-12">
                        <div className="space-y-4">
                            <Badge className={badgeVariants({ variant: 'secondary' }) + ' rounded-full px-4 py-1 font-mono'}>
                                My Mission Right Now
                            </Badge>
                            <p>
                                Right now, I&apos;m focused on growing as a developer and deepening my knowledge and skills.<br />
                                I may or may not be sharing more about what I'm doing. Check out my <Link href="/blog" className="underline">blog</Link> for updates.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Badge className={badgeVariants({ variant: 'secondary' }) + ' rounded-full px-4 py-1 font-mono'}>
                                My Current Role
                            </Badge>
                            <p>
                                Currently, I&#39;m a <span className="font-bold">Software Developer</span> at <a className="underline" href="https://empire-medical.com/" target="_blank">Empire Medical</a>, where I use PHP, Laravel, and Livewire to build and maintain a custom business application. The team is small but highly effective; I get to make meaningful contributions on a daily basis. Previously, I worked in the JavaScript ecosystem, so I&apos;m proficient there as well. I sometimes offer web development services as a freelancer.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="tech-stack">
                        {/* Frontend */}
                        <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Frontend</div>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Tailwind CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                        </div>
                        {/* Full-stack */}
                        <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Full-stack</div>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <span>Livewire</span>
                            <span>Next.js</span>
                        </div>
                        {/* Backend */}
                        <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Backend</div>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>PHP</span>
                            <span>Laravel</span>
                        </div>
                        {/* Database */}
                        <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Database</div>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <span>PostgreSQL</span>
                        </div>
                        {/* Tooling */}
                        <div className="bg-secondary w-fit p-1 rounded-sm mb-2">Tooling</div>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <span>Git/GitHub</span>
                            <span>Postman</span>
                            <span>VSCode</span>
                            <span>Atlassian</span>
                            <span>Slack</span>
                            <span>Notion</span>
                        </div>
                    </TabsContent>
                    <TabsContent value="personal">
                        <p className="mb-4">
                            I&apos;ve done and seen many things in life, but hands down the greatest experience has been to be a husband to my wife and the father of our two children.
                        </p>
                        <p className="mb-2">Here are some quick basic things:</p>
                        <ul className="px-1 list-disc list-inside">
                            <li>Born and raised in Los Angeles, CA.</li>
                            <li>Spent an incredible year in Mexico City.</li>
                            <li>Lived in Oregon for 5 beautiful years.</li>
                            <li>Now, Austin, TX is home.</li>
                            <li>I love spicy food. I guarantee you can&apos;t handle more heat than me (challenge accepted?)</li>
                        </ul>
                    </TabsContent>
                    <TabsContent value="cool-stuff"></TabsContent>
                </Tabs>
            </div>
            <div className="w-5/12 mx-auto mb-26">
                <h3 className="text-2xl text-center mb-4 mt-12">What People Say About Working With Me</h3>
                <div
                    className="senja-embed"
                    data-id="9aeef387-4143-4b01-a516-9aaedd9adced"
                    data-mode="shadow"
                    data-lazyload="true"
                    style={{ display: "block", width: "100%" }}
                />
            </div>
        </section>
    );
};

