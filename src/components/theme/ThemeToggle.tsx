import { motion } from "framer-motion";
import { useThemeContext } from "./ThemeProvider";

export function ThemeToggle() {
  const { setTheme, theme } = useThemeContext();

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`
        relative w-[70px] h-8 rounded-full p-0.5
        ${theme === 'dark' 
          ? 'bg-green-500' 
          : 'bg-gray-200'
        }
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      `}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0.5 left-0.5 w-7 h-7 rounded-full bg-white shadow-md"
        initial={false}
        animate={{
          x: theme === 'dark' ? '34px' : '0px',
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
      <div className="relative w-full h-full flex items-center justify-between px-2 text-[10px] font-medium">
        <span className={`${theme === 'dark' ? 'opacity-0' : 'opacity-100'} text-gray-600 transition-opacity ml-0.5`}>
          OFF
        </span>
        <span className={`${theme === 'dark' ? 'opacity-100' : 'opacity-0'} text-white transition-opacity mr-0.5`}>
          ON
        </span>
      </div>
    </motion.button>
  );
}
