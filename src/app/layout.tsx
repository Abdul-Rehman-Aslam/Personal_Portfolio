import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdul Rehman - MERN Stack Developer",
  description: "MERN Stack Developer with over 3 years of experience building modern, scalable, and responsive web applications. Turning complex ideas into elegant digital experiences.",
  keywords: ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "Full Stack Developer", "Web Developer", "JavaScript", "TypeScript"],
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulrehman.dev",
    title: "Abdul Rehman - MERN Stack Developer",
    description: "MERN Stack Developer with over 3 years of experience building modern, scalable, and responsive web applications.",
    siteName: "Abdul Rehman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman - MERN Stack Developer",
    description: "MERN Stack Developer with over 3 years of experience building modern, scalable, and responsive web applications.",
    creator: "@abdulrehman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
