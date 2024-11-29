import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Category = 'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile';

interface ProjectFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'mobile', label: 'Mobile' },
];

export function ProjectFilter({ activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-2 justify-center mb-8"
    >
      {categories.map(({ value, label }) => (
        <Button
          key={value}
          variant={activeCategory === value ? "default" : "outline"}
          onClick={() => onCategoryChange(value)}
          className="transition-all duration-300"
        >
          {label}
        </Button>
      ))}
    </motion.div>
  );
}
