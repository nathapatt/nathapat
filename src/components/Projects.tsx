import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart functionality, payment processing, and user authentication.",
        tags: ["Next.js", "Stripe", "Prisma", "TypeScript"],
        links: { demo: "#", code: "#" }
    },
    {
        title: "Task Management App",
        description: "Real-time collaboration tool for teams to manage tasks, sprints, and workflows efficiently.",
        tags: ["React", "Firebase", "Tailwind", "Zustand"],
        links: { demo: "#", code: "#" }
    },
    {
        title: "AI Content Generator",
        description: "SaaS application that uses AI to generate blog posts, social media captions, and more.",
        tags: ["OpenAI API", "Node.js", "React Query", "Postgres"],
        links: { demo: "#", code: "#" }
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Featured Projects
                    </h2>
                    <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Here are a few projects that showcase my passion for building clean, functional code.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="bg-slate-900 border-white/5 overflow-hidden group hover:border-white/10 transition-all duration-300">
                            <div className="h-48 bg-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                                {/* Placeholder for Project Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-medium">
                                    Project Preview
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-white group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-slate-400">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
                                    <Github className="w-4 h-4 mr-2" /> Code
                                </Button>
                                <Button size="sm" className="bg-white text-slate-950 hover:bg-slate-200">
                                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
