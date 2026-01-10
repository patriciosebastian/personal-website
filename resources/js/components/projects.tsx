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
            className="w-full mx-auto min-h-svh mb-16 md:mb-0 lg:w-2/3"
            id="projects"
        >
            <SectionHeading headingText="Projects" />
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <Collapsible
                        key={index}
                        open={expandedProject === index}
                        onOpenChange={(open) => setExpandedProject(open ? index : null)}
                    >
                        <Card className="p-0 overflow-hidden transition-shadow hover:shadow-lg">
                            <CollapsibleTrigger className="w-full text-left group">
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.imageAltText}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                        <div className="p-6 w-full flex justify-between items-center">
                                            <h3 className="text-white text-xl font-medium">
                                                {project.title}
                                            </h3>
                                            <ChevronDown
                                                className={`text-white transition-transform duration-300 ${
                                                    expandedProject === index ? 'rotate-180' : ''
                                                }`}
                                                size={24}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <CardContent className="p-6 space-y-4">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        asChild
                                    >
                                        <a
                                            href={project.link}
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
                ))}
            </div>
        </section>
    );
};

