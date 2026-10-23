import { ArrowDownRight, CircleDot } from "lucide-react";
import { timeline } from "../../data/portfolioData";

export default function Timeline() {
    return (
        <section id="timeline" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 section animate-fadeInUp">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">My Journey</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        Learning by building.
                    </h2>
                    <p className="mt-5 leading-8 text-muted-foreground">
                        เส้นทางการพัฒนาทักษะและการสร้างโปรเจกต์อย่างต่อเนื่อง
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute bottom-5 left-[19px] top-5 w-px bg-gradient-to-b from-indigo-500/80 via-white/20 to-transparent sm:left-[23px]" />

                    <div className="space-y-8">
                        {timeline.map((item) => (
                            <article key={item.id} className="relative flex gap-5 sm:gap-7">
                                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full apple-glass text-indigo-500 dark:text-indigo-400 sm:size-12 shadow-md">
                                    <CircleDot className="size-5" />
                                </div>

                                <div className="min-w-0 flex-1 rounded-3xl apple-glass apple-glass-interactive p-5 sm:p-7">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                                        {item.type}
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-foreground tracking-tight">{item.titleTh}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{item.title}</p>
                                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowDownRight className="size-4 text-indigo-400" />
                    ยังคงเรียนรู้และพัฒนาต่อไป
                </p>
            </div>
        </section>
    );
}
