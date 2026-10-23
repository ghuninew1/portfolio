
import FadeInSection from "../components/common/FadeInSection";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Timeline from "../components/sections/Timeline";
import Contact from "../components/sections/Contact";

export default function Home() {
    return (
        <main className="overflow-hidden w-full">
            <FadeInSection>
                <div className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32 mb-10" id="home">
                    <div className="mx-auto max-w-7xl">
                        <div className="inline-flex items-center gap-2 rounded-full apple-glass-subtle px-4 py-1.5 text-xs font-medium text-foreground/80 mb-6 shadow-sm">
                            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                            Available for new opportunities
                        </div>
                        <h1 className="mt-0 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Hello, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400">
                                GhuniNew
                            </span>
                        </h1>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <About />
            </FadeInSection>

            <FadeInSection>
                <Skills />
            </FadeInSection>

            <FadeInSection>
                <Projects />
            </FadeInSection>

            <FadeInSection>
                <Timeline />
            </FadeInSection>

            <FadeInSection>
                <Contact />
            </FadeInSection>
        </main>
    );
}
