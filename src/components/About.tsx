import mySelf from "@/assets/myself.jpg"

export function About() {
    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">

                    {/* Image / Visual Column */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-2xl bg-slate-900 border border-white/10 overflow-hidden">
                            {/* Placeholder for Profile Image */}
                            <img
                                src={mySelf}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            About Me
                        </h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                I am a Good boy Fullstack Developer with a keen eye for design and a drive for creating seamless digital experiences.
                            </p>
                            <p>
                                With expertise in modern web technologies like React, Node.js, and TypeScript, I build scalable applications that solve real-world problems. My approach combines technical excellence with user-centric design principles.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee while sketching out new ideas.
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
