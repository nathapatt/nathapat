import { Badge } from "@/components/ui/badge"

const skills = {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Framer Motion"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "GraphQL"],
    "DevOps & Tools": ["Docker", "AWS", "Git", "CI/CD", "Jest", "Linux"]
}

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-slate-950 relative">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Tech Stack
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        I work with a modern suite of tools and technologies to build robust, scalable applications.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-semibold text-white mb-6">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors px-3 py-1">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
