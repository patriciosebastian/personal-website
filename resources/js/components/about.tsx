import { Badge, badgeVariants } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from '@inertiajs/react'
import SectionHeading from './ui/section-heading'
import TechCard from './ui/tech-card'
import SpotifyPlaylistCard from './ui/spotify-playlist-card'
import { techStack } from '@/data/techStack'
import { spotifyPlaylists } from '@/data/spotifyPlaylists'

export default function About() {
    return (
        <section
            className="min-h-svh px-4 sm:px-6 lg:px-0"
            id="about"
        >
            <SectionHeading headingText="About" />
            <div className="relative flex justify-center items-center">
                <Tabs defaultValue="career" className="w-full space-y-12 sm:w-[75%] lg:w-5/12">
                    <TabsList className="w-full bg-transparent rounded-none p-0 box-border mb-12">
                        <TabsTrigger
                            value="career"
                            className="hover:bg-accent"
                        >
                            Career
                        </TabsTrigger>
                        <TabsTrigger
                            value="tech-stack"
                            className="hover:bg-accent"
                        >
                            Tech Stack
                        </TabsTrigger>
                        <TabsTrigger
                            value="AI"
                            className="hover:bg-accent"
                        >
                            AI
                        </TabsTrigger>
                        <TabsTrigger
                            value="personal"
                            className="hover:bg-accent"
                        >
                            Personal
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent
                        value="career"
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <Badge className={badgeVariants({ variant: 'secondary' }) + ' rounded-full px-4 py-1'}>
                                My Current Mission
                            </Badge>
                            <p>
                                I&apos;m focused on growing as a developer and deepening my knowledge and skills.<br />
                                I may or may not be sharing more about what I'm doing. Check out my <Link href="/blog" className="underline" prefetch>blog</Link> for updates.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Badge className={badgeVariants({ variant: 'secondary' }) + ' rounded-full px-4 py-1'}>
                                My Current Role
                            </Badge>
                            <p>
                                Currently, I&#39;m a <span className="font-bold">Software Developer</span> at <a className="underline" href="https://empire-medical.com/" target="_blank">Empire Medical</a>, where I use PHP, Laravel, and Livewire to build and maintain a custom business application. The team is small but highly effective; I get to make meaningful contributions on a daily basis. I love working on this team. Previously, I worked in the JavaScript ecosystem, so I&apos;m proficient there as well. I sometimes offer web development services as a freelancer.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent
                        value="tech-stack"
                        className="space-y-5"
                    >
                        <div className="space-y-2.5">
                            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                Languages
                            </h3>
                            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                                {techStack.languages.map((tech) => (
                                    <TechCard
                                        key={tech.name}
                                        name={tech.name}
                                        icon={tech.icon}
                                        color={tech.color}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                UI & Frontend
                            </h3>
                            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                                {techStack.uiFrontend.map((tech) => {
                                    const color = typeof tech.color === 'string'
                                        ? tech.color
                                        : `dark:${tech.color.dark}; light:${tech.color.light}`;

                                    return (
                                        <TechCard
                                            key={tech.name}
                                            name={tech.name}
                                            icon={tech.icon}
                                            color={color}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                Backend & Frameworks
                            </h3>
                            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                                {techStack.backendFrameworks.map((tech) => {
                                    const color = typeof tech.color === 'string'
                                        ? tech.color
                                        : `dark:${tech.color.dark}; light:${tech.color.light}`;

                                    return (
                                        <TechCard
                                            key={tech.name}
                                            name={tech.name}
                                            icon={tech.icon}
                                            color={color}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                Database & Tooling
                            </h3>
                            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                                {techStack.databaseTools.map((tech) => (
                                    <TechCard
                                        key={tech.name}
                                        name={tech.name}
                                        icon={tech.icon}
                                        color={tech.color}
                                    />
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent
                        value="AI"
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <Badge className={badgeVariants({ variant: 'secondary' }) + ' rounded-full px-4 py-1'}>
                                How I Think About AI
                            </Badge>
                            <p>
                                AI is powerful...but you gotta know how and when to use it. It cannot replace thinking through problems myself. Any time I delegate brainstorming to a model, even if the model's solution is good, I usually feel like I could have implemented things in a more idiomatic way. I also find that letting AI do the initial thinking makes it difficult to see other solutions or potential gaps. On the other hand, it helps me to see things that I don't see on my own. AI is great for testing ideas, refining, learning, and discovery.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Badge className={badgeVariants({ variant: 'secondary' }) + ' rounded-full px-4 py-1'}>
                                How I Use AI in Development
                            </Badge>
                            <p>
                                Let me be clear, I use AI a lot. And I use it skillfully. However, in certain codebases with lots of domain specific knowledge, it still gets lots of things wrong. So for me, I'll let AI drive for smaller, less critical tasks. For meaningful problems, I usually don't start with AI. I take time to think through requirements and explore a couple paths forward. By the time I feel good about an idea, I'll implement it myself (especially if I need control) or I'll finally instruct a model to do it. My favorite use case is planning projects, architecture, documentation, implementation strategies, etc.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Badge className={badgeVariants({ variant: 'secondary' }) + ' rounded-full px-4 py-1'}>
                                AI Tools I'm Actively Using
                            </Badge>
                            <p>
                                Claude Code, GitHub Copilot, MCP servers (Laravel Boost, Context7, chrome-devtools, github-mcp, railway-mcp), and custom instruction sets. These work best with rich context about my codebase and environment.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent
                        value="personal"
                        className="space-y-12 mb-10"
                    >
                        <div>
                            <p className="mb-4">
                                I&apos;ve done and seen many things in life, but hands down the greatest experience has been to be a husband to my wife and the father of our three children.
                            </p>
                            <p className="mb-2">Here are some quick basic things:</p>
                            <ul className="px-1 list-disc list-inside">
                                <li>Born and raised in Los Angeles, CA.</li>
                                <li>Spent an incredible year in Mexico City.</li>
                                <li>Lived in Oregon for 5 beautiful years.</li>
                                <li>Now Austin, TX is home.</li>
                                <li>I love spicy food. Like real heat, not that weak stuff.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <Badge className={badgeVariants({ variant: 'secondary' }) + ' rounded-full px-4 py-1'}>
                                Music I Code To
                            </Badge>
                            <p className="text-sm">
                                I made these custom playlists for you. Enjoy!
                            </p>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {spotifyPlaylists.map((playlist) => (
                                    <SpotifyPlaylistCard
                                        key={playlist.name}
                                        name={playlist.name}
                                        url={playlist.url}
                                        image={playlist.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <div className="w-full mx-auto mb-26 sm:w-[75%] lg:w-5/12">
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
}
