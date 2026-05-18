import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import SectionHeading from './ui/section-heading'

export default function Projects() {
    return (
        <section
            className="w-full mx-auto min-h-svh mb-16 md:mb-0 border-t border-border pt-16 px-4 sm:px-6 lg:px-0"
            id="projects"
        >
            <div className="max-w-[640px] mx-auto">
                <SectionHeading headingText="Projects" />
            </div>
            <div className="max-w-[640px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project, index) => {
                    const isLastItem = index === projects.length - 1;
                    const isOddCount = projects.length % 2 !== 0;
                    const shouldCenter = isLastItem && isOddCount;

                    return (
                        <div
                            key={index}
                            className={shouldCenter ? "md:col-span-2 md:flex md:justify-center" : ""}
                        >
                            <div className={`group relative h-[220px] [perspective:1000px] ${shouldCenter ? "md:w-1/2 w-full" : "w-full"} ${isLastItem ? 'mb-8' : ''}`}>
                                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front face */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded overflow-hidden border border-border">
                                        <img
                                            src={project.image}
                                            alt={project.imageAltText}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex items-end">
                                            <div className="p-5 w-full">
                                                <h3 className="text-white text-base font-medium">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Back face */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded overflow-hidden border border-border bg-background p-5 flex flex-col gap-3">
                                        <span className="text-[0.75rem] text-muted-foreground">← back</span>
                                        <h3 className="text-base font-medium leading-snug">{project.title}</h3>
                                        <p className="text-[0.8125rem] text-muted-foreground leading-[1.65] line-clamp-3 grow">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
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
                                        <a
                                            href={project.link + "?ref=personal-website-projects"}
                                            target="_blank"
                                            rel="noopener"
                                            className="text-[0.8125rem] tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-150 w-fit"
                                        >
                                            Visit Site →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
