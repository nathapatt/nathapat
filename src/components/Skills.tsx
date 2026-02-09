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
        icon: <Code2 className="w-6 h-6" />,
        description: "Core languages for building robust and scalable applications.",
        span: "lg:col-span-2",
        skills: [
            { name: "Java", icon: <FaJava className="text-[#ed8b00]" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
            { name: "HTML", icon: <SiHtml5 className="text-[#E34C26]" /> },
            { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> }
        ]
    },
    {
        title: "Cloud & DevOps",
        icon: <Cloud className="w-6 h-6" />,
        description: "Infrastructure, deployment, and cloud services.",
        span: "lg:col-span-1",
        skills: [
            { name: "Huawei Cloud", icon: <SiHuawei className="text-[#C7000B]" /> },
            { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" /> },
            { name: "Azure", icon: <VscAzure className="text-[#0078D4]" /> },
            { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> }
        ]
    },
    {
        title: "Database",
        icon: <Database className="w-6 h-6" />,
        description: "Data storage and management solutions.",
        span: "lg:col-span-1",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
            { name: "Elastic Search", icon: <SiElasticsearch className="text-[#FEC514]" /> },
            { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
            { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> }
        ]
    },
    {
        title: "Frameworks & Tools",
        icon: <Layout className="w-6 h-6" />,
        description: "Modern frameworks and tools for efficient development.",
        span: "lg:col-span-2",
        skills: [
            { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
            { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
            { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
            { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
            { name: "Express", icon: <SiExpress className="text-white" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: "Ant Design", icon: <SiAntdesign className="text-[#1890FF]" /> },
            { name: "Shadcn UI", icon: <SiShadcnui className="text-white" /> }
        ]
    },
    {
        title: "Cybersecurity & Networking",
        icon: <ShieldCheck className="w-6 h-6" />,
        description: "Ensuring security and network integrity.",
        span: "lg:col-span-2",
        skills: [
            { name: "Penetration Testing", icon: <Lock className="text-white/80" /> },
            { name: "Risk Assessments", icon: <FileText className="text-white/80" /> },
            { name: "Digital Forensics", icon: <Search className="text-white/80" /> },
            { name: "Network Configuration", icon: <Network className="text-white/80" /> }
        ]
    },
    {
        title: "Languages",
        icon: <Globe className="w-6 h-6" />,
        description: "Communication and spoken languages.",
        span: "lg:col-span-1",
        skills: [
            { name: "Thai", icon: <span className="font-bold text-xs">TH</span> },
            { name: "English", icon: <span className="font-bold text-xs">EN</span> }
        ]
    }
]

export function Skills() {
    return (
        <section id="skills" className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Gradients - Subtle Apple-like glows */}
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">
                        Skills & Technologies
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        A curated stack of technologies I use to build digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`
                                group relative overflow-hidden
                                bg-white/[0.03] backdrop-blur-xl border border-white/10
                                rounded-3xl p-8
                                hover:bg-white/[0.05] transition-all duration-500 ease-out
                                hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10
                                \${category.span}
                            `}
                        >
                            {/* Inner Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        {/* Clone element to force text-white if needed, though usually className cascade works */}
                                        <div className="text-white">
                                            {category.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white/90 mb-1 group-hover:text-white transition-colors">
                                            {category.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className="
                                                flex items-center gap-2 px-3 py-2 
                                                bg-white/5 border border-white/5 rounded-xl 
                                                text-slate-300 text-sm font-medium
                                                hover:bg-white/10 hover:text-white hover:border-white/20 
                                                transition-all duration-300 cursor-default
                                            "
                                        >
                                            <span className="text-lg opacity-80 group-hover/skill:opacity-100">
                                                {skill.icon}
                                            </span>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
