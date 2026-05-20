import { useState } from 'react'
import { projects } from '@/data/projects'
import SectionHeading from './ui/section-heading'

export default function Projects() {
    const [flipped, setFlipped] = useState<number | null>(null);

    return (
        <section
            className="w-full mx-auto min-h-svh pt-24 pb-24"
            id="projects"
        >
            <SectionHeading
                headingText="Projects"
                chapter="II"
            />
            <div className="max-w-180 mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project, index) => {
                    const isFlipped = flipped === index;

                    return (
                        <div
                            key={index}
                            className="h-120 perspective-distant"
                        >
                            <div
                                className={`relative w-full h-full transform-3d transition-transform duration-500 ease-in-out ${isFlipped ? 'transform-[rotateY(180deg)]' : 'transform-[rotateY(0deg)]'}`}
                            >
                                {/* Front */}
                                <div
                                    onClick={() => setFlipped(index)}
                                    className="absolute inset-0 backface-hidden overflow-hidden border border-border rounded-sm flex flex-col cursor-pointer hover:border-muted-foreground transition-colors duration-200"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.imageAltText}
                                        className="w-full h-65 object-cover shrink-0"
                                        loading="lazy"
                                    />
                                    <div className="p-5 flex flex-col gap-3 flex-1">
                                        <div className="space-y-1">
                                            <h3 className="font-display font-medium text-base text-foreground leading-snug">
                                                {project.title}
                                            </h3>
                                            <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-press-accent">
                                                {project.summary}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-[11px] px-2 py-0.5 bg-secondary rounded text-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-auto pt-1 flex items-center justify-between">
                                            <a
                                                href={project.link + '?ref=personal-website-projects'}
                                                target="_blank"
                                                rel="noopener"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-xs text-muted-foreground hover:text-foreground underline decoration-transparent hover:decoration-muted-foreground underline-offset-2 transition-[color,text-decoration-color] duration-150"
                                            >
                                                Visit Site
                                            </a>
                                            <span className="text-xs text-foreground inline-flex items-center gap-1.5">
                                                Details <span className="text-press-accent">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Back */}
                                <div
                                    className="absolute inset-0 backface-hidden transform-[rotateY(180deg)] overflow-y-auto border border-border rounded-sm bg-background"
                                    style={{ scrollbarWidth: 'thin' }}
                                >
                                    <div className="p-6 flex flex-col gap-4 min-h-full">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-press-accent mb-1.5">
                                                    {project.summary}
                                                </p>
                                                <h3 className="font-display font-medium text-xl text-foreground leading-tight">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <button
                                                onClick={() => setFlipped(null)}
                                                className="text-muted-foreground hover:text-foreground transition-colors duration-150 shrink-0 text-xs tracking-[0.05em] mt-0.5 cursor-pointer"
                                                aria-label="Flip back"
                                            >
                                                ← Back
                                            </button>
                                        </div>

                                        <div className="h-px bg-border" />

                                        <div className="text-xs leading-[1.75] text-muted-foreground">
                                            {project.description}
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground">Stack</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.techStack.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[11px] px-2 py-0.5 bg-secondary rounded text-foreground"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-2">
                                            <a
                                                href={project.link + '?ref=personal-website-projects'}
                                                target="_blank"
                                                rel="noopener"
                                                className="inline-flex items-center justify-center w-full h-10 border border-foreground rounded bg-transparent text-foreground text-xs tracking-[0.08em] uppercase hover:bg-foreground hover:text-background transition-colors duration-200"
                                            >
                                                Visit Site →
                                            </a>
                                        </div>
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
