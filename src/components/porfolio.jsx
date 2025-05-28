
import wast from "../assets/waste.jpeg"
import blog from "../assets/blog.jpeg"
import country from "../assets/country.jpeg"
import chat from "../assets/chat.jpeg"
import counsling from "../assets/counsling.jpeg"


import { useState } from "react"
import { Button } from "./ui/button"
import { Laptop, Code, Layout, Database, Server, Search } from "lucide-react"

const categories = [
  { id: "all", label: "All", icon: <Laptop className="h-4 w-4" /> },
  { id: "web", label: "Web", icon: <Code className="h-4 w-4" /> },
  { id: "design", label: "Design", icon: <Layout className="h-4 w-4" /> },
  { id: "api", label: "APIs", icon: <Database className="h-4 w-4" /> },
  {
    id: "contributions",
    label: "Contributions",
    icon: <Server className="h-4 w-4" />,
  },
  { id: "research", label: "Research", icon: <Search className="h-4 w-4" /> },
]

const projects = [
 {
  id:1,
  title : "Waste Management App",
  category:"web",
  image:wast,
  github:"https://github.com/Arul3011/wast-management-app",
  demo:"https://wast-management-app.vercel.app"

 },
 {
  id:2,
  title : "Blog Application",
  category:"web",
  image:blog,
  github:"https://github.com/Arul3011/blogapp",
  demo:"https://blogapp-pi-seven.vercel.app/"

 },
 {
   id:3,
   title : "Chat Room Application",
   category:"web",
   image:chat,
   github:"https://github.com/Arul3011/chat-room",
   demo: "https://chat-room-sand-xi.vercel.app"
   
  },
  {
    id:4,
    title : "Counseling Predictor Application",
    category:"web",
    image:counsling,
    github:"https://github.com/Arul3011/counselingpredictor",
    demo:"https://counselingpredictor.vercel.app/"
  
   },
 {
  id:5,
  title : "Country Details Application",
  category:"web",
  image:country,
  github:"https://github.com/Arul3011/countriesDetails",
  demo:"https://countrydetailss.netlify.app/"

 },

]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  return (
    <section id="portfolio" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          Projects <span className="text-blue-500">📊</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">My recent work</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`flex items-center gap-2 ${
              activeCategory === category.id ? "bg-gray-900 text-white dark:bg-gray-800" : "bg-transparent"
            }`}
            onClick={() => {
              setActiveCategory(category.id)
              setCurrentPage(1)
            }}
          >
            {category.icon}
            {category.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
          >
            <div className="relative h-48">
            <img
              src={project.image }
              alt={project.title}
              className="object-cover"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <div className="flex justify-between mt-4">
                <a
                  target="_blank"
                  href={project.github}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
                >
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Github
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
                >
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="w-8 h-8 p-0"
            >
              <span className="sr-only">First page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            </Button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 p-0 ${currentPage === index + 1 ? "bg-gray-900 text-white dark:bg-gray-800" : ""}`}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 p-0"
            >
              <span className="sr-only">Last page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
