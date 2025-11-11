"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp, Coffee, Code, Clock, Award } from "lucide-react"

const funFacts = [
  { icon: Coffee, text: "Coffee consumed this year", value: "1,247 cups" },
  { icon: Code, text: "Lines of code written", value: "50,000+" },
  { icon: Clock, text: "Hours coding this month", value: "180 hours" },
  { icon: Award, text: "Projects completed", value: "25+" },
]

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl"></div>
              <div className="relative bg-secondary rounded-2xl p-4 border border-border">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img src="/images/profile.svg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Hello, I'm Abdul Rehman</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate MERN Stack Developer with over 3 years of experience 
                  in building modern, scalable, and responsive web applications. I love 
                  turning complex ideas into elegant digital experiences that make a 
                  real impact.
                </p>
                
                {!isExpanded && (
                  <p>
                    My journey in web development started with a curiosity about how 
                    websites work, and it has evolved into a deep passion for creating 
                    solutions that solve real-world problems.
                  </p>
                )}

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <p>
                      I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) 
                      and have extensive experience with modern technologies like Next.js, 
                      TypeScript, and Tailwind CSS. I'm also proficient in database design, 
                      API development, and cloud deployment.
                    </p>
                    <p>
                      Throughout my career, I've worked on various projects ranging from 
                      e-commerce platforms to real-time applications. I believe in writing 
                      clean, maintainable code and following best practices to ensure 
                      scalability and performance.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new technologies, 
                      contributing to open-source projects, or sharing knowledge with the 
                      developer community through blog posts and tutorials.
                    </p>
                  </motion.div>
                )}

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  {isExpanded ? (
                    <>
                      Read Less <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-secondary rounded-lg border border-border shadow-[0_0_0_1px_var(--border)]">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg border border-border shadow-[0_0_0_1px_var(--border)]">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Fun Facts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-secondary rounded-lg border border-border hover:shadow-xl transition-shadow shadow-[0_0_0_1px_var(--border)]"
              >
                <fact.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{fact.value}</div>
                <div className="text-sm text-muted-foreground">{fact.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
