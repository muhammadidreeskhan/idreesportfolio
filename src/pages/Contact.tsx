import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github, Twitter, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'service_14rkuha',
        'template_ovme91i',
        formRef.current!,
        'YKFSzKUzPohomIiWr'
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        formRef.current?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-primary/5 to-transparent" />
        </div>

        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center space-y-4 mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold"
              >
                Let's <span className="text-primary">Connect</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                Have a project in mind or want to collaborate? I'd love to hear from you.
              </motion.p>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Contact Information</h2>
                    <p className="text-muted-foreground">
                      Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:contactmuhammadidrees@gmail.com" className="hover:underline">
                        contactmuhammadidrees@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      <span>Karachi, Pakistan</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Phone className="w-5 h-5" />
                      <span>Available for remote work</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Connect on Social Media</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full border border-primary/20 hover:border-primary/40 transition-colors ${link.color}`}
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="user_name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="user_name"
                          name="user_name"
                          className="w-full px-4 py-2.5 rounded-lg bg-background border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="user_email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="user_email"
                          name="user_email"
                          className="w-full px-4 py-2.5 rounded-lg bg-background border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors resize-none"
                        required
                      ></textarea>
                    </div>

                    <div className="space-y-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      {submitStatus === 'success' && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-green-500 text-center"
                        >
                          Message sent successfully! I'll get back to you soon.
                        </motion.p>
                      )}

                      {submitStatus === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-center"
                        >
                          Failed to send message. Please try again.
                        </motion.p>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
