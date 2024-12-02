import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function Image({ 
  src, 
  alt, 
  className, 
  fallback = '/assets/placeholder.jpg',
  ...props 
}: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      className={cn(
        'transition-all duration-300',
        error ? 'grayscale' : '',
        className
      )}
      {...props}
    />
  );
}
