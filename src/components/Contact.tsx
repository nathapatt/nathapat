import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-slate-950 border-t border-white/5">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Let's Work Together
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects and opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-blue-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Email Me</p>
                                    <p className="font-medium">contact@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Call Me</p>
                                    <p className="font-medium">+1 (555) 000-0000</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-purple-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Location</p>
                                    <p className="font-medium">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Name</label>
                                    <Input placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-blue-500 text-white placeholder:text-slate-500" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email</label>
                                    <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 focus:border-blue-500 text-white placeholder:text-slate-500" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Message</label>
                                <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-white/5 border-white/10 focus:border-blue-500 text-white placeholder:text-slate-500" />
                            </div>
                            <Button className="w-full bg-white/5 hover:bg-blue-500/10 text-white font-medium py-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-blue-500/30 cursor-pointer backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] active:scale-95">
                                Send Message
                            </Button>
                        </form>
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} DevPortfolio. Built with React, Tailwind & Shadcn UI.</p>
                </div>
            </div>
        </section>
    )
}
