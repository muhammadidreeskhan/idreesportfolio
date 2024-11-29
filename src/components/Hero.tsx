import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const headlines = [
    'Crafting Digital Experiences',
    'Building Modern Websites',
    'Creating Innovative Solutions'
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="max-w-4xl mx-auto text-center space-y-14"
        >
          <div className="space-y-8">
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
              Full-stack developer specializing in building exceptional digital experiences with modern technologies
            </motion.p>
          </div>

          <motion.div 
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors duration-200 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center h-12 px-8 py-3 border border-primary/20 hover:bg-primary/10 rounded-lg font-medium transition-colors duration-200"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;