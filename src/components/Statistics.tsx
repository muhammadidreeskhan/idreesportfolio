import { motion } from 'framer-motion';
import { Timer, Briefcase, Users } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { 
      icon: <Timer className="w-8 h-8" />,
      value: "5+", 
      label: "Years Experience",
      description: "Crafting digital experiences since 2018"
    },
    { 
      icon: <Briefcase className="w-8 h-8" />,
      value: "50+", 
      label: "Projects Completed",
      description: "Delivering excellence across diverse domains"
    },
    { 
      icon: <Users className="w-8 h-8" />,
      value: "30+", 
      label: "Happy Clients",
      description: "Building lasting partnerships worldwide"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 bg-primary/10 p-3 rounded-xl text-primary transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-right">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-xl font-semibold mb-2">{stat.label}</p>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;