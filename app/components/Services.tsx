"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Custom websites tailored to your needs, built with the latest technologies for optimal performance.",
    icon: <Code className="w-12 h-12 text-blue-400" />,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and visually appealing interfaces that enhance user experience and engagement.",
    icon: <Palette className="w-12 h-12 text-green-400" />,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: <Smartphone className="w-12 h-12 text-yellow-400" />,
  },
  {
    title: "SEO Optimization",
    description: "Improve your online visibility and search engine rankings with effective SEO strategies.",
    icon: <Globe className="w-12 h-12 text-purple-400" />,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Services Offered
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

