import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Terminal, Menu, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState<string>("")
    const isNavigating = useRef(false)
    const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const navItems = ["About", "Projects", "Skills", "Experience", "Contact"]

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        // Observe hero section — clears the active indicator
        const heroEl = document.querySelector("#hero")
        if (heroEl) {
            const heroObserver = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection("") },
                { threshold: 0.4 }
            )
            heroObserver.observe(heroEl)
            observers.push(heroObserver)
        }

        navItems.forEach((item) => {
            const el = document.querySelector(`#${item.toLowerCase()}`)
            if (!el) return
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !isNavigating.current) setActiveSection(item.toLowerCase())
                },
                { threshold: 0.4 }
            )
            observer.observe(el)
            observers.push(observer)
        })

        return () => observers.forEach((o) => o.disconnect())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleNavClick = (item: string) => {
        document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
        setActiveSection(item.toLowerCase())
        setIsMenuOpen(false)
        // Lock observer updates during smooth scroll to prevent intermediate sections overriding the highlight
        isNavigating.current = true
        if (navigationTimer.current) clearTimeout(navigationTimer.current)
        navigationTimer.current = setTimeout(() => { isNavigating.current = false }, 800)
    }

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-4">
            {/* Mobile Layout */}
            <div className="md:hidden flex justify-between items-center">
                {/* Left Card - Menu Button: slides in from left */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-full h-14 px-4 flex items-center justify-center bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
                >
                    <button
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isMenuOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-4 h-4 text-slate-200" />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-4 h-4 text-slate-200" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </motion.div>

                {/* Right Card - Social Icons: slides in from right */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-full h-14 px-4 flex items-center gap-4 bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
                >
                    <a href="https://github.com/nathapatt" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/nathapat/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>

            {/* Desktop Layout - Pill slides down from top */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex mx-auto rounded-full max-w-2xl w-auto h-14 items-center justify-between gap-8 px-6 py-3 bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
            >
                {/* Logo */}
                <motion.a
                    href="#"
                    className="flex items-center gap-2 group"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
                        <Terminal className="w-4 h-4 text-slate-200 group-hover:text-blue-400 transition-colors" />
                    </div>
                </motion.a>

                {/* Nav items stagger in */}
                <div className="flex items-center gap-1">
                    {navItems.map((item, i) => {
                        const isActive = activeSection === item.toLowerCase()
                        return (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(item) }}
                                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                                    }`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {/* Active pill background */}
                                {isActive && (
                                    <motion.span
                                        layoutId="active-pill"
                                        className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{item}</span>
                                {/* Active blue dot */}
                                {isActive && (
                                    <motion.span
                                        layoutId="active-dot"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        )
                    })}
                </div>

                {/* Social icons stagger in after nav items */}
                <motion.div
                    className="flex items-center gap-4 pl-6 border-l border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75, duration: 0.4 }}
                >
                    <a href="https://github.com/nathapatt" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/nathapat/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="overlay"
                        className="md:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="sidebar"
                        className="md:hidden fixed top-0 left-0 w-[280px] h-full bg-slate-900/50 backdrop-blur-2xl border-r border-white/10 p-6 flex flex-col gap-6 z-50 shadow-2xl shadow-black/50"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-100 pointer-events-none" />

                        <div className="relative z-10 flex items-center justify-end">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Nav items stagger in when sidebar opens */}
                        <div className="relative z-10 flex flex-col gap-6 mt-4">
                            {navItems.map((item, i) => {
                                const isActive = activeSection === item.toLowerCase()
                                return (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(item) }}
                                        className={`flex items-center justify-between text-2xl font-['Outfit'] font-bold tracking-wide group/item ${isActive ? "text-blue-400" : "text-white"
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <span className="flex items-center gap-3">
                                            {isActive && (
                                                <motion.span
                                                    layoutId="mobile-active-dot"
                                                    className="w-1.5 h-1.5 rounded-full bg-blue-400"
                                                />
                                            )}
                                            {item}
                                        </span>
                                        <ChevronRight className={`w-6 h-6 transition-colors ${isActive ? "text-blue-400" : "text-slate-500 group-hover/item:text-white"
                                            }`} />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
