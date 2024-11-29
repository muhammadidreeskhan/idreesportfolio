import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('button') ||
          target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2
    }
  };

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
        animate={isHovering ? 'hover' : 'default'}
        variants={variants}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
          <div className="absolute inset-2 bg-primary/40 rounded-full" />
        </div>
      </motion.div>
    </>
  );
};

export default AnimatedCursor;
