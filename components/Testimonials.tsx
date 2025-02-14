"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    testimonial:
      "Working with this developer was an absolute pleasure. They delivered a high-quality product on time and exceeded our expectations.",
  },
  {
    name: "Jane Smith",
    company: "Creative Solutions LLC",
    testimonial:
      "The attention to detail and creative problem-solving skills of this developer are unmatched. They brought our vision to life perfectly.",
  },
  {
    name: "Mike Johnson",
    company: "Global Enterprises",
    testimonial:
      "We were impressed by the developer's ability to handle complex requirements and deliver a user-friendly solution. Highly recommended!",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <p className="text-lg mb-4 italic">"{testimonials[currentIndex].testimonial}"</p>
            <p className="font-semibold">{testimonials[currentIndex].name}</p>
            <p className="text-gray-400">{testimonials[currentIndex].company}</p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-300"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-300"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

