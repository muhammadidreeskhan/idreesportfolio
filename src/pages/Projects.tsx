import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Project } from "@/types/project";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile'>('all');

  const projects: Project[] = [
    {
      title: "DevNovate Web Wizardry",
      description: "A comprehensive web development platform showcasing modern design patterns and innovative solutions.",
      tech: [
        { name: "Next.js", color: "#0070f3" },
        { name: "TypeScript", color: "#3178c6" },
        { name: "TailwindCSS", color: "#06b6d4" },
        { name: "Framer Motion", color: "#ff0055" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://devnovate-web-wizardry-123.vercel.app/",
      githubUrl: "#",
      category: "frontend",
      featured: true
    },
    {
      title: "Tutor Map Connector",
      description: "A platform connecting tutors with students through interactive mapping and scheduling features.",
      tech: [
        { name: "Next.js", color: "#0070f3" },
        { name: "TypeScript", color: "#3178c6" },
        { name: "Tailwind", color: "#06b6d4" },
        { name: "Google Maps", color: "#4285F4" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://tutor-map-connector.vercel.app/",
      githubUrl: "#",
      category: "fullstack",
      featured: true
    },
    {
      title: "EDSP Solution",
      description: "Educational platform providing comprehensive solutions for digital learning and management.",
      tech: [
        { name: "React", color: "#61dafb" },
        { name: "Node.js", color: "#339933" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Express", color: "#000000" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://edsp-solution.vercel.app/",
      githubUrl: "#",
      category: "fullstack"
    },
    {
      title: "Historical Boundary Mapper",
      description: "Interactive mapping application for visualizing and exploring historical boundaries.",
      tech: [
        { name: "React", color: "#61dafb" },
        { name: "Leaflet", color: "#199900" },
        { name: "TypeScript", color: "#3178c6" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://historical-boundary-mapper-09.vercel.app/",
      githubUrl: "#",
      category: "frontend",
      featured: true
    },
    {
      title: "Business ERP System",
      description: "Comprehensive enterprise resource planning system for business management.",
      tech: [
        { name: "Next.js", color: "#0070f3" },
        { name: "PostgreSQL", color: "#336791" },
        { name: "Prisma", color: "#2D3748" },
        { name: "Tailwind", color: "#06b6d4" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://business-erpsystem.vercel.app/",
      githubUrl: "#",
      category: "fullstack"
    },
    {
      title: "WhatsApp Business Integration",
      description: "Business communication platform leveraging WhatsApp's API for enhanced customer engagement.",
      tech: [
        { name: "React", color: "#61dafb" },
        { name: "WhatsApp API", color: "#25D366" },
        { name: "Node.js", color: "#339933" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://whatsappbusiness.vercel.app/",
      githubUrl: "#",
      category: "fullstack"
    },
    {
      title: "Tech News AI",
      description: "AI-powered tech news aggregator with personalized content recommendations.",
      tech: [
        { name: "Next.js", color: "#0070f3" },
        { name: "OpenAI", color: "#412991" },
        { name: "TailwindCSS", color: "#06b6d4" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://tech-news-ai-rouge.vercel.app/",
      githubUrl: "#",
      category: "frontend"
    },
    {
      title: "Vacant Home Harvest",
      description: "Platform connecting property owners with urban farmers for sustainable land use.",
      tech: [
        { name: "React", color: "#61dafb" },
        { name: "Firebase", color: "#FFCA28" },
        { name: "Google Maps", color: "#4285F4" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://vacant-home-harvest.vercel.app/",
      githubUrl: "#",
      category: "fullstack"
    },
    {
      title: "AWS Amplify Generator",
      description: "Development toolkit for generating AWS Amplify applications with predefined templates.",
      tech: [
        { name: "AWS Amplify", color: "#FF9900" },
        { name: "React", color: "#61dafb" },
        { name: "GraphQL", color: "#E10098" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://awsamplyfygen2.vercel.app/",
      githubUrl: "#",
      category: "fullstack"
    },
    {
      title: "Elegant Haven",
      description: "Luxury real estate platform with virtual tours and property management features.",
      tech: [
        { name: "Next.js", color: "#0070f3" },
        { name: "Three.js", color: "#000000" },
        { name: "Prisma", color: "#2D3748" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://elegant-haven.vercel.app/",
      githubUrl: "#",
      category: "frontend"
    },
    {
      title: "Quick Splash Mail",
      description: "Modern email marketing platform with drag-and-drop template builder.",
      tech: [
        { name: "React", color: "#61dafb" },
        { name: "Node.js", color: "#339933" },
        { name: "SendGrid", color: "#1A82E2" }
      ],
      image: "/placeholder.svg",
      liveUrl: "https://quick-splash-mail.vercel.app/",
      githubUrl: "#",
      category: "fullstack"
    }
  ];

  const filteredProjects = projects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          
          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;