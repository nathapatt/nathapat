import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="pt-20 pb-0 bg-slate-950 border-t border-white/5 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container max-w-5xl mx-auto px-4 md:px-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white relative w-fit">
                                Get In Touch
                                <span className="absolute left-0 -bottom-4 w-12 h-1 bg-white rounded-full"></span>
                            </h2>
                            <p className="text-slate-300 text-lg mt-8 leading-relaxed">
                                I’m open to new opportunities and interesting projects.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>
                        </div>

                        {/* Email Block */}
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:nathapat.mind@gmail.com'}>
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                                <Mail className="w-5 h-5 text-white/80" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-0.5">Email</p>
                                <p className="text-white font-medium hover:text-blue-400 transition-colors">nathapat.mind@gmail.com</p>
                            </div>
                        </div>

                        {/* Socials Block */}
                        <div>
                            <h3 className="text-white font-medium mb-4">Connect with me</h3>
                            <div className="flex items-center gap-3">
                                <SocialLink
                                    href="https://github.com/nathapatt"
                                    icon={<Github className="w-5 h-5" />}
                                    label="GitHub"
                                />
                                <SocialLink
                                    href="https://www.linkedin.com/in/nathapat/"
                                    icon={<Linkedin className="w-5 h-5" />}
                                    label="LinkedIn"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Card */}
                    <div className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.05] transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/10">
                        {/* Inner Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">Let's work together</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Open to new projects and collaborations.
                                Let’s build impactful solutions together.
                            </p>

                            <a
                                href="mailto:nathapat.mind@gmail.com"
                                className="inline-flex items-center justify-center w-full px-6 py-4 text-white font-semibold bg-[oklch(65%_0.14_254.6)] hover:opacity-90 rounded-xl transition-all duration-200 shadow-[0_0_15px_oklch(65%_0.14_254.6/0.2)] hover:shadow-[0_0_25px_oklch(65%_0.14_254.6/0.4)] active:scale-[0.98]"
                            >
                                Send me an email
                            </a>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-8 pt-8 pb-8 border-t border-white/5 text-slate-500 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Nathapat. Built with Love.</p>
                </div>
            </div>
        </section>
    )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200"
            aria-label={label}
        >
            {icon}
        </a>
    )
}
