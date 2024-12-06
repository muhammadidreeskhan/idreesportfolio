import React from 'react';

export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
        {/* Inner circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-full border-4 border-secondary/20 border-t-secondary animate-spin"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-4">
      <Loader />
      <div className="space-y-4 w-full max-w-2xl animate-pulse">
        <div className="h-8 bg-muted rounded-md w-3/4 mx-auto" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded-md w-5/6 mx-auto" />
          <div className="h-4 bg-muted rounded-md w-4/6 mx-auto" />
          <div className="h-4 bg-muted rounded-md w-3/6 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export const ComponentLoader = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader />
    </div>
  );
};
