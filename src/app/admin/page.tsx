"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Lock, 
  Eye, 
  EyeOff, 
  Plus, 
  Edit, 
  Trash2, 
  FileText, 
  Award,
  BarChart3,
  Users,
  Calendar
} from "lucide-react"

// Mock data for admin dashboard
const stats = [
  { title: "Total Blogs", value: "12", icon: FileText, color: "text-blue-500" },
  { title: "Achievements", value: "8", icon: Award, color: "text-green-500" },
  { title: "Page Views", value: "2.4K", icon: BarChart3, color: "text-purple-500" },
  { title: "Subscribers", value: "156", icon: Users, color: "text-orange-500" },
]

const recentBlogs = [
  { id: 1, title: "Building Scalable React Applications", status: "Published", date: "2024-01-15" },
  { id: 2, title: "Mastering TypeScript for Web Development", status: "Draft", date: "2024-01-10" },
  { id: 3, title: "Database Design Patterns for MERN", status: "Published", date: "2024-01-05" },
]

const recentAchievements = [
  { id: 1, title: "AWS Certified Developer", status: "Active", date: "2024-01-15" },
  { id: 2, title: "React Developer Certification", status: "Active", date: "2023-12-20" },
  { id: 3, title: "Best Project Award", status: "Active", date: "2023-11-10" },
]

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication check
    if (credentials.email === "admin@example.com" && credentials.password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-background rounded-xl border border-border p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
              <p className="text-muted-foreground">Enter your credentials to access the dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="admin@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Sign In
              </motion.button>
            </form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Demo Credentials:<br />
                Email: admin@example.com<br />
                Password: admin123
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your portfolio content and analytics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background rounded-xl border border-border p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Blogs */}
          <div className="bg-background rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Blogs</h2>
              <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Plus className="h-4 w-4 mr-2" />
                New Blog
              </button>
            </div>
            
            <div className="space-y-4">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{blog.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blog.date}
                      <span className="mx-2">•</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        blog.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {blog.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-background rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Achievements</h2>
              <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Plus className="h-4 w-4 mr-2" />
                New Achievement
              </button>
            </div>
            
            <div className="space-y-4">
              {recentAchievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{achievement.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {achievement.date}
                      <span className="mx-2">•</span>
                      <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                        {achievement.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-background rounded-xl border border-border p-6">
          <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center p-4 border border-border rounded-lg hover:bg-accent transition-colors">
              <FileText className="h-5 w-5 mr-3 text-primary" />
              <div className="text-left">
                <div className="font-medium">Create Blog Post</div>
                <div className="text-sm text-muted-foreground">Write a new article</div>
              </div>
            </button>
            
            <button className="flex items-center p-4 border border-border rounded-lg hover:bg-accent transition-colors">
              <Award className="h-5 w-5 mr-3 text-primary" />
              <div className="text-left">
                <div className="font-medium">Add Achievement</div>
                <div className="text-sm text-muted-foreground">Upload new certificate</div>
              </div>
            </button>
            
            <button className="flex items-center p-4 border border-border rounded-lg hover:bg-accent transition-colors">
              <BarChart3 className="h-5 w-5 mr-3 text-primary" />
              <div className="text-left">
                <div className="font-medium">View Analytics</div>
                <div className="text-sm text-muted-foreground">Check site performance</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
