import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { StarBackground } from "@/components/StarBackground"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { useState, useEffect } from "react"
import mySelf from "@/assets/myself.jpg"

export function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Full Stack Developer", "UX/UI Designer"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 150); // Faster deleting

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950 z-0"></div>

            {/* Stars Background (Canvas) */}
            <StarBackground />




            <RevealOnScroll>
                <div className="container relative z-10 px-4 flex flex-col items-center justify-center text-center space-y-8">

                    {/* Profile Picture (Centered & Minimal) */}
                    <div className="relative group w-32 h-32 md:w-40 md:h-40 mb-4">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 animate-gradient rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative aspect-square rounded-full bg-slate-900 border-2 border-slate-800 overflow-hidden">
                            <img
                                src={mySelf}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Main Typography */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-light text-slate-400 tracking-wide uppercase">
                            Hello, I'm
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase flex flex-col sm:block">
                            <span className="block sm:inline">Nathapat</span>
                            <span className="block sm:inline sm:ml-4">Nerangsi</span>
                        </h1>
                        <div className="flex flex-col items-center justify-center gap-2 text-lg md:text-2xl font-light text-slate-300">
                            <span className="text-center">Bachelor's of Computer Engineering at</span>
                            <span className="font-serif italic text-blue-400">Chiang Mai University</span>
                        </div>
                    </div>

                    {/* Dynamic Role Text */}
                    <div className="h-8 flex items-center justify-center">
                        <span className="text-slate-500 text-lg font-mono">{text}</span>
                        <span className="w-[2px] h-5 bg-blue-500 ml-2 animate-blink"></span>
                    </div>



                    {/* Minimal CTA */}
                    <div className="pt-8">
                        <Button
                            variant="link"
                            className="text-slate-400 hover:text-white transition-colors text-lg"
                            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            View Selected Work <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                </div>
            </RevealOnScroll>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
        </section>
    )
}
