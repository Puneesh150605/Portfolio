"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive online store with cart functionality and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "An interactive dashboard for managing multiple social media accounts.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
]

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

