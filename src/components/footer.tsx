import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Abdul-Rehman-Aslam", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/a-rehman-aslam", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/AbdulRehma17771", icon: Twitter },
  { name: "Email", href: "mailto:abdulrehmanaslam047@gmail.com", icon: Mail },
]

const quickLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/#contact" },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AR</span>
              </div>
              <span className="text-xl font-bold gradient-text">Abdul Rehman</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              MERN Stack Developer with over 3 years of experience building modern, 
              scalable, and responsive web applications. Turning complex ideas into 
              elegant digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>abdulrehmanaslam047@gmail.com</p>
              <p>+92 303 3781581</p>
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Built with Next.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
