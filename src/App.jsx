import Header from "./components/header"
import Hero from "./components/hero"
import Portfolio from "./components/porfolio"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Qualification from "./components/qualification"
import AboutMe from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"


function App() {

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-4 md:px-6">
        <Hero />
        <Portfolio />
        <Skills />
        {/* <Experience /> */}
        <Qualification />
        <AboutMe />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default App
