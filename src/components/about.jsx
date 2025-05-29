import img from '/my.jpg'
import { Button } from "./ui/button"
import { Download, Users, Award, Clock } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          About Me <span className="text-blue-500">👨‍💻</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">My introduction</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-lg overflow-hidden">
           <img
  src={img}
  alt="About Me"
  className="object-cover"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>

          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="font-semibold">Experience</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Fresher & Freelanzer</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="font-semibold">Clients</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">2</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="font-semibold">Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">5+</p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
           I'm a final-year B.Tech student with a strong passion for web development and user interface design. Over the past few years, I've built several personal and academic projects focused on clean, responsive UI/UX. I enjoy bringing ideas to life through code and continuously seek out new challenges to improve my skills. I'm currently exploring opportunities to grow as a developer and contribute to impactful real-world projects.
          </p>

          <Button className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700" onClick={() => window.open("https://drive.google.com/file/d/1b9JNCcgde23kxvZG9dXSjNh5yWyYTB_P/", "_blank", "noopener,noreferrer")}>
            Download CV <Download className="ml-2 h-4 w-4"  />
          </Button>
        </div>
      </div>
    </section>
  )
}
