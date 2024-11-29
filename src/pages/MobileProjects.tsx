import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const MobileProjects = () => {
  const projects = [
    {
      title: "Food Delivery App",
      description: "A cross-platform mobile app for food delivery services. Features include real-time order tracking, payment integration, and push notifications.",
      image: "/assets/projects/food-delivery.jpg",
      technologies: ["React Native", "Firebase", "Redux", "Google Maps"],
      liveLink: "https://example.com/food-delivery",
      githubLink: "https://github.com/example/food-delivery",
    },
    {
      title: "Fitness Tracking App",
      description: "A comprehensive fitness tracking application with workout plans, progress monitoring, and social features.",
      image: "/assets/projects/fitness.jpg",
      technologies: ["Flutter", "Firebase", "BLoC Pattern", "Health Kit"],
      liveLink: "https://example.com/fitness",
      githubLink: "https://github.com/example/fitness",
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects with team collaboration features and real-time updates.",
      image: "/assets/projects/task-manager.jpg",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "https://example.com/task-manager",
      githubLink: "https://github.com/example/task-manager",
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
            Mobile App Projects
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Discover my mobile application projects built with modern frameworks like React Native and Flutter, focusing on performance and user experience.
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
                <div className="aspect-[9/16] relative overflow-hidden">
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
                      View App
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

export default MobileProjects;
