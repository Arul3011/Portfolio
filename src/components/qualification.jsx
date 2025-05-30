
import { useState } from "react"
import { GraduationCap, Briefcase } from "lucide-react"
import { Button } from "./ui/button"

const educationData = [
  {
    degree: "Diploma",
    field: "Diploma in computer science engineering",
    institution: "christ the king polytechnic college",
    location: "Coimbatore, India",
    period: "2020 - 2023",
  },
  {
    degree: "B.Tech",
    field: "Computer science and business systems",
    institution: "kit kalaignar karunanidhi institute",
    location: "Coimbatore, India",
    period: "2023 - 2026",
  },
]

const workData = [
  {
    position: "Fresher",
    company: "",
    location: "",
    period: "",
  },
  // {
  //   position: "Web Developer",
  //   company: "Company Name",
  //   location: "City, Country",
  //   period: "2020 - 2022",
  // },
  // {
  //   position: "Junior Developer",
  //   company: "Company Name",
  //   location: "City, Country",
  //   period: "2018 - 2020",
  // },
]

export default function Qualification() {
  const [activeTab, setActiveTab] = useState("education")

  return (
    <section id="qualification" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          Qualification <span className="text-blue-500">🎓</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">My personal journey</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
          <Button
            variant={activeTab === "education" ? "default" : "outline"}
            className={`flex items-center ${
              activeTab === "education" ? "bg-gray-900 text-white dark:bg-gray-800" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <GraduationCap className="mr-2 h-4 w-4" />
            Education
          </Button>
          <Button
            variant={activeTab === "work" ? "default" : "outline"}
            className={`flex items-center ${activeTab === "work" ? "bg-gray-900 text-white dark:bg-gray-800" : ""}`}
            onClick={() => setActiveTab("work")}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Work
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {activeTab === "education" && (
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="relative pl-6">
                <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-100"></div>
                {index !== educationData.length - 1 && (
                  <div className="absolute left-[7px] top-5 h-full w-[2px] bg-gray-300 dark:bg-gray-700"></div>
                )}
                <div className="mb-1">
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.field}</p>
                </div>
                <div className="mb-1">
                  <p className="text-gray-700 dark:text-gray-300">{item.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">{item.period}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "work" && (
          <div className="space-y-8">
            {workData.map((item, index) => (
              <div key={index} className="relative pl-6">
                <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-100"></div>
                {index !== workData.length - 1 && (
                  <div className="absolute left-[7px] top-5 h-full w-[2px] bg-gray-300 dark:bg-gray-700"></div>
                )}
                <div className="mb-1">
                  <h3 className="text-lg font-semibold">{item.position}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                </div>
                <div className="mb-1">
                  <p className="text-gray-700 dark:text-gray-300">{item.location}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">{item.period}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
