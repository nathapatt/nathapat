import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Terminal, Code2, Database, Cpu, Globe, Server, Laptop, Smartphone } from "lucide-react"
import { StarBackground } from "@/components/StarBackground"
import { RevealOnScroll } from "@/components/RevealOnScroll"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950 z-0"></div>

            {/* Stars Background (Canvas) */}
            <StarBackground />

            {/* Cloud Shape at Top (SVG) */}
            {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 opacity-30">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(140%+1.3px)] h-[150px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-blue-900"></path>
                </svg>
            </div> */}


            <RevealOnScroll>
                <div className="container relative z-10 px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Floating Icons / Tech Galaxy */}
                    <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center">
                        {/* Central Glow */}
                        <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

                        {/* Orbiting Icons */}
                        <div className="relative w-full h-full">
                            {/* Center Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-900/80 backdrop-blur-md border border-blue-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 z-20">
                                <Code2 className="w-10 h-10 text-blue-400" />
                            </div>

                            {/* Surrounding Icons */}
                            {[
                                { Icon: Terminal, color: "text-emerald-400", delay: "0s", top: "10%", left: "20%" },
                                { Icon: Database, color: "text-purple-400", delay: "1s", top: "20%", left: "80%" },
                                { Icon: Globe, color: "text-cyan-400", delay: "2s", top: "80%", left: "30%" },
                                { Icon: Server, color: "text-orange-400", delay: "3s", top: "70%", left: "70%" },
                                { Icon: Cpu, color: "text-red-400", delay: "4s", top: "40%", left: "10%" },
                                { Icon: Laptop, color: "text-indigo-400", delay: "1.5s", top: "15%", left: "60%" },
                                { Icon: Smartphone, color: "text-pink-400", delay: "3.5s", top: "60%", left: "90%" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="absolute p-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg animate-float"
                                    style={{
                                        top: item.top,
                                        left: item.left,
                                        animationDelay: item.delay
                                    }}
                                >
                                    <item.Icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Fullstack Developer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                                & API Expert
                            </span>
                        </h1>

                        <p className="max-w-[600px] text-slate-400 md:text-xl leading-relaxed">
                            Crafting robust, scalable web applications with modern technologies.
                            Let's build something amazing together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 transition-all font-semibold rounded-full px-8">
                                View Projects
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-full px-8 backdrop-blur-sm">
                                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* Socials */}
                        <div className="pt-4 flex items-center gap-6 text-slate-500">
                            <Github className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                            <Linkedin className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                            <Terminal className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
        </section>
    )
}
