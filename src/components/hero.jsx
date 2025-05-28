import prologo from "../assets/./IMG_20250408_234500.png"
import { ArrowDown } from "lucide-react"
import { Button } from "./ui/button"

export default function Hero() {

 function scrollUpLittle() {
  window.scrollBy({
    top: 500,
    behavior: "smooth"
  });
}


  return (
    <section id="home" className="py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
           Arul
            {/* <span className="text-yellow-500 ml-2">👋</span> */}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Fullstack Developer</p>
          <p className="mb-8 text-gray-700 dark:text-gray-300">
            Hi, I'm a passionate final-year B.Tech student and aspiring software engineer with strong experience in building modern web applications. Over the past two years, I've been actively developing real-world projects, focusing on clean user interfaces and delivering high-quality, scalable solutions. I'm driven by a love for problem-solving, continuously learning new technologies, and turning ideas into impactful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700" 
            onClick={scrollUpLittle}
            >
              Explore
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
            {/* <Button variant="outline" className="border-gray-300 dark:border-gray-700">
              Scroll Down
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button> */}
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="md:block hidden relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800">
            <img
              src={prologo}
              alt="Jawher Kallel"
              className="object-cover "
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

          </div>
        </div>
      </div>
    </section>
  )
}
