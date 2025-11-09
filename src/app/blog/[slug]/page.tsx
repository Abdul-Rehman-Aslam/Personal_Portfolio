import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: string
  tags: string[]
  published: boolean
  createdAt: Date
  author: string
  readTime: number
}

// Mock blog data - in a real app, this would come from your database
const blogs: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with Next.js",
    slug: "building-scalable-react-applications-nextjs",
    excerpt: "Learn how to build production-ready React applications using Next.js best practices, including SSR, SSG, and performance optimization techniques.",
    content: `
# Building Scalable React Applications with Next.js

In today's fast-paced web development landscape, building scalable applications is crucial for success. Next.js has emerged as one of the most powerful frameworks for React applications, providing developers with the tools they need to create high-performance, SEO-friendly applications.

## Why Next.js?

Next.js offers several advantages over traditional React applications:

- **Server-Side Rendering (SSR)**: Improves SEO and initial page load times
- **Static Site Generation (SSG)**: Pre-renders pages at build time for optimal performance
- **Automatic Code Splitting**: Reduces bundle size and improves loading times
- **Built-in CSS Support**: Easy styling with CSS modules, Sass, and styled-components
- **API Routes**: Build full-stack applications with serverless functions

## Getting Started

To create a new Next.js application, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Best Practices for Scalability

### 1. Component Architecture

Organize your components in a logical structure:

\`\`\`
src/
  components/
    ui/
      Button.tsx
      Input.tsx
    layout/
      Header.tsx
      Footer.tsx
    features/
      auth/
        LoginForm.tsx
        RegisterForm.tsx
\`\`\`

### 2. State Management

For complex applications, consider using state management solutions:

- **Redux Toolkit**: For global state management
- **Zustand**: Lightweight state management
- **Context API**: For component-level state

### 3. Performance Optimization

- Use dynamic imports for code splitting
- Implement proper caching strategies
- Optimize images with Next.js Image component
- Use React.memo for expensive components

## Conclusion

Next.js provides a solid foundation for building scalable React applications. By following best practices and leveraging its powerful features, you can create applications that are both performant and maintainable.

Remember to always consider your application's specific needs and choose the right tools for the job. Happy coding!
    `,
    coverImage: "/api/placeholder/800/400",
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
    coverImage: "/api/placeholder/800/400",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    published: true,
    createdAt: new Date("2024-01-10"),
    author: "Abdul Rehman",
    readTime: 12
  }
]

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = blogs.find(b => b.slug === params.slug)
  
  if (!blog) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${blog.title} - Abdul Rehman's Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.createdAt.toISOString(),
      authors: [blog.author],
      tags: blog.tags,
    },
  }
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const blog = blogs.find(b => b.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(blog.createdAt)}
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            {blog.readTime} min read
            <span className="mx-2">•</span>
            <User className="h-4 w-4 mr-1" />
            {blog.author}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {blog.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {blog.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">
                  {blog.title.charAt(0)}
                </span>
              </div>
              <p className="text-muted-foreground">Featured Image</p>
            </div>
          </div>
          
          <div className="whitespace-pre-wrap text-foreground leading-relaxed">
            {blog.content}
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-16 p-6 bg-muted/50 rounded-xl border border-border">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-primary">AR</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">About Abdul Rehman</h3>
              <p className="text-muted-foreground mb-4">
                MERN Stack Developer with over 3 years of experience building modern, 
                scalable, and responsive web applications. Passionate about sharing 
                knowledge and helping others grow in their development journey.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/abdulrehman"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/abdulrehman"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="mailto:abdul@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
