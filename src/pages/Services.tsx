import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Globe2, 
  Rocket, 
  Database,
  Paintbrush,
  Search,
  ShoppingCart,
  Palette,
  MonitorSmartphone,
  FileCode2
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Tailored web solutions built with React.js and Next.js to meet your specific needs."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Custom WordPress websites with responsive designs, plugins, and theme development."
    },
    {
      icon: <FileCode2 className="w-8 h-8" />,
      title: "Wix Development",
      description: "Professional Wix websites with custom functionality and stunning designs."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Webflow Development",
      description: "Creating dynamic, responsive websites using Webflow's powerful platform."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Squarespace Development",
      description: "Beautiful Squarespace websites with custom designs and functionality."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Improving your website's visibility and ranking in search engine results."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Amazon PPC",
      description: "Strategic Amazon advertising campaigns to boost your product visibility and sales."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Logo Design",
      description: "Creative and memorable logo designs that represent your brand identity."
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Comprehensive branding solutions including visual identity and brand guidelines."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first websites that work seamlessly across all devices."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js and modern databases."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful API design and implementation for your applications."
    }
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
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;