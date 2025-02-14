const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 75 },
  { name: "GraphQL", level: 70 },
  { name: "Docker", level: 65 },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-teal-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

