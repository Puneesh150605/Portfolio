"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-3 px-4 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

