import { Award, FileBadge, Eye } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Bio & Resume */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                About Me
                            </h2>
                            <div className="w-20 h-1 bg-white rounded-full"></div>
                        </div>

                        {/* Bio Section */}
                        <div className="space-y-6 text-slate-300 text-base leading-relaxed">
                            <p>
                                I am a <span className="text-white font-bold">Computer Engineering student</span> at Chiang Mai University, graduating in 2026. My academic journey and participation in collaborative Software Engineering projects have built my strong foundation in teamwork and the modern development lifecycle.
                            </p>
                            <p>
                                I possess a versatile background in <span className="text-white font-bold">Software Development</span>, with experience managing applications from initial architecture to Cloud deployment. My technical expertise includes containerization and leveraging cloud infrastructure to host and manage scalable, high-performance services.
                            </p>
                            <p>
                                In an era where AI and Vibe Coding are rapidly transforming software development, I chose to specialize in the <span className="text-white font-bold">Cybersecurity track</span> to build a deep, structured foundation in digital security. This education equips me with the essential skills to identify vulnerabilities and ensure that the applications I build are not only innovative but inherently secure.
                            </p>
                            <p>
                                While I enjoy working across the stack, my core passion lies in <span className="text-white font-bold">Frontend Engineering</span>. I specialize in building pixel-perfect, responsive interfaces that provide seamless user experiences across all devices.
                            </p>
                        </div>

                        {/* Resume Button */}
                        <div className="pt-4">
                            <a
                                href="https://drive.google.com/file/d/1uY9gz-sF48VNW7KteClBU_p6908lPDw2/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[oklch(65%_0.14_254.6)] hover:opacity-90 text-white font-medium transition-all duration-200 shadow-[0_0_15px_oklch(65%_0.14_254.6/0.2)] hover:shadow-[0_0_25px_oklch(65%_0.14_254.6/0.4)]"
                            >
                                <Eye className="w-5 h-5" />
                                My Resume
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Qualifications (Stacked) */}
                    <div className="space-y-8 lg:mt-16">
                        {/* Achievements */}
                        <div className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10">
                            {/* Inner Glow Effect */}
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
                                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                                            Designed the solution architecture for <span className="text-slate-200 font-normal">'Pun Plook'</span>, an IoT-enabled smart pot aimed at improving accessibility for elderly users within the AIS ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/10">
                            {/* Inner Glow Effect */}
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
                                        <li key={index} className="flex items-start gap-3 text-slate-400 font-light text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/80 mt-2 shrink-0 group-hover:bg-blue-400 transition-colors" />
                                            <span className="group-hover:text-slate-300 transition-colors">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
