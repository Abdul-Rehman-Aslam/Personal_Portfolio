"use client"

import { motion } from "framer-motion"
import {
  Database,
  Code,
  Server,
  Cloud,
  Palette,
  Smartphone,
  Globe,
  Shield,
  Zap
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 90, color: "bg-gray-900" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Redux", level: 85, color: "bg-purple-500" },
      { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "REST APIs", level: 92, color: "bg-blue-500" },
      { name: "GraphQL", level: 80, color: "bg-pink-500" },
      { name: "JWT", level: 85, color: "bg-yellow-500" },
      { name: "Socket.io", level: 82, color: "bg-blue-600" },
    ]
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 90, color: "bg-green-600" },
      { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
      { name: "Redis", level: 80, color: "bg-red-500" },
      { name: "Prisma", level: 88, color: "bg-gray-800" },
      { name: "Mongoose", level: 85, color: "bg-green-500" },
      { name: "SQL", level: 90, color: "bg-blue-500" },
    ]
  },
  {
    title: "Tools & Others",
    icon: Code,
    skills: [
      { name: "Git", level: 95, color: "bg-orange-600" },
      { name: "Docker", level: 80, color: "bg-blue-500" },
      { name: "AWS", level: 75, color: "bg-yellow-500" },
      { name: "Vercel", level: 90, color: "bg-black" },
      { name: "Postman", level: 88, color: "bg-orange-500" },
      { name: "Figma", level: 70, color: "bg-purple-500" },
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl border border-border p-6 hover:shadow-xl transition-shadow shadow-[0_0_0_1px_var(--border)]"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color} relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Additional Expertise</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Responsive Design", icon: Smartphone },
              { name: "SEO Optimization", icon: Globe },
              { name: "Security", icon: Shield },
              { name: "Performance", icon: Zap },
              { name: "Testing", icon: Code },
              { name: "DevOps", icon: Cloud },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-all hover:scale-105"
              >
                <skill.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
