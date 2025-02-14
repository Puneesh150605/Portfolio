"use client"

import { useState } from "react"

const skills = [
  { name: "Quantum React", level: 90, color: "from-emerald-500 to-blue-500" },
  { name: "Time-Bending TypeScript", level: 85, color: "from-blue-500 to-purple-500" },
  { name: "Interdimensional GraphQL", level: 80, color: "from-purple-500 to-pink-500" },
  { name: "Astral Projection CSS", level: 75, color: "from-pink-500 to-red-500" },
  { name: "Telepathic Python", level: 70, color: "from-red-500 to-yellow-500" },
  { name: "Parallel Universe Git", level: 65, color: "from-yellow-500 to-green-500" },
]

const SkillsShowcase = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-amber-50 to-emerald-100 dark:from-slate-900 dark:to-emerald-900 rounded-t-[100px]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center text-emerald-600 dark:text-emerald-400">
          Arcane Abilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-amber-100">{skill.name}</h3>
              <div className="relative h-4 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              {hoveredSkill === skill.name && (
                <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400 transition-opacity duration-300">
                  Mastery: {skill.level}%
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsShowcase

