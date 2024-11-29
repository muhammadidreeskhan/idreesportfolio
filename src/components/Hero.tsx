import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Palette, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const headlines = [
    'Crafting Digital Experiences',
    'Building Modern Websites',
    'Creating Innovative Solutions',
    'Transforming Ideas into Reality'
  ];

  const skills = [
    { icon: <Code2 className="w-6 h-6" />, text: 'Full Stack Development' },
    { icon: <Palette className="w-6 h-6" />, text: 'UI/UX Design' },
    { icon: <Rocket className="w-6 h-6" />, text: 'Performance Optimization' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % headlines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/30 via-purple-500/20 to-blue-500/30 rounded-full blur-3xl dark:from-primary/40 dark:via-purple-500/30 dark:to-blue-500/40"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-primary/30 via-purple-500/20 to-blue-500/30 rounded-full blur-3xl dark:from-primary/40 dark:via-purple-500/30 dark:to-blue-500/40"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100, null],
              x: [null, Math.random() * 100 - 50, null],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="max-w-4xl mx-auto text-center space-y-14"
        >
          <div className="space-y-8">
            <motion.div 
              className="flex items-center justify-center gap-2 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                Available for Projects
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight h-24 md:h-32 flex items-center justify-center leading-[1.1]"
              variants={textVariants}
            >
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentText}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={textVariants}
                    className="block"
                  >
                    {headlines[currentText]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Transforming ideas into exceptional digital experiences through innovative design and cutting-edge development.
            </motion.p>

            {/* Skills Section */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/40"
                >
                  {skill.icon}
                  <span>{skill.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="group px-6 py-3 rounded-full bg-secondary/10 text-secondary-foreground font-medium inline-flex items-center gap-2 hover:bg-secondary/20 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;