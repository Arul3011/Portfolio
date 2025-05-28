import {
  Code,
  Database,
  FileCode,
  Layout,
  Server,
  Terminal,
  Palette,
  GitBranch,
  Container,
  Cpu,
  Globe,
  Boxes,
  Braces,
  FileText,
  Settings,
  Github
} from "lucide-react"

const frontendSkills = [
  { name: "HTML", icon: <FileCode className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "CSS", icon: <Layout className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Tailwind CSS", icon: <Layout className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "JavaScript", icon: <Code className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "React.js", icon: <Code className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Next.js", icon: <Code className="h-4 w-4" /> ,state:"Basic"},
]

const languagesAndTools = [
  { name: "Java", icon: <Cpu className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Node.js", icon: <Server className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Express.js", icon: <Server className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Python", icon: <Terminal className="h-4 w-4" /> ,state:"Basic"},
  { name: "MongoDB", icon: <Database className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Docker", icon: <Container className="h-4 w-4" /> ,state:"Basic"},
  { name: "Docker Compose", icon: <Boxes className="h-4 w-4" /> ,state:"Basic"},
  { name: "Nginx", icon: <Globe className="h-4 w-4" /> ,state:"Basic"},
  { name: "Prisma ORM", icon: <Braces className="h-4 w-4" /> ,state:"Basic"},
  { name: "Redux", icon: <Settings className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Git", icon: <GitBranch className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Linux / Ubuntu", icon: <Cpu className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Github", icon: <Github className="h-4 w-4" /> ,state:"Intermediate"},
  { name: "Github CI/CD", icon: <Github className="h-4 w-4" /> ,state:"Basic"},


]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          Skills <span className="text-blue-500">🔧</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">My technical level</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-600 dark:text-gray-400 mr-3">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{skill.state}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Languages & Tools</h3>
            <div className="space-y-6">
              {languagesAndTools.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-600 dark:text-gray-400 mr-3">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{skill.state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
