import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const WebProjects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/assets/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveLink: "https://example.com/ecommerce",
      githubLink: "https://github.com/example/ecommerce",
    },
    {
      title: "Content Management System",
      description: "A modern CMS built with Next.js and GraphQL, allowing users to manage their digital content efficiently with a user-friendly interface.",
      image: "/assets/projects/cms.jpg",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
      liveLink: "https://example.com/cms",
      githubLink: "https://github.com/example/cms",
    },
    {
      title: "Real Estate Platform",
      description: "A comprehensive real estate website with property listings, search functionality, and user dashboard. Built with React and Firebase.",
      image: "/assets/projects/realestate.jpg",
      technologies: ["React", "Firebase", "Google Maps API", "Tailwind CSS"],
      liveLink: "https://example.com/realestate",
      githubLink: "https://github.com/example/realestate",
    },
  ];

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
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Web Development Projects
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Explore my web development projects showcasing modern technologies and best practices in creating responsive, scalable, and user-friendly web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary/5 rounded-xl overflow-hidden border border-border/40"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default WebProjects;
