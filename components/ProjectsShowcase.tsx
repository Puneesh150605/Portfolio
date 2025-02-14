"use client"

import { useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "QuantumQuill",
    category: "AI Writing Assistant",
    description: "An AI-powered writing tool that helps authors craft stories across infinite parallel universes.",
    image: "/quantumquill.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "EchoEats",
    category: "Food Delivery Revolution",
    description: "A time-bending food delivery app that lets you taste dishes from any era in history.",
    image: "/echoeats.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "DreamScape",
    category: "Virtual Reality Experience",
    description: "A VR platform that transforms your dreams into explorable 3D worlds.",
    image: "/dreamscape.jpg",
    link: "#",
  },
]

const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-amber-50 to-emerald-100 dark:from-slate-900 dark:to-emerald-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center text-emerald-600 dark:text-emerald-400">Digital Marvels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 opacity-75 flex items-center justify-center">
                    <a
                      href={project.link}
                      className="bg-white text-emerald-600 font-bold py-2 px-4 rounded-full hover:bg-opacity-75 transition-all duration-300 transform hover:scale-110"
                    >
                      Explore Project
                    </a>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-slate-800 dark:text-amber-100">{project.title}</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-4">{project.category}</p>
                <p className="text-slate-700 dark:text-amber-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase

