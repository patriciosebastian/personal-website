import { projects } from '@/data/projects'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-react'
import SectionHeading from './ui/section-heading'

export default function Projects() {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    return (
        <section
            className="w-full mx-auto min-h-svh mb-16 md:mb-0 lg:w-2/3 border-t border-border pt-16"
            id="projects"
        >
            <SectionHeading headingText="Projects" />
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => {
                    const isLastItem = index === projects.length - 1;
                    const isOddCount = projects.length % 2 !== 0;
                    const shouldCenter = isLastItem && isOddCount;

                    return (
                        <div
                            key={index}
                            className={shouldCenter ? "md:col-span-2 md:flex md:justify-center" : ""}
                        >
                            <Collapsible
                                open={expandedProject === index}
                                onOpenChange={(open) => setExpandedProject(open ? index : null)}
                                className={shouldCenter ? "md:w-1/2" : "w-full"}
                            >
                                <Card className={`p-0 overflow-hidden transition-[border-color,box-shadow,transform] duration-[220ms] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-muted-foreground rounded ${isLastItem ? 'mb-8' : ''}`}>
                                    <CollapsibleTrigger className="w-full text-left group">
                                        <div className="relative">
                                            <img
                                                src={project.image}
                                                alt={project.imageAltText}
                                                className="w-full h-64 object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex items-end">
                                                <div className="p-6 w-full flex justify-between items-center">
                                                    <h3 className="text-white text-base font-medium">
                                                        {project.title}
                                                    </h3>
                                                    <ChevronDown
                                                        className={`text-white transition-transform duration-300 ${
                                                            expandedProject === index ? 'rotate-180' : ''
                                                        }`}
                                                        size={20}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <CardContent className="p-5 space-y-4">
                                            <p className="text-[0.8125rem] text-muted-foreground leading-[1.65] line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant="secondary"
                                                        className="rounded text-[0.6875rem] px-2 py-0.5 border-0"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="rounded text-xs tracking-wide"
                                                asChild
                                            >
                                                <a
                                                    href={project.link + "?ref=personal-website-projects"}
                                                    target="_blank"
                                                    rel="noopener"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Visit Site →
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </CollapsibleContent>
                                </Card>
                            </Collapsible>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
