import { Code2, Network, MonitorCog, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

const strengths = [
    {
        icon: Code2,
        title: "Web Development",
        description: "สร้างเว็บแอปพลิเคชันที่ใช้งานง่ายและรองรับหลายขนาดหน้าจอ",
    },
    {
        icon: MonitorCog,
        title: "IT Support",
        description: "วิเคราะห์และแก้ไขปัญหาคอมพิวเตอร์ ซอฟต์แวร์ และระบบภายในองค์กร",
    },
    {
        icon: Network,
        title: "Infrastructure",
        description: "สนใจระบบเครือข่าย การเชื่อมต่อ และการดูแลระบบ IT",
    },
];

export default function About() {
    return (
        <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">About Me</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        Technology with a purpose.
                    </h2>
                    <p className="mt-5 leading-8 text-muted-foreground">{personalInfo.aboutText}</p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {strengths.map(({ icon: Icon, title, description }) => (
                        <article
                            key={title}
                            className="group apple-glass apple-glass-interactive rounded-3xl p-6"
                        >
                            <div className="mb-5 flex size-12 items-center justify-center rounded-2xl apple-glass-subtle text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="size-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground tracking-tight">{title}</h3>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-8 rounded-3xl apple-glass p-6 sm:p-8">
                    <p className="text-lg font-medium leading-8 text-foreground sm:text-xl">“{personalInfo.quote}”</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                        {personalInfo.location} · {personalInfo.interests.join(" / ")}
                    </p>
                </div>

                <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full apple-glass-subtle px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:scale-105 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                    มาพูดคุยกัน
                    <ArrowUpRight className="size-4" />
                </a>
            </div>
        </section>
    );
}
