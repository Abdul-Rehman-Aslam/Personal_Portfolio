"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Square 1 Credit Suite - Suntell",
    description: "Commercial and ag loan origination solution for financial institutions. Worked on the Electronic Tax Return Reader feature that imports borrower financial data quickly and accurately from tax forms (1040, 1120, 1120-S, 1065) with supporting schedules. The system streamlines credit analysis, supports sound lending decisions, and enhances compliance through integrated workflows.",
    image: "/images/project-default.svg",
    technologies: ["TypeScript", "React", "Node.js", "Document Processing", "OCR", "Financial Analysis"],
    githubUrl: "#",
    liveUrl: "https://www.suntell.com/features-benefits/",
    featured: true,
    category: "Enterprise Software",
    date: "2024",
    team: "Team Project"
  },
  {
    id: 2,
    title: "G.O.T. Systems",
    description: "Innovative technology solutions for Independent Grocers, Meat Markets, and similar retailers. Complete hardware and software solutions including Ordering Systems, Shrink Tracking, Markdown Management, Electronic Grind Log (USDA compliance), Ordify™, Front End Focus, and Product Mix Optimization. Pay-as-you-go package without binding contracts.",
    image: "/images/project-default.svg",
    technologies: ["Full Stack", "Hardware Integration", "Retail Systems", "Database Management", "API Integration"],
    githubUrl: "#",
    liveUrl: "https://gotsystems.net/",
    featured: true,
    category: "Enterprise Software",
    date: "2024",
    team: "Team Project"
  },
  {
    id: 3,
    title: "Reploy Life",
    description: "Life planning and career transition platform helping individuals navigate the next phase of their adult life with energy, passion, and purpose. Provides programs for Mid-Career Professionals and Pre-Retirees, focusing on aligning 'What We Do' with 'Who We Are' to create an integrated life approach.",
    image: "/images/project-default.svg",
    technologies: ["Web Application", "User Experience", "Content Management", "Career Planning Tools"],
    githubUrl: "#",
    liveUrl: "https://reploylife.com/",
    featured: true,
    category: "Web Application",
    date: "2024",
    team: "Team Project"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    image: "/images/project-default.svg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/abdulrehman/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    category: "Full Stack",
    date: "2024",
    team: "Solo Project"
  },
  {
    id: 5,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/project-default.svg",
    technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/abdulrehman/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
    category: "Full Stack",
    date: "2024",
    team: "Team of 3"
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/images/project-default.svg",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/abdulrehman/weather-dashboard",
    liveUrl: "https://weather-dashboard.vercel.app",
    featured: false,
    category: "Frontend",
    date: "2023",
    team: "Solo Project"
  },
  {
    id: 7,
    title: "Blog CMS",
    description: "A content management system for blogs with markdown support, SEO optimization, and admin panel for content management.",
    image: "/images/project-default.svg",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
    githubUrl: "https://github.com/abdulrehman/blog-cms",
    liveUrl: "https://blog-cms-demo.vercel.app",
    featured: false,
    category: "Full Stack",
    date: "2023",
    team: "Solo Project"
  },
  {
    id: 8,
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.",
    image: "/images/project-default.svg",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "AWS"],
    githubUrl: "https://github.com/abdulrehman/social-analytics",
    liveUrl: "https://social-analytics.vercel.app",
    featured: true,
    category: "Full Stack",
    date: "2024",
    team: "Team of 4"
  },
  {
    id: 9,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations, dark mode, and contact form integration.",
    image: "/images/project-default.svg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/abdulrehman/portfolio",
    liveUrl: "https://abdulrehman.dev",
    featured: false,
    category: "Frontend",
    date: "2024",
    team: "Solo Project"
  }
]

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-secondary rounded-xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image src={project.image} alt={project.title} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {project.team}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-border text-foreground rounded-lg hover:bg-accent transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.date}</span>
                  </div>
                  
                  <h4 className="font-bold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 bg-primary text-primary-foreground text-sm rounded hover:bg-primary/90 transition-colors"
                    >
                      Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 border border-border text-foreground text-sm rounded hover:bg-accent transition-colors"
                    >
                      Code
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Interested in working together? Let's discuss your project!
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
