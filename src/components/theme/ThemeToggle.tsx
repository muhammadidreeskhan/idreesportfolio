import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { useThemeContext } from "./ThemeProvider";

export function ThemeToggle() {
  const { setTheme, theme } = useThemeContext();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-mode"
        checked={theme === 'dark'}
        onCheckedChange={(checked) => {
          setTheme(checked ? 'dark' : 'light');
        }}
        className="relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-input data-[state=checked]:bg-primary"
      />
      <motion.label
        htmlFor="theme-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'dark' ? 'Dark' : 'Light'} Mode
      </motion.label>
    </div>
  );
}
