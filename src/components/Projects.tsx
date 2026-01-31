import { motion } from "framer-motion";
import { Github } from "lucide-react";
import medImage from "../assets/med.png";
import orderImage from "../assets/order.png";
import orderClientImage from "../assets/order_client.png";
import ticketImage from "../assets/ticket.png";
import upbeatImage from "../assets/upbeat.png";

interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    gradient: string;
    image?: string;
    mobileImage?: string;
    links: {
        demo: string;
        demo: string;
        code: string;
        code2?: string;
    };
    imagePosition?: string;
}

const projects: Project[] = [
    {
        id: "01",
        category: "Full Stack Developer / DevOps",
        title: "Ticket Management App",
        description: "A RAG-powered ticket management system developed with ITSC Chiang Mai University as the stakeholder, featuring LLM-assisted analysis, dashboards, PDF export, and automated processing.",
        gradient: "from-pink-500 via-rose-500 to-red-500",
        image: ticketImage,
        links: { demo: "#", code: "#" },
    },
    {
        id: "02",
        category: "Full Stack Developer",
        title: "Food Ordering System",
        description:
            "A session-based food ordering system with real-time table tracking, including a staff management site and a mobile web interface for customer orders.",
        gradient: "from-blue-600 via-indigo-600 to-purple-600",
        image: orderImage,
        mobileImage: orderClientImage,
        links: { demo: "#", code: "https://github.com/nathapatt/food-ordering-deploy" },
    },
    {
        id: "03",
        category: "Frontend Developer",
        title: "Medical Examination System",
        description:
            "A comprehensive system for managing clinical examinations, patient records, and digital prescriptions.",
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        image: medImage,
        links: { demo: "#", code: "https://github.com/nathapatt/frontMex" },
    },
    {
        id: "04",
        category: "Frontend Developer",
        title: "UPBEAT Game",
        description:
            "A multiplayer strategy game backend where players program their units using a custom scripting language.",
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        image: upbeatImage,
        links: { demo: "#", code: "https://github.com/NokiaTh131/upbeat", code2: "https://github.com/NokiaTh131/newUPBEAT" },
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 bg-[#020617] relative overflow-hidden">
            {/* Background Dots */}
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.05] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="max-w-[600px] text-slate-400 text-lg">
                        Building digital products that solve real problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="flex flex-col gap-4 group"
                        >
                            <div className="flex justify-between items-end px-2">
                                <div className="space-y-1">
                                    <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">
                                        {project.id} —— {project.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-100 group-hover:text-white transition-colors">
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
                                            Code 2
                                        </a>
                                    )}
                                </div>
                            </div>

                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10"
                            >
                                {/* Gradient Background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 transition-opacity duration-500 group-hover:opacity-100`}
                                />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

                                <div className="relative h-full flex flex-col justify-between p-8 md:p-12 z-20">
                                    <p className="text-white text-base font-medium leading-relaxed max-w-[90%] drop-shadow-md">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Images Area */}
                                <div className="absolute bottom-0 left-0 right-0 top-0 z-10 pointer-events-none">
                                    {/* Desktop Image */}
                                    {project.image && (
                                        <motion.div
                                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-950 shadow-2xl transition-transform duration-500 group-hover:scale-105 origin-bottom overflow-hidden ${project.mobileImage ? "w-[75%] rounded-t-lg z-10 left-[45%] translate-x-[-50%]" : "w-[80%] rounded-t-xl z-10"
                                                }`}
                                        >
                                            {/* MacOS Window Header */}
                                            <div className="h-5 md:h-6 bg-black flex items-center gap-1.5 px-3 border-b border-slate-700">
                                                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-500" />
                                                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-yellow-500" />
                                                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-500" />
                                            </div>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-auto object-cover"
                                            />
                                        </motion.div>
                                    )}

                                    {/* Mobile Image (Overlapping) */}
                                    {project.mobileImage && (
                                        <motion.div
                                            className="absolute bottom-0 right-4 md:right-8 h-[60%] w-auto aspect-[9/19] bg-slate-950 rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[6px] border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-4 origin-bottom z-20 overflow-hidden"
                                        >
                                            {/* Dynamic Island */}
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 md:w-12 h-2 md:h-3 bg-black rounded-full z-20" />
                                            <img
                                                src={project.mobileImage}
                                                alt={`${project.title} Mobile`}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    )}

                                    {/* Abstract decorative circles if no images */}
                                    {!project.image && !project.mobileImage && (
                                        <>
                                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-in-out" />
                                            <div className="absolute -top-20 -left-20 w-48 h-48 bg-black/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-in-out" />
                                        </>
                                    )}
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
