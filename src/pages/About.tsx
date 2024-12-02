import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Calendar, MapPin, Download, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Image } from "../components/Image";
import SEO from '@/components/SEO';

const About = () => {
  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 70 },
    ]
  };

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading development of enterprise web applications using React and Node.js.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      description: "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced loading time by 50%",
        "Implemented responsive designs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Me"
        description="Full Stack Developer specializing in React, Node.js, and modern web technologies. Learn about my experience, skills, and professional journey."
        keywords={["full stack developer", "react developer", "node.js", "web development", "UI/UX design"]}
        type="profile"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20">
                <Image
                  src="/assets/images/profile.jpg"
                  alt="Muhammad Idrees"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </motion.div>

            {/* Profile Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Muhammad Idrees
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                  Full Stack Developer
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:contactmuhammadidrees@gmail.com" className="hover:text-primary transition-colors">
                    contactmuhammadidrees@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex space-x-4"
              >
                <Button 
                  className="gap-2"
                  onClick={() => window.open('/assets/idrees-resume.pdf', '_blank')}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => window.open('https://www.coroflot.com/Muhammadidreeskhan/stream', '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Portfolio
                </Button>
              </motion.div>
            </div>
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="bg-secondary/5 rounded-xl p-8 space-y-4">
              <p className="text-lg leading-relaxed">
                Hello! I'm Muhammad Idrees, a passionate Full Stack Developer with expertise in React.js and Next.js. 
                With years of experience in web development, I've helped numerous clients bring their digital visions to life.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies and best practices. 
                My goal is to deliver high-quality solutions that not only meet but exceed client expectations.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <div className="bg-secondary/5 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
                <div className="space-y-6">
                  {skills.frontend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-secondary/5 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
                <div className="space-y-6">
                  {skills.backend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-secondary/5 rounded-xl p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;