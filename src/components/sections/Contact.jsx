import { ArrowUpRight, MapPin } from "lucide-react";
import { contactInfo, personalInfo } from "../../data/portfolioData";
import { Github } from "../../utils/github";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 mt-10">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl apple-glass p-7 sm:p-10 lg:p-14 shadow-2xl">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-indigo-500/15 blur-[100px]"
                    />

                    <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div className="max-w-2xl">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
                                Get in Touch
                            </p>
                            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                                Let’s build something useful.
                            </h2>
                            <p className="mt-5 leading-8 text-muted-foreground">
                                สนใจพูดคุยเกี่ยวกับการพัฒนาเว็บไซต์ เทคโนโลยี หรือโปรเจกต์ต่าง ๆ
                                สามารถติดต่อผ่านช่องทางด้านล่างได้
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="flex size-7 items-center justify-center rounded-full apple-glass-subtle">
                                    <MapPin className="size-3.5 text-indigo-500 dark:text-indigo-400" />
                                </div>
                                {contactInfo.location}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {contactInfo.github && (
                                <a
                                    href={contactInfo.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg transition-all duration-200 hover:scale-105 hover:opacity-90"
                                >
                                    <Github className="size-4" />
                                    GitHub
                                    <ArrowUpRight className="size-4" />
                                </a>
                            )}

                            {contactInfo.linkedin && (
                                <a
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex min-h-12 items-center gap-2 rounded-full apple-glass-subtle px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:scale-105 hover:text-indigo-500 dark:hover:text-indigo-400"
                                >
                                    LinkedIn
                                    <ArrowUpRight className="size-4" />
                                </a>
                            )}

                            {contactInfo.email && (
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="inline-flex min-h-12 items-center gap-2 rounded-full apple-glass-subtle px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:scale-105 hover:text-indigo-500 dark:hover:text-indigo-400"
                                >
                                    Email
                                    <ArrowUpRight className="size-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-center text-xs text-muted-foreground">
                    {personalInfo.name} · {personalInfo.role}
                </p>
            </div>
        </section>
    );
}
