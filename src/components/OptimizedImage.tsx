import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [currentSrc, setCurrentSrc] = useState(
    priority ? src : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
  );

  useEffect(() => {
    if (!priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
        setIsLoading(false);
      };
    }
  }, [src, priority]);

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    const sizes = [320, 640, 960, 1280];
    const basePath = src.split('.').slice(0, -1).join('.');
    const extension = src.split('.').pop();
    
    return sizes
      .map(size => `${basePath}-${size}.${extension} ${size}w`)
      .join(', ');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden"
    >
      <motion.img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        srcSet={generateSrcSet()}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`${className} ${
          isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'
        } transition-all duration-300`}
        onLoad={() => setIsLoading(false)}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : 'auto',
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-secondary/10 animate-pulse" />
      )}
    </motion.div>
  );
};

export default OptimizedImage;
