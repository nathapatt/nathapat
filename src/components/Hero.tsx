import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { StarBackground } from "@/components/StarBackground"
import { useState, useEffect } from "react"
import mySelf from "@/assets/myself.jpg"
import { motion } from "framer-motion"
import { fadeUpContainer, fadeUpItem, scaleIn } from "@/lib/animations"

export function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Full Stack Developer", "Software Engineer"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950 z-0"></div>
            <StarBackground />

            <motion.div
                className="container relative z-10 px-4 flex flex-col items-center justify-center text-center space-y-8"
                variants={fadeUpContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Profile Picture */}
                <motion.div variants={scaleIn} className="relative group w-32 h-32 md:w-40 md:h-40 mb-4">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-500 animate-gradient rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative aspect-square rounded-full bg-slate-900 border-2 border-slate-800 overflow-hidden">
                        <img src={mySelf} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* Greeting */}
                <motion.h2 variants={fadeUpItem} className="text-xl md:text-2xl font-light text-slate-400 tracking-wide uppercase">
                    Hello, I'm
                </motion.h2>

                {/* Name */}
                <motion.h1 variants={fadeUpItem} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase flex flex-col sm:block">
                    <span className="block sm:inline">Nathapat</span>
                    <span className="block sm:inline sm:ml-4">Nerangsi</span>
                </motion.h1>

                {/* University */}
                <motion.div variants={fadeUpItem} className="flex flex-col items-center justify-center gap-2 text-lg md:text-2xl font-light text-slate-300">
                    <span className="text-center">Bachelor's of Computer Engineering at</span>
                    <span className="font-serif italic text-blue-400">Chiang Mai University</span>
                </motion.div>

                {/* Dynamic Role Text */}
                <motion.div variants={fadeUpItem} className="h-8 flex items-center justify-center">
                    <span className="text-slate-500 text-lg font-mono">{text}</span>
                    <span className="w-[2px] h-5 bg-blue-500 ml-2 animate-blink"></span>
                </motion.div>

                {/* CTA */}
                <motion.div variants={fadeUpItem} className="pt-8">
                    <Button
                        variant="link"
                        className="text-white hover:text-blue-400 group transition-colors text-lg md:text-xl font-medium p-6"
                        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        View Selected Work <ArrowDown className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </Button>
                </motion.div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none"></div>
        </section>
    )
}
