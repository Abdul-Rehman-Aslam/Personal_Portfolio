import { Metadata } from "next"
import Image from "next/image"
import { Calendar, Award, ExternalLink, Download } from "lucide-react"
import { formatDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Achievements - Abdul Rehman",
  description: "Certifications, awards, and recognitions earned throughout my career as a MERN Stack Developer.",
}

// Mock achievements data - in a real app, this would come from your database
const achievements = [
  {
    id: "1",
    title: "AWS Certified Developer - Associate",
    description: "Validated expertise in developing and maintaining applications on the AWS platform.",
    image: "/images/achievement.svg",
    certificate: "/certificates/aws-developer.pdf",
    date: new Date("2024-01-15"),
    category: "Certification",
    issuer: "Amazon Web Services"
  },
  {
    id: "2",
    title: "React Developer Certification",
    description: "Comprehensive certification covering React fundamentals, hooks, state management, and best practices.",
    image: "/images/achievement.svg",
    certificate: "/certificates/react-certification.pdf",
    date: new Date("2023-12-20"),
    category: "Certification",
    issuer: "Meta"
  },
  {
    id: "3",
    title: "Best Project Award",
    description: "Recognized for outstanding contribution to the e-commerce platform project that increased user engagement by 40%.",
    image: "/images/achievement.svg",
    certificate: null,
    date: new Date("2023-11-10"),
    category: "Award",
    issuer: "TechCorp Inc."
  },
  {
    id: "4",
    title: "MongoDB University Certificate",
    description: "Completed MongoDB for Developers course covering database design, querying, and optimization techniques.",
    image: "/images/achievement.svg",
    certificate: "/certificates/mongodb-certificate.pdf",
    date: new Date("2023-10-05"),
    category: "Certification",
    issuer: "MongoDB University"
  },
  {
    id: "5",
    title: "Hackathon Winner",
    description: "First place in the 48-hour hackathon for developing an innovative task management solution using MERN stack.",
    image: "/images/achievement.svg",
    certificate: null,
    date: new Date("2023-09-15"),
    category: "Award",
    issuer: "DevHack 2023"
  },
  {
    id: "6",
    title: "Node.js Certification",
    description: "Professional certification in Node.js development, covering server-side JavaScript, APIs, and microservices.",
    image: "/images/achievement.svg",
    certificate: "/certificates/nodejs-certification.pdf",
    date: new Date("2023-08-20"),
    category: "Certification",
    issuer: "OpenJS Foundation"
  }
]

const categories = ["All", "Certification", "Award", "Recognition"]

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Achievements</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certifications, awards, and recognitions that showcase my commitment to continuous learning and excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-background border border-border rounded-lg hover:bg-accent transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="group bg-secondary rounded-xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video">
                <Image src={achievement.image} alt={achievement.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {achievement.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(achievement.date)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {achievement.description}
                </p>
                
                <div className="text-sm text-muted-foreground mb-4">
                  <strong>Issued by:</strong> {achievement.issuer}
                </div>
                
                <div className="flex space-x-3">
                  {achievement.certificate && (
                    <a
                      href={achievement.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      View Certificate
                    </a>
                  )}
                  <button className="flex items-center px-4 py-2 border border-border text-foreground rounded-lg hover:bg-accent transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-background rounded-xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-muted-foreground">Certifications Earned</div>
          </div>
          
          <div className="text-center p-8 bg-background rounded-xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">3+</div>
            <div className="text-muted-foreground">Years of Learning</div>
          </div>
          
          <div className="text-center p-8 bg-background rounded-xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="text-muted-foreground">Awards Received</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss how my skills and experience can contribute to your next project.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
