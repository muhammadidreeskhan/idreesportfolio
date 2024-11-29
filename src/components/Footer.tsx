import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: 'https://github.com/muhammadidreeskhan', 
      label: 'GitHub' 
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: 'https://linkedin.com/in/muhammad-idrees-khan-796558117/', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Twitter className="w-6 h-6" />, 
      href: 'https://x.com/happyikhan', 
      label: 'Twitter' 
    },
  ];

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Branding Section */}
          <div className="space-y-6">
            <motion.h3 
              className="text-3xl font-bold relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                IDREES
              </span>
              <span className="text-primary animate-pulse">.</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
            <div className="space-y-3 text-muted-foreground">
              <motion.p 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>Karachi, Pakistan</span>
              </motion.p>
              <motion.a 
                href="mailto:contactmuhammadidrees@gmail.com"
                className="flex items-center space-x-2 hover:text-primary transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>contactmuhammadidrees@gmail.com</span>
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h4>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          
          {/* Social Links Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h4>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:bg-primary/5 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border/40 text-center text-muted-foreground"
        >
          <p className="text-sm">&copy; {new Date().getFullYear()} IDREES. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
