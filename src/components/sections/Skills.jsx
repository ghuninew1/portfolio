import { Layers3 } from "lucide-react";
import { techStack } from "../../data/portfolioData";

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 section animate-fadeInUp">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Tech Stack</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        Tools I work with.
                    </h2>
                    <p className="mt-5 leading-8 text-muted-foreground">
                        เทคโนโลยีและเครื่องมือที่ใช้ในการพัฒนาเว็บไซต์และทำงานด้าน IT
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {techStack.map((tech) => (
                        <article
                            key={tech.name}
                            className="group apple-glass apple-glass-interactive rounded-3xl p-5"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl apple-glass-subtle text-indigo-500 dark:text-indigo-400 group-hover:scale-105 transition-transform duration-300">
                                    <Layers3 className="size-5" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                                        {tech.category}
                                    </p>
                                    <h3 className="mt-1 font-semibold text-foreground tracking-tight">{tech.name}</h3>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{tech.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
