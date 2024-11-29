import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const UIUXProjects = () => {
  const projects = [
    {
      title: "Banking App Redesign",
      description: "A modern redesign of a banking application focusing on simplicity, accessibility, and user experience. Includes dark mode and customizable dashboard.",
      image: "/assets/projects/banking-app.jpg",
      technologies: ["Figma", "Protopie", "Adobe XD"],
      role: "UI/UX Designer",
      duration: "6 weeks",
      link: "https://www.figma.com/example/banking-app",
    },
    {
      title: "E-learning Platform",
      description: "Complete UI/UX design for an online learning platform with focus on engagement and accessibility. Features include course navigation, progress tracking, and social learning.",
      image: "/assets/projects/elearning.jpg",
      technologies: ["Figma", "Adobe Illustrator", "Maze"],
      role: "Lead Designer",
      duration: "8 weeks",
      link: "https://www.figma.com/example/elearning",
    },
    {
      title: "Healthcare Dashboard",
      description: "A comprehensive healthcare management dashboard designed for medical professionals. Focuses on data visualization and quick access to patient information.",
      image: "/assets/projects/healthcare.jpg",
      technologies: ["Sketch", "InVision", "Principle"],
      role: "UI/UX Designer",
      duration: "12 weeks",
      link: "https://www.figma.com/example/healthcare",
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
            UI/UX Design Projects
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Explore my UI/UX design projects showcasing user-centered design principles, creative solutions, and attention to detail in creating engaging digital experiences.
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
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-primary font-medium">Role:</span>
                      <p className="text-muted-foreground">{project.role}</p>
                    </div>
                    <div>
                      <span className="text-primary font-medium">Duration:</span>
                      <p className="text-muted-foreground">{project.duration}</p>
                    </div>
                  </div>

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

                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="gap-2 w-full"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Design
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

export default UIUXProjects;
