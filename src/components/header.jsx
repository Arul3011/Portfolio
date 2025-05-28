

import { useState, useEffect } from "react"

// import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "home")
        }
      })

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-lg font-bold">
              &lt;Arul /&gt;
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                activeSection === "home" ? "text-yellow-500" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#portfolio"
              className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                activeSection === "portfolio" ? "text-yellow-500" : ""
              }`}
            >
              Portfolio
            </a>
            <a
              href="#skills"
              className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                activeSection === "skills" ? "text-yellow-500" : ""
              }`}
            >
              Skills
            </a>
            {/* <a
              href="#experience"
              className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                activeSection === "experience" ? "text-yellow-500" : ""
              }`}
            >
              Experience
            </a> */}
            <a
              href="#about"
              className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                activeSection === "about" ? "text-yellow-500" : ""
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                activeSection === "contact" ? "text-yellow-500" : ""
              }`}
            >
              Contact Me
            </a>
          </nav>
          <div className="flex items-center">
            {/* <ModeToggle /> */}
          </div>
        </div>
      </div>
    </header>
  )
}
