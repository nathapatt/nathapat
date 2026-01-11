

export function About() {
    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-3xl mx-auto">



                    {/* Content Column */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            About Me
                        </h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                I am a new grad student in the <span className="text-slate-200 font-medium">Computer Engineering Department</span> at <span className="text-slate-200 font-medium">ChiangMai University</span>, ChiangMai, Thailand.
                            </p>
                            <p>
                                I am passionate about learning and exploring new technologies.
                            </p>
                            <p>
                                Bridging the gap between <span className="text-slate-200 font-medium">robust software development</span> and <span className="text-slate-200 font-medium">cybersecurity</span> to deliver secure, intelligent, and scalable applications.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                            <div>
                                <h4 className="text-2xl font-bold text-white">5+</h4>
                                <p className="text-sm text-slate-500">Years Exp.</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">50+</h4>
                                <p className="text-sm text-slate-500">Projects</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">20+</h4>
                                <p className="text-sm text-slate-500">Clients</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
