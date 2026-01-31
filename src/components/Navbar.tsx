import { Github, Linkedin, Terminal } from "lucide-react"

export function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <div className="
                relative rounded-full max-w-2xl w-[90vw] md:w-auto h-14
                flex items-center justify-between gap-8 px-6 py-3
                bg-slate-900/50 backdrop-blur-xl border border-white/10 
                shadow-2xl shadow-black/20
            ">
                <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
                        <Terminal className="w-4 h-4 text-slate-200 group-hover:text-blue-400 transition-colors" />
                    </div>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
                            }}
                            className="
                                px-4 py-2 text-sm font-medium text-slate-400 
                                hover:text-white hover:bg-white/5 
                                rounded-full transition-all duration-300
                            "
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4 pl-6 border-l border-white/10">
                    <a
                        href="https://github.com/nathapatt"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nathapat/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </nav>
    )
}
