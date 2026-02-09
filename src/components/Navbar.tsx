import { useState } from "react"
import { Github, Linkedin, Terminal, Menu, X, ChevronRight } from "lucide-react"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = ["About", "Projects", "Skills", "Experience", "Contact"]

    const handleNavClick = (item: string) => {
        document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-4">
            {/* Mobile Layout - Two Separate Cards */}
            <div className="md:hidden flex justify-between items-center">
                {/* Left Card - Menu Button */}
                <div className="
                    rounded-full h-14 px-4
                    flex items-center justify-center
                    bg-slate-900/50 backdrop-blur-xl border border-white/10 
                    shadow-2xl shadow-black/20
                ">
                    <button
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-4 h-4 text-slate-200" />
                        ) : (
                            <Menu className="w-4 h-4 text-slate-200" />
                        )}
                    </button>
                </div>

                {/* Right Card - Social Icons */}
                <div className="
                    rounded-full h-14 px-4
                    flex items-center gap-4
                    bg-slate-900/50 backdrop-blur-xl border border-white/10 
                    shadow-2xl shadow-black/20
                ">
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

            {/* Desktop Layout - Single Unified Card */}
            <div className="
                hidden md:flex
                mx-auto rounded-full max-w-2xl w-auto h-14
                items-center justify-between gap-8 px-6 py-3
                bg-slate-900/50 backdrop-blur-xl border border-white/10 
                shadow-2xl shadow-black/20
            ">
                {/* Desktop Logo */}
                <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
                        <Terminal className="w-4 h-4 text-slate-200 group-hover:text-blue-400 transition-colors" />
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => {
                                e.preventDefault()
                                handleNavClick(item)
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

                {/* Desktop Social Icons */}
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

            {/* Mobile Sidebar Overlay */}
            <div
                className={`
                    md:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40
                    transition-opacity duration-300
                    ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div className={`
                md:hidden fixed top-0 left-0 w-[280px] h-full
                bg-slate-900/50 backdrop-blur-2xl border-r border-white/10
                p-6 flex flex-col gap-6 z-50
                transform transition-transform duration-300 ease-out
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                shadow-2xl shadow-black/50
            `}>
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-100 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-end">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                <div className="relative z-10 flex flex-col gap-6 mt-4">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => {
                                e.preventDefault()
                                handleNavClick(item)
                            }}
                            className="
                                flex items-center justify-between
                                text-2xl font-['Outfit'] font-bold text-white tracking-wide
                                group/item
                            "
                        >
                            {item}
                            <ChevronRight className="w-6 h-6 text-slate-500 group-hover/item:text-white transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
