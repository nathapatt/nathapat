import { Award, FileBadge, Eye } from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem, fadeInFromRight, viewportOnce } from "@/lib/animations";

export function About() {
    const { isDesktop } = useResponsive();

    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Bio & Resume */}
                    <motion.div
                        className={`space-y-8 ${!isDesktop ? 'mx-5' : ''}`}
                        variants={fadeUpContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {/* Section Label */}
                        <motion.p variants={fadeUpItem} className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                            About Me
                        </motion.p>

                        {/* Header */}
                        <motion.div variants={fadeUpItem}>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Who I Am
                            </h2>
                            <div className="w-20 h-1 bg-white rounded-full"></div>
                        </motion.div>

                        {/* Bio Section */}
                        <div className="space-y-6 text-slate-200 text-base leading-relaxed">
                            <motion.p variants={fadeUpItem}>
                                I am a <span className="text-white font-bold">Computer Engineering student</span> at Chiang Mai University, graduating in 2026. My academic journey and participation in collaborative Software Engineering projects have built my strong foundation in teamwork and the modern development lifecycle.
                            </motion.p>
                            <motion.p variants={fadeUpItem}>
                                I possess a versatile background in <span className="text-white font-bold">Software Development</span>, with experience managing applications from initial architecture to Cloud deployment. My technical expertise includes containerization and leveraging cloud infrastructure to host and manage scalable, high-performance services.
                            </motion.p>
                            <motion.p variants={fadeUpItem}>
                                In an era where AI and Vibe Coding are rapidly transforming software development, I chose to specialize in the <span className="text-white font-bold">Cybersecurity track</span> to build a deep, structured foundation in digital security.
                            </motion.p>
                            <motion.p variants={fadeUpItem}>
                                I am deeply passionate about exploring <span className="text-white font-bold">New Tech Stacks</span> and continuously <span className="text-white font-bold">Expanding my Skill Set</span>. I thrive on adapting to <span className="text-white font-bold">Emerging Technologies</span> and am always ready to apply <span className="text-white font-bold">New Knowledge</span> to tackle diverse engineering challenges.
                            </motion.p>
                        </div>

                        {/* Resume Button */}
                        <motion.div variants={fadeUpItem} className={`pt-4 ${!isDesktop ? 'flex justify-center' : ''}`}>
                            <a
                                href="https://drive.google.com/file/d/1H2dUk1qmvqOYr7C-H_T0oGJLaGwojDTS/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[oklch(65%_0.14_254.6)] hover:opacity-90 text-white font-medium transition-all duration-200 shadow-[0_0_15px_oklch(65%_0.14_254.6/0.2)] hover:shadow-[0_0_25px_oklch(65%_0.14_254.6/0.4)]"
                            >
                                <Eye className="w-5 h-5" />
                                My Resume
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Cards slide in from right */}
                    <motion.div
                        className="space-y-8 lg:mt-16"
                        variants={fadeUpContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {/* Achievement Card */}
                        <motion.div variants={fadeInFromRight} className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        <Award className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors">Achievement</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">Top 50 : AIS JUMP Thailand Hackathon 2025</h4>
                                        <p className="text-slate-200 text-base leading-relaxed">
                                            Designed the solution architecture for <span className="text-slate-200 font-normal">'Pun Plook'</span>, an IoT-enabled smart pot aimed at improving accessibility for elderly users within the AIS ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Certifications Card */}
                        <motion.div variants={fadeInFromRight} className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        <FileBadge className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors">Certifications</h3>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Huawei Cloud HCCDA-Tech Essentials",
                                        "Cisco Networking Academy – Linux Essentials",
                                        "Cisco Networking Academy - NDG Linux Unhatched",
                                        "Cisco Networking Academy – Introduction to Cybersecurity"
                                    ].map((cert, index) => (
                                        <li key={index} className="flex items-start gap-3 text-slate-300 text-base">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/80 mt-2 shrink-0 group-hover:bg-blue-400 transition-colors" />
                                            <span className="group-hover:text-white transition-colors text-slate-200">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
