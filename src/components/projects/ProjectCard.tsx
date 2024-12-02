import { memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Image } from "@/components/ui/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = memo(function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="w-full transform-gpu"
    >
      <Card className="group h-full overflow-hidden border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-300 transform-gpu group-hover:scale-105"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
          <CardDescription className="mb-4">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech.name}
                variant="secondary"
                style={{ 
                  backgroundColor: tech.color + '20', 
                  color: tech.color 
                }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-4">
          {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={16} />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
});
