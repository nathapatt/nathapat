import { Calendar, MapPin } from "lucide-react"
import { useResponsive } from "@/hooks/useResponsive"
import witsawaLogo from "@/assets/witsawa.png"
import cmuLogo from "@/assets/chiangmai_uni.svg"
import { useEffect, useRef, useState } from "react"

export function Experience() {
    const { isMobile } = useResponsive();
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { top, height } = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how much of the section is visible/scrolled
                // Start filling when top reaches center of viewport
                const startThreshold = windowHeight * 0.5;

                let percentage = 0;
                if (top <= startThreshold) {
                    const scrolledDistance = startThreshold - top;
                    percentage = (scrolledDistance / height) * 100;
                    percentage = Math.min(Math.max(percentage, 0), 100);
                    setScrollHeight(percentage);
                } else {
                    setScrollHeight(0);
                }

                // Check which items are "passed" by the line
                // The line height is 'percentage' of the total container height
                const activeIds: number[] = [];
                cardRefs.current.forEach((card, index) => {
                    if (card) {
                        // Get card's relative position within the container
                        const cardTop = card.offsetTop;
                        const cardHeight = card.offsetHeight;

                        // Current line height in pixels
                        const currentLineHeightPx = (percentage / 100) * height;

                        // If line height >= dot position (center of card)
                        if (currentLineHeightPx >= cardTop + (cardHeight / 2)) {
                            activeIds.push(index);
                        }
                    }
                });

                setActiveIndexes((prev) => {
                    if (prev.length === activeIds.length && prev.every((id, i) => id === activeIds[i])) {
                        return prev;
                    }
                    return activeIds;
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            date: "June 2022- March 2026",
            location: "Chiang Mai, Thailand",
            gpa: "GPA 3.29",
            logo: cmuLogo,
            items: []
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Experience
                    </h2>
                </div>

                <div className={`relative max-w-4xl mx-auto ${isMobile ? "pl-0" : "pl-8 md:pl-0"}`} ref={containerRef}>
                    {/* Vertical Line Container - Hidden on mobile, using individual connectors instead */}
                    {!isMobile && (
                        <div className={`absolute top-0 h-full w-[2px] bg-slate-800/50 rounded-full overflow-hidden left-0 md:left-8`}>
                            {/* Animated Scroll Progress Line */}
                            <div
                                className="bg-blue-500 w-full origin-top transition-all duration-100 ease-linear"
                                style={{ height: `${scrollHeight}%` }}
                            />
                        </div>
                    )}

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative group ${isMobile ? "pl-0" : "pl-8 md:pl-16"}`}
                                ref={(el) => { cardRefs.current[index] = el }}
                            >
                                {/* Mobile Connector Line - connects bottom of this card to top of next card */}
                                {isMobile && index < experiences.length - 1 && (
                                    <div
                                        className={`
                                            absolute left-1/2 -translate-x-1/2 w-[2px] bg-slate-800/50 rounded-full overflow-hidden
                                            top-full h-16
                                        `}
                                        style={{ zIndex: 10 }}
                                    >
                                        {/* Animated fill for mobile connector */}
                                        <div
                                            className="bg-blue-500 w-full origin-top transition-all duration-100 ease-linear"
                                            style={{
                                                height: activeIndexes.includes(index) ? '100%' : '0%'
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Timeline Dot */}
                                <div
                                    className={`
                                        absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-slate-950 z-20 transition-all duration-500 
                                        ${isMobile ? "hidden" : "left-[-9px] md:left-[23px]"}
                                        ${activeIndexes.includes(index)
                                            ? "bg-blue-500 scale-125 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]"
                                            : "bg-slate-700"
                                        }
                                    `}
                                />

                                {/* Content Card */}
                                <div
                                    className={`
                                        group relative overflow-hidden 
                                        bg-white/[0.03] backdrop-blur-xl border border-white/10 
                                        p-8 rounded-3xl
                                        transition-all duration-500 ease-out
                                        hover:bg-white/[0.05] hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10
                                        ${activeIndexes.includes(index)
                                            ? "border-white/20 shadow-lg shadow-blue-500/5"
                                            : "border-white/10"
                                        }
                                    `}
                                >
                                    {/* Inner Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">

                                        <div className={`flex flex-col md:flex-row md:items-start md:justify-between gap-4 ${exp.items.length > 0 ? "mb-4" : ""}`}>
                                            <div className="flex items-start gap-4">
                                                <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center p-4 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                                        {exp.role}
                                                    </h3>
                                                    <div className="text-slate-300 font-medium mb-1">{exp.company}</div>

                                                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mt-2">
                                                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                                                            <MapPin className="w-3.5 h-3.5" />
                                                            {exp.location}
                                                        </span>
                                                        {exp.gpa && (
                                                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                                                <span className="font-semibold">{exp.gpa}</span>
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-slate-300 text-sm font-medium bg-white/5 px-4 py-1.5 rounded-full border border-white/5 self-start shrink-0">
                                                <Calendar className="w-4 h-4" />
                                                {exp.date || exp.period}
                                            </div>
                                        </div>



                                        {exp.items.length > 0 && (
                                            <ul className="space-y-4">
                                                {exp.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 group/item">
                                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400/80 shrink-0 group-hover/item:bg-blue-400 transition-colors" />
                                                        <span className="text-slate-300 text-base leading-relaxed group-hover/item:text-white transition-colors">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
