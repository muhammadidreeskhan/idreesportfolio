import { motion } from 'framer-motion';
import { 
  Code2, Layout, Database, Smartphone, Globe, 
  Cpu, Cloud, Shield, Gauge
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive and interactive web applications using React, Next.js, and TypeScript",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Developing robust server-side solutions with Node.js and MongoDB",
      skills: ["Node.js", "MongoDB", "REST APIs", "Express.js"]
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles",
      skills: ["Figma", "Tailwind CSS", "Framer Motion", "Responsive Design"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Development",
      description: "Ensuring perfect responsiveness across all devices and screen sizes",
      skills: ["Responsive Design", "Mobile Optimization", "Progressive Web Apps"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Deploying and managing applications on cloud platforms",
      skills: ["AWS", "Vercel", "Docker", "CI/CD"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Performance",
      description: "Implementing best practices for secure and fast applications",
      skills: ["Web Security", "Performance Optimization", "SEO", "Analytics"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Services</span> & <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions with cutting-edge technologies
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg text-primary transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;