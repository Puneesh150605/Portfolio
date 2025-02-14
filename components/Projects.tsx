import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with cart functionality and payment integration.",
    image: "/ecommerce.jpg",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with real-time updates.",
    image: "/taskapp.jpg",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "AI-powered Chatbot",
    description: "An intelligent chatbot for customer support using natural language processing.",
    image: "/chatbot.jpg",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    link: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={project.image || "../public/placeholder.svg"}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-600 text-teal-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-teal-500 hover:text-teal-400 font-semibold transition-colors">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

