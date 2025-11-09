import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Blog - Abdul Rehman",
  description: "Read my latest thoughts on web development, technology, and programming.",
}

// Mock blog data - in a real app, this would come from your database
const blogs = [
  {
    id: "1",
    title: "Building Scalable React Applications with Next.js",
    slug: "building-scalable-react-applications-nextjs",
    excerpt: "Learn how to build production-ready React applications using Next.js best practices, including SSR, SSG, and performance optimization techniques.",
    content: "Full blog content here...",
    coverImage: "/images/blog-cover.svg",
    tags: ["React", "Next.js", "Performance", "SSR"],
    published: true,
    createdAt: new Date("2024-01-15"),
    author: "Abdul Rehman",
    readTime: 8
  },
  {
    id: "2",
    title: "Mastering TypeScript for Modern Web Development",
    slug: "mastering-typescript-modern-web-development",
    excerpt: "A comprehensive guide to TypeScript features that will make you a more productive developer, from basic types to advanced generics.",
    content: "Full blog content here...",
    coverImage: "/images/blog-cover.svg",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    published: true,
    createdAt: new Date("2024-01-10"),
    author: "Abdul Rehman",
    readTime: 12
  },
  {
    id: "3",
    title: "Database Design Patterns for MERN Stack Applications",
    slug: "database-design-patterns-mern-stack",
    excerpt: "Explore effective database design patterns and best practices for MongoDB in MERN stack applications, including schema design and optimization.",
    content: "Full blog content here...",
    coverImage: "/images/blog-cover.svg",
    tags: ["MongoDB", "Database", "MERN Stack", "Backend"],
    published: true,
    createdAt: new Date("2024-01-05"),
    author: "Abdul Rehman",
    readTime: 10
  },
  {
    id: "4",
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-web-development-trends-2024",
    excerpt: "Discover the latest trends and technologies shaping the future of web development, from AI integration to new frameworks and tools.",
    content: "Full blog content here...",
    coverImage: "/images/blog-cover.svg",
    tags: ["Web Development", "Trends", "Technology", "Future"],
    published: true,
    createdAt: new Date("2024-01-01"),
    author: "Abdul Rehman",
    readTime: 6
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, and programming
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-secondary rounded-xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video">
                <Image src={blog.coverImage} alt={blog.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(blog.createdAt)}
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  {blog.readTime} min read
                </div>
                
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State (if no blogs) */}
        {blogs.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">No blog posts yet</h3>
            <p className="text-muted-foreground">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
