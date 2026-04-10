import { Calendar, MapPin } from "lucide-react"
import { useResponsive } from "@/hooks/useResponsive"
import witsawaLogo from "@/assets/witsawa.png"
import cmuLogo from "@/assets/chiangmai_uni.svg"
import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion"
import { fadeUpContainer, fadeUpItem, viewportOnce } from "@/lib/animations"

function ExperienceCard({
    exp,
    index,
    isLast,
}: {
    exp: {
        company: string
        role: string
        period: string
        date: string
        location: string
        gpa?: string
        logo: string
        items: React.ReactNode[]
    }
    index: number
    isLast: boolean
}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false, margin: "0px 0px -40% 0px" })

    return (
        <motion.div
            ref={ref}
            className="relative flex gap-6 md:gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Left column: line + logo node */}
            <div className="hidden md:flex flex-col items-center flex-shrink-0" style={{ width: 96 }}>
                {/* Logo as the timeline node */}
                <motion.div
                    className="relative z-20 w-24 h-24 rounded-2xl flex items-center justify-center p-4 border transition-all duration-500"
                    animate={isInView ? {
                        borderColor: "rgba(59,130,246,0.5)",
                        backgroundColor: "rgb(4, 14, 36)",
                        boxShadow: "0 0 0 4px rgba(59,130,246,0.1), 0 0 20px rgba(59,130,246,0.15)",
                    } : {
                        borderColor: "rgba(255,255,255,0.1)",
                        backgroundColor: "rgb(2, 6, 23)",
                        boxShadow: "none",
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    {/* Pulsing ring when active */}
                    {isInView && (
                        <motion.div
                            className="absolute inset-0 rounded-2xl border border-blue-400/40"
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{ scale: 1.3, opacity: 0 }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                        />
                    )}
                </motion.div>

                {/* Connecting line segment below this node — hidden for last card */}
                {!isLast && (
                    <div className="w-[2px] flex-1 mt-3 min-h-[2rem] relative overflow-visible">
                        <div className="absolute inset-0 bg-slate-800/50 rounded-full" />
                        <motion.div
                            className="absolute inset-0 origin-top rounded-full"
                            style={{
                                background: isInView
                                    ? "linear-gradient(to bottom, #3b82f6, #60a5fa88)"
                                    : "transparent",
                            }}
                            animate={{ scaleY: isInView ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </div>
                )}
            </div>

            {/* Right column: card content */}
            <div className="flex-1 pb-12">
                <div
                    className={`
                        group relative overflow-hidden
                        bg-white/[0.03] backdrop-blur-xl
                        p-6 md:p-8 rounded-3xl
                        transition-all duration-500 ease-out
                        hover:bg-white/[0.06] hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10
                        ${isInView ? "border border-white/20 shadow-lg shadow-blue-500/5" : "border border-white/10"}
                    `}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        {/* Mobile: logo inline */}
                        <div className="md:hidden flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
                                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                                <div className="text-slate-300 text-sm">{exp.company}</div>
                            </div>
                        </div>

                        {/* Header row */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                            <div className="hidden md:block">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                    {exp.role}
                                </h3>
                                <div className="text-slate-200 font-medium">{exp.company}</div>
                            </div>

                            <div className="flex items-center gap-2 text-slate-300 text-sm font-medium bg-white/5 px-4 py-1.5 rounded-full border border-white/5 self-start shrink-0">
                                <Calendar className="w-4 h-4" />
                                {exp.date || exp.period}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-5">
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-slate-300 text-sm">
                                <MapPin className="w-3.5 h-3.5" />
                                {exp.location}
                            </span>
                            {exp.gpa && (
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
                                    {exp.gpa}
                                </span>
                            )}
                        </div>

                        {/* Bullet items */}
                        {exp.items.length > 0 && (
                            <ul className="space-y-3">
                                {exp.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-3 group/item"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400/80 shrink-0 group-hover/item:bg-blue-400 transition-colors" />
                                        <span className="text-slate-200 text-base leading-relaxed group-hover/item:text-white transition-colors">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export function Experience() {
    const { isMobile } = useResponsive()
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 70%", "end 60%"],
    })
    const lineScaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20, restDelta: 0.001 })
    const tipTop = useTransform(lineScaleY, [0, 1], ["0%", "100%"])

    const experiences = [
        {
            company: "Witsawa Corporation Co., Ltd.",
            role: "Full Stack Developer Intern",
            period: "Internship",
            date: "April 2025 - May 2025",
            location: "Bangkok, Thailand",
            logo: witsawaLogo,
            items: [
                <>
                    Engineered high-fidelity responsive landing pages (e.g.,{" "}
                    <a
                        href="https://waywork.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors border-b border-blue-400/30 hover:border-blue-300"
                    >
                        waywork.co
                    </a>
                    ) using React and Ant Design, ensuring pixel-perfect implementation from Figma designs.
                </>,
                "Contributed to the Waywork App ecosystem by identifying and patching frontend bugs, improving overall system stability and user experience for the core product.",
                "Developed backend reporting endpoints to automate data extraction, enabling high-performance generation of Excel and PDF documents for business operations.",
                "Streamlined development workflows by utilizing Ant Design components to build scalable and consistent UI/UX across multiple client-facing projects."
            ]
        },
        {
            company: "Chiang Mai University",
            role: "Computer Engineering (Cybersec Track)",
            period: "2021 - Present",
            date: "June 2022 - March 2026",
            location: "Chiang Mai, Thailand",
            gpa: "GPA 3.36",
            logo: cmuLogo,
            items: []
        }
    ]

    return (
        <section id="experience" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUpItem} className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
                        My Journey
                    </motion.p>
                    <motion.h2 variants={fadeUpItem} className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Experience
                    </motion.h2>
                </motion.div>

                {/* Timeline container */}
                <div className="relative max-w-3xl mx-auto" ref={containerRef}>

                    {/* Continuous background track — sits behind the logo column */}
                    {!isMobile && (
                        <div
                            className="absolute top-0 bottom-0 hidden md:block"
                            style={{ left: 47, width: 2 }}
                        >
                            <div className="absolute inset-0 bg-slate-800/40 rounded-full" />
                            <motion.div
                                className="absolute top-0 left-0 right-0 rounded-full origin-top bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500/30"
                                style={{ scaleY: lineScaleY, height: "100%" }}
                            />
                            {/* Glowing tip */}
                            <motion.div
                                className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_4px_rgba(96,165,250,0.5)]"
                                style={{ top: tipTop }}
                            />
                        </div>
                    )}

                    {/* Cards */}
                    <div className="space-y-0">
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={index}
                                exp={exp}
                                index={index}
                                isLast={index === experiences.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
