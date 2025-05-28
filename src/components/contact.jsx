

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    
    // alert("Message sent! (This is a demo)")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          Get In Touch <span className="text-yellow-500">👋</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Contact me for any questions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Talk to Me</h3>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                <h4 className="font-medium">Email</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">yarul8406@gmail.com</p>
              <a
                href="mailto:yarul8406@gmail.com"
                className="text-sm text-gray-900 dark:text-gray-100 hover:underline flex items-center"
              >
                Write me{" "}
                <svg
                  className="ml-1 h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                <h4 className="font-medium">Phone</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">9344569319</p>
              <a
                href="tel:+919344569319"
                className="text-sm text-gray-900 dark:text-gray-100 hover:underline flex items-center"
              >
                Call me{" "}
                <svg
                  className="ml-1 h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                <h4 className="font-medium">Location</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">New York, USA</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-900 dark:text-gray-100 hover:underline flex items-center"
              >
                View on map{" "}
                <svg
                  className="ml-1 h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Write Me Your Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Insert Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Insert Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Write a message to get started"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              />
            </div>
            <Button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
