import { Building, Code } from "lucide-react"
import { Button } from "./ui/button"

const experiences = [
  {
    title: "Software Engineer",
    company: "Company Name",
    period: "2022 - Present",
    description: "Led development of key features for enterprise applications using React and Node.js.",
  },
  {
    title: "Software Developer",
    company: "Company Name",
    period: "2020 - 2022",
    description: "Developed and maintained web applications using modern JavaScript frameworks.",
  },
  {
    title: "Software Developer",
    company: "Company Name",
    period: "2018 - 2020",
    description: "Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          Experience <span className="text-blue-500">💼</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">My work history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              {index % 2 === 0 ? (
                <Building className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <Code className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{exp.company}</p>
            <p className="text-gray-500 dark:text-gray-500 text-center text-sm mb-4">{exp.period}</p>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6">{exp.description}</p>
            <div className="text-center">
              <Button variant="outline" size="sm">
                View More{" "}
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
