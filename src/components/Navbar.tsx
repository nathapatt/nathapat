import { Button } from "@/components/ui/button"
import { Github, Linkedin, Terminal } from "lucide-react"

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
            <div className="container flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold text-slate-100 tracking-tight">Nathapat Nerangsi</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href="#about"
                        onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        onClick={(e) => { e.preventDefault(); document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                </div>

                {/* Action Button & Socials */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/nathapatt" target="_blank" rel="noreferrer">
                            <Github className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/in/nathapat/" target="_blank" rel="noreferrer">
                            <Linkedin className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                        </a>
                    </div>
                    <Button
                        size="sm"
                        className="bg-white text-slate-900 hover:bg-slate-200"
                        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Hire Me
                    </Button>
                </div>
            </div>
        </nav>
    )
}
