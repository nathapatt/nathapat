import {
    Layout,
    ShieldCheck,
    Globe,
    Database,
    Cloud,
    Code2,
    Lock,
    Search,
    Network,
    FileText
} from "lucide-react"
import {
    SiExpress,
    SiTailwindcss,
    SiAntdesign,
    SiShadcnui,
    SiTypescript,
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiSpringboot,
    SiFastapi,
    SiReact,
    SiNextdotjs,
    SiNestjs,
    SiNodedotjs,

    SiHuawei,
    SiGooglecloud,
    SiDocker,
    SiKubernetes,
    SiMongodb,
    SiPostgresql,
    SiElasticsearch,
    SiMysql,
    SiRedis
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { VscAzure } from "react-icons/vsc"


const skillCategories = [
    {
        title: "Programming Languages",
        icon: <Code2 className="w-6 h-6 text-white" />,
        description: "Core languages for building robust and scalable applications.",
        skills: [
            { name: "Java", icon: <FaJava className="text-red-500" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
            { name: "Python", icon: <SiPython className="text-yellow-500" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <SiCss3 className="text-blue-500" /> }
        ]
    },
    {
        title: "Frameworks & Tools",
        icon: <Layout className="w-6 h-6 text-white" />,
        description: "Modern frameworks and tools for efficient development.",
        skills: [
            { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
            { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
            { name: "React", icon: <SiReact className="text-blue-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
            { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
            { name: "Express", icon: <SiExpress className="text-gray-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "Ant Design", icon: <SiAntdesign className="text-blue-500" /> },
            { name: "Shadcn UI", icon: <SiShadcnui className="text-white" /> }
        ]
    },
    {
        title: "Cloud & DevOps",
        icon: <Cloud className="w-6 h-6 text-white" />,
        description: "Infrastructure, deployment, and cloud services.",
        skills: [
            { name: "Huawei Cloud", icon: <SiHuawei className="text-red-600" /> },
            { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500" /> },
            { name: "Azure", icon: <VscAzure className="text-blue-400" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> }
        ]
    },
    {
        title: "Database",
        icon: <Database className="w-6 h-6 text-white" />,
        description: "Data storage and management solutions.",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
            { name: "Elastic Search", icon: <SiElasticsearch className="text-yellow-400" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
            { name: "Redis", icon: <SiRedis className="text-red-500" /> }
        ]
    },
    {
        title: "Cybersecurity & Networking",
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        description: "Ensuring security and network integrity.",
        skills: [
            { name: "Penetration Testing", icon: <Lock className="text-red-400" /> },
            { name: "Risk Assessments", icon: <FileText className="text-yellow-400" /> },
            { name: "Digital Forensics", icon: <Search className="text-blue-400" /> },
            { name: "Network Configuration", icon: <Network className="text-green-400" /> }
        ]
    },
    {
        title: "Languages",
        icon: <Globe className="w-6 h-6 text-white" />,
        description: "Communication and spoken languages.",
        skills: [
            { name: "Thai", icon: <span className="font-bold text-xs">TH</span> },
            { name: "English", icon: <span className="font-bold text-xs">EN</span> }
        ]
    }
]

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                        Skills & Technologies
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            <p className="text-slate-400 mb-6 h-12 text-sm leading-relaxed">
                                {category.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-300 text-sm hover:bg-slate-700/50 hover:text-white hover:border-blue-500/30 transition-all cursor-default"
                                    >
                                        <span className="text-lg">
                                            {skill.icon}
                                        </span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
