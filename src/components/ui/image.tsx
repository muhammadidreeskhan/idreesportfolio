import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function Image({ 
  src, 
  alt = "", 
  className,
  fallback = '/assets/images/placeholder.jpg',
  ...props 
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && (
        <Skeleton className="absolute inset-0 bg-muted/10" />
      )}
      <img
        src={error ? fallback : src}
        alt={alt}
        className={cn(
          'w-full h-full transition-all duration-300',
          isLoading ? 'scale-110 blur-xl' : 'scale-100 blur-0',
          error ? 'grayscale' : '',
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />
    </div>
  );
}
