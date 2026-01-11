import { Calendar, MapPin } from "lucide-react"
import witsawaLogo from "@/assets/witsawa.png"
import cmuLogo from "@/assets/chiangmai_uni.svg"
import { useEffect, useRef, useState } from "react"

export function Experience() {
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
                setActiveIndexes(activeIds);
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
            description: "Developed responsive web applications for real clients.",
            location: "Bangkok, Thailand",
            logo: witsawaLogo,
            items: [
                "Built frontend interfaces using Ant Design and React, focusing on mobile responsiveness and real client requirements.",
                "Implemented backend endpoints with NestJS to retrieve data and export reports to Excel.",
                "Collaborated with the team to deliver scalable solutions."
            ]
        },
        {
            company: "Chiang Mai University",
            role: "Computer Engineering Student",
            period: "2021 - Present",
            date: "June 2022- March 2026",
            description: "Specializing in Cybersecurity Track",
            location: "Chiang Mai, Thailand",
            gpa: "GPA 3.29",
            logo: cmuLogo,
            items: [
                "Focusing on bridging software development with security principles.",
                "Active participant in departmental activities and tech exploration."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-950 text-white relative overflow-hidden">

            <div className="container px-4 md:px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="bg-clip-text">
                        Experience
                    </span>
                </h2>

                <div className="relative max-w-4xl mx-auto pl-8 md:pl-0" ref={containerRef}>
                    {/* Vertical Line Container */}
                    <div className="absolute left-0 md:left-8 top-0 h-full w-[2px] bg-slate-800">
                        {/* Animated Scroll Progress Line */}
                        <div
                            className="bg-blue-500 w-full transition-all duration-100 ease-out origin-top"
                            style={{ height: `${scrollHeight}%` }}
                        ></div>
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-8 md:pl-16 group"
                                ref={(el) => { cardRefs.current[index] = el }}
                            >

                                {/* Timeline Dot */}
                                <div
                                    className={`absolute left-[-9px] md:left-[23px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-slate-950 z-20 transition-all duration-500 ${activeIndexes.includes(index)
                                        ? "bg-blue-500 scale-125 shadow-[0_0_0_4px_rgba(59,130,246,0.3)]"
                                        : "bg-slate-700"
                                        }`}
                                ></div>

                                {/* Content Card */}
                                <div
                                    className={`bg-slate-900/40 backdrop-blur-md rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 ${activeIndexes.includes(index)
                                        ? "border-white/10 shadow-xl shadow-blue-500/5 -translate-y-1"
                                        : "border-white/5 hover:border-white/10"
                                        }`}
                                >

                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center p-2 border border-white/10">
                                                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                                <div className="flex items-center gap-2 text-slate-400">
                                                    <span className="text-blue-400 font-medium">{exp.company}</span>
                                                    <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                                                    <span className="text-sm flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" /> {exp.location}
                                                    </span>
                                                    {exp.gpa && (
                                                        <>
                                                            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                                                            <span className="text-emerald-400 font-medium text-sm">
                                                                {exp.gpa}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                                            <Calendar className="w-3 h-3" />
                                            {exp.date || exp.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                                                <span className="text-blue-500 mt-1.5 font-bold">▸</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
