import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { useResponsive } from "@/hooks/useResponsive"
import medImage from "../assets/med.png"
import orderImage from "../assets/order.png"
import orderClientImage from "../assets/order_client.png"
import ticketImage from "../assets/ticket.png"
import upbeatImage from "../assets/upbeat.png"
import foonbotHistoryImage from "../assets/foonbot-history.png"
import foonbotLoadingImage from "../assets/foonbot-loading.png"
import foonbotChatImage from "../assets/foonbot-chat.jpg"
import { fadeUpContainer, fadeUpItem, viewportOnce } from "@/lib/animations"

interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    gradient: string;
    image?: string;
    mobileImage?: string;
    mobileGallery?: string[];
    links: {
        demo: string;
        code: string;
        code2?: string;
    };
    imagePosition?: string;
}

const projects: Project[] = [
    {
        id: "01",
        category: "Backend Developer / AI Integration",
        title: "Foonbot",
        description: "A LINE-based air quality assistant for Thailand built with Spring Boot, LIFF, IQAir, scheduled notifications, AQI history tracking, and AI-generated health guidance.",
        gradient: "from-sky-500 via-cyan-500 to-emerald-500",
        mobileGallery: [foonbotHistoryImage, foonbotChatImage, foonbotLoadingImage],
        links: { demo: "#", code: "https://github.com/nathapatt/foonbot" },
    },
    {
        id: "02",
        category: "Full Stack Developer / DevOps",
        title: "Ticket Management App",
        description: "A RAG-powered ticket management system developed with ITSC Chiang Mai University as the stakeholder, featuring LLM-assisted analysis, dashboards, PDF export, and automated processing.",
        gradient: "from-pink-500 via-rose-500 to-red-500",
        image: ticketImage,
        links: {
            demo: "#", code: "https://github.com/nathapatt/web-management-log", code2: "https://github.com/apwjir/rag_itsc"
        },
    },
    {
        id: "03",
        category: "Full Stack Developer",
        title: "Food Ordering System",
        description: "A session-based food ordering system with real-time table tracking, including a staff management site and a mobile web interface for customer orders.",
        gradient: "from-blue-600 via-indigo-600 to-purple-600",
        image: orderImage,
        mobileImage: orderClientImage,
        links: { demo: "#", code: "https://github.com/nathapatt/food-ordering-deploy" },
    },
    {
        id: "04",
        category: "Frontend Developer",
        title: "Medical Examination System",
        description: "A comprehensive system for managing clinical examinations, patient records, and digital prescriptions.",
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        image: medImage,
        links: { demo: "#", code: "https://github.com/nathapatt/frontMex" },
    },
    {
        id: "05",
        category: "Frontend Developer",
        title: "UPBEAT Game",
        description: "A multiplayer strategy game backend where players program their units using a custom scripting language.",
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        image: upbeatImage,
        links: { demo: "#", code: "https://github.com/NokiaTh131/upbeat", code2: "https://github.com/NokiaTh131/newUPBEAT" },
    },
];

export function Projects() {
    const { isMobile, isTablet } = useResponsive();
    const desktopGalleryClasses = [
        "h-[36%] translate-x-10 translate-y-28 rotate-[-10deg] z-10",
        "h-[52%] translate-y-24 z-20",
        "h-[36%] -translate-x-10 translate-y-28 rotate-[10deg] z-10",
    ];
    const desktopGalleryHoverClasses = [
        "group-hover:translate-x-7 group-hover:translate-y-24 group-hover:rotate-[-14deg] group-focus-within:translate-x-7 group-focus-within:translate-y-24 group-focus-within:rotate-[-14deg]",
        "group-hover:translate-y-20 group-hover:scale-[1.03] group-focus-within:translate-y-20 group-focus-within:scale-[1.03]",
        "group-hover:-translate-x-7 group-hover:translate-y-24 group-hover:rotate-[14deg] group-focus-within:-translate-x-7 group-focus-within:translate-y-24 group-focus-within:rotate-[14deg]",
    ];
    const mobileGalleryClasses = [
        "w-[28%] min-w-[5.5rem] max-w-[6.5rem] translate-x-5 translate-y-2 rotate-[-8deg] z-10",
        "w-[36%] min-w-[6.75rem] max-w-[8rem] -translate-y-2 z-20",
        "w-[28%] min-w-[5.5rem] max-w-[6.5rem] -translate-x-5 translate-y-2 rotate-[8deg] z-10",
    ];

    const renderPhoneFrame = (
        imageSrc: string,
        alt: string,
        className: string,
        hoverClassName = "",
        entranceDelay = 0
    ) => (
        <motion.div
            key={`${alt}-${className}`}
            initial={{ opacity: 0, y: 36, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: entranceDelay, ease: [0.22, 1, 0.36, 1] }}
        >
            <div
                className={`relative w-auto aspect-[9/19.5] bg-slate-950 rounded-[1.15rem] md:rounded-[2rem] border-[3px] md:border-[6px] border-slate-900 shadow-2xl overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className} ${hoverClassName}`}
            >
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-7 md:w-12 h-1.5 md:h-3 bg-black rounded-full z-20" />
                <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
            </div>
        </motion.div>
    );

    return (
        <section id="projects" className="py-24 md:py-32 bg-[#020617] relative overflow-hidden">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.05] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center mb-16 md:mb-24 text-center"
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={fadeUpItem} className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
                        My Work
                    </motion.p>
                    <motion.h2 variants={fadeUpItem} className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                    </motion.h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-4 group"
                        >
                            <div className={`flex ${(isMobile || isTablet) ? 'flex-col gap-3' : 'justify-between items-end'} px-2`}>
                                <div className="space-y-1">
                                    <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">
                                        {project.id} —— {project.category}
                                    </span>
                                    <h3 className={`font-bold text-slate-100 group-hover:text-white transition-colors ${isMobile ? 'text-xl' : 'text-3xl'}`}>
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="flex gap-1.5">
                                    {project.links.code !== "#" && (
                                        <a
                                            href={project.links.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-white uppercase rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    )}
                                    {project.links.code2 && (
                                        <a
                                            href={project.links.code2}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-white uppercase rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Gradient Card */}
                            <div className={`block relative w-full rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10 ${isMobile ? '' : 'aspect-[4/3]'}`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 transition-opacity duration-500 group-hover:opacity-100`} />
                                <div className={`relative z-20 ${isMobile ? 'p-5' : 'p-12 h-full flex flex-col justify-between'}`}>
                                    <p className={`text-white font-medium leading-relaxed drop-shadow-md ${isMobile ? 'text-sm' : 'text-base max-w-[90%]'}`}>
                                        {project.description}
                                    </p>
                                </div>

                                {!isMobile && (
                                    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 pointer-events-none">
                                        {project.image && (
                                            <motion.div className={`absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-950 shadow-2xl transition-transform duration-500 group-hover:scale-105 origin-bottom overflow-hidden ${project.mobileImage ? "w-[75%] rounded-t-lg z-10 left-[45%] translate-x-[-50%]" : "w-[80%] rounded-t-xl z-10"}`}>
                                                <div className="h-5 md:h-6 bg-black flex items-center gap-1.5 px-3 border-b border-slate-700">
                                                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-500" />
                                                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-yellow-500" />
                                                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-500" />
                                                </div>
                                                <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                                            </motion.div>
                                        )}
                                        {project.mobileGallery?.length ? (
                                            <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-center px-6">
                                                {project.mobileGallery.map((imageSrc, imageIndex) =>
                                                    renderPhoneFrame(
                                                        imageSrc,
                                                        `${project.title} screen ${imageIndex + 1}`,
                                                        desktopGalleryClasses[imageIndex] ?? "h-[56%] z-10",
                                                        desktopGalleryHoverClasses[imageIndex] ?? "",
                                                        imageIndex * 0.08,
                                                    )
                                                )}
                                            </div>
                                        ) : project.mobileImage && (
                                            <motion.div className="absolute bottom-0 right-4 md:right-8 h-[60%] w-auto aspect-[9/19] bg-slate-950 rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[6px] border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-4 origin-bottom z-20 overflow-hidden">
                                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 md:w-12 h-2 md:h-3 bg-black rounded-full z-20" />
                                                <img src={project.mobileImage} alt={`${project.title} Mobile`} className="w-full h-full object-cover" />
                                            </motion.div>
                                        )}
                                        {!project.image && !project.mobileImage && !project.mobileGallery?.length && (
                                            <>
                                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-in-out" />
                                                <div className="absolute -top-20 -left-20 w-48 h-48 bg-black/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-in-out" />
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Mobile: Device Frames */}
                            {isMobile && (
                                <>
                                    {project.image && (
                                        <div className="relative w-full flex justify-center items-start mt-4 pt-2">
                                            <motion.div
                                                initial={{ opacity: 0, y: 36, scale: 0.94 }}
                                                whileInView={{ opacity: 1, y: -4, scale: 1 }}
                                                viewport={{ once: true, margin: "-40px" }}
                                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                                className={`bg-slate-950 shadow-2xl rounded-lg overflow-hidden -translate-y-1 ${project.mobileImage ? 'w-[75%] mr-[-15%]' : 'w-[90%]'}`}
                                            >
                                                <div className="h-5 bg-black flex items-center gap-1.5 px-3 border-b border-slate-700">
                                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                                </div>
                                                <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                                            </motion.div>
                                            {project.mobileImage && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 32, scale: 0.92 }}
                                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                    viewport={{ once: true, margin: "-40px" }}
                                                    transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                                    className="relative -translate-y-2 w-[30%] min-w-[5.25rem] max-w-[6.75rem] aspect-[9/19] bg-slate-950 rounded-[1rem] border-[3px] border-slate-900 shadow-2xl overflow-hidden ml-[-10%] z-10"
                                                >
                                                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-black rounded-full z-20" />
                                                    <img src={project.mobileImage} alt={`${project.title} Mobile`} className="w-full h-full object-cover" />
                                                </motion.div>
                                            )}
                                        </div>
                                    )}
                                    {project.mobileGallery?.length && (
                                        <div className="relative flex justify-center items-start mt-4 min-h-[20rem] px-2 pt-2 overflow-hidden">
                                            {project.mobileGallery.map((imageSrc, imageIndex) =>
                                                renderPhoneFrame(
                                                    imageSrc,
                                                    `${project.title} screen ${imageIndex + 1}`,
                                                    mobileGalleryClasses[imageIndex] ?? "w-[34%] z-10",
                                                    "",
                                                    imageIndex * 0.08,
                                                )
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
