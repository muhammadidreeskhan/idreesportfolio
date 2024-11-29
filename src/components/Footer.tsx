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
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Branding Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                IDREES
              </span>
              <span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Karachi, Pakistan</p>
              <a 
                href="mailto:contactmuhammadidrees@gmail.com"
                className="hover:text-primary transition-colors"
              >
                contactmuhammadidrees@gmail.com
              </a>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Social Links Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
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
          className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} IDREES. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
