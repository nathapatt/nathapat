
import { Github, Linkedin, Terminal } from "lucide-react"

export function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <div className="relative rounded-full overflow-hidden transition-all duration-400 group max-w-2xl w-[90vw] md:w-auto"
                style={{
                    boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)',
                }}>

                {/* Glass Layers */}
                <div className="absolute inset-0 z-0 backdrop-blur-[2px]" style={{ filter: 'url(#lg-dist)', isolation: 'isolate' }}></div>
                <div className="absolute inset-0 z-1 bg-white/5"></div>
                <div className="absolute inset-0 z-2 rounded-full pointer-events-none"
                    style={{
                        boxShadow: 'inset 1px 1px 0 rgba(255, 255, 255, 0.4), inset 0 0 5px rgba(255, 255, 255, 0.2)'
                    }}>
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-between gap-8 px-6 py-3 bg-slate-900/30 backdrop-blur-xl">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                            <Terminal className="w-4 h-4 text-slate-200 group-hover:text-blue-400 transition-colors" />
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href="#about"
                            onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#experience"
                            onClick={(e) => { e.preventDefault(); document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            Experience
                        </a>
                        <a
                            href="#skills"
                            onClick={(e) => { e.preventDefault(); document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Socials (Minimal) */}
                    <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                        <a href="https://github.com/nathapatt" target="_blank" rel="noreferrer">
                            <Github className="w-4 h-4 text-slate-300 hover:text-white transition-colors cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/in/nathapat/" target="_blank" rel="noreferrer">
                            <Linkedin className="w-4 h-4 text-slate-300 hover:text-white transition-colors cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>

            {/* SVG Filter Definition */}
            <svg style={{ display: 'none' }}>
                <filter id="lg-dist" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
                    <feGaussianBlur in="noise" stdDeviation="2.5" result="blurred" />

                    {/* Chromatic Aberration: Displace channels separately with spread of 2 around 64 */}
                    <feDisplacementMap in="SourceGraphic" in2="blurred" scale="62" xChannelSelector="R" yChannelSelector="G" result="DISP_R" />
                    <feDisplacementMap in="SourceGraphic" in2="blurred" scale="64" xChannelSelector="B" yChannelSelector="R" result="DISP_G" />
                    <feDisplacementMap in="SourceGraphic" in2="blurred" scale="66" xChannelSelector="G" yChannelSelector="B" result="DISP_B" />

                    <feMerge>
                        <feMergeNode in="DISP_R" />
                        <feMergeNode in="DISP_G" />
                        <feMergeNode in="DISP_B" />
                    </feMerge>
                </filter>
            </svg>
        </nav>
    )
}
