import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">About Me</h1>
          
          <div className="space-y-6 text-lg">
            <p>
              Hello! I'm Muhammad Idrees, a passionate Full Stack Developer specializing in React.js and Next.js. With years of experience in web development, I've helped numerous clients bring their digital visions to life.
            </p>
            
            <div className="bg-secondary/10 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  React.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  MongoDB
                </li>
              </ul>
            </div>

            <p>
              I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies and best practices. My goal is to deliver high-quality solutions that not only meet but exceed client expectations.
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;