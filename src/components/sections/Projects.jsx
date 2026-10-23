import { ArrowUpRight,  ExternalLink } from "lucide-react";
import { projects } from "../../data/portfolioData";
import { cx } from "../../utils/cx";
import { Github } from "../../utils/github";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 section animate-fadeInUp">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                        Selected Work
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        Projects built to solve problems.
                    </h2>
                    <p className="mt-5 leading-8 text-muted-foreground">
                        ตัวอย่างโปรเจกต์ที่สะท้อนความสนใจด้านการพัฒนาเว็บและการแก้ปัญหาด้วยเทคโนโลยี
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={cx(
                                "group flex h-full flex-col rounded-3xl apple-glass apple-glass-interactive p-6 sm:p-8",
                                index === 0 && "lg:col-span-2",
                            )}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex size-12 items-center justify-center rounded-2xl apple-glass-subtle text-indigo-500 dark:text-indigo-400 group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-sm font-semibold">{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <span className="rounded-full apple-glass-subtle px-3.5 py-1 text-xs font-medium text-muted-foreground">
                                    {project.status}
                                </span>
                            </div>

                            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                                {project.category}
                            </p>
                            <h3 className="mt-2 text-xl font-semibold text-foreground tracking-tight sm:text-2xl">{project.title}</h3>
                            <p className="mt-2 text-sm font-medium text-indigo-500 dark:text-indigo-400">{project.subtitle}</p>
                            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                                {project.description}
                            </p>

                            {project.highlights?.length > 0 && (
                                <ul className="mt-5 space-y-2">
                                    {project.highlights.map((highlight) => (
                                         <li
                                            key={highlight}
                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full apple-glass-subtle px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex flex-wrap gap-3 pt-7">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex min-h-10 items-center gap-2 rounded-full apple-glass-subtle px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:scale-105 hover:text-indigo-500 dark:hover:text-indigo-400"
                                    >
                                        <Github className="size-4" />
                                        GitHub
                                        <ArrowUpRight className="size-3.5" />
                                    </a>
                                )}

                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background shadow-lg transition-all duration-200 hover:scale-105 hover:opacity-90"
                                    >
                                        Live Demo
                                        <ExternalLink className="size-4" />
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
