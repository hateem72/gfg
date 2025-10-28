import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageLoader = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  loaderType = "simple", // "simple", "dots", "pulse", "spin"
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Small delay for smooth transition
    };

    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };

    img.src = src;
  }, [src]);

  const SimpleLoader = () => (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="w-8 h-8 border-3 border-gfg-green border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );

  const DotsLoader = () => (
    <div className="flex items-center justify-center h-full space-x-2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-gfg-green rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );

  const PulseLoader = () => (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="w-12 h-12 bg-gfg-green/20 rounded-full flex items-center justify-center"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-6 h-6 bg-gfg-green rounded-full"
          animate={{ 
            scale: [0.8, 1, 0.8]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );

  const SpinLoader = () => (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="relative w-10 h-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border-2 border-gfg-green/30 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-gfg-green rounded-full"></div>
        <div className="absolute inset-2 border-2 border-transparent border-t-gfg-blue rounded-full"></div>
      </motion.div>
    </div>
  );

  const renderLoader = () => {
    switch (loaderType) {
      case "dots": return <DotsLoader />;
      case "pulse": return <PulseLoader />;
      case "spin": return <SpinLoader />;
      default: return <SimpleLoader />;
    }
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-50 ${containerClassName}`}>
        <div className="text-center text-gray-400">
          <div className="text-2xl mb-1">📷</div>
          <div className="text-xs">Failed to load</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${containerClassName}`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderLoader()}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isLoading ? 0 : 1,
          scale: isLoading ? 0.95 : 1
        }}
        transition={{ duration: 0.4 }}
        {...props}
      />
    </div>
  );
};

export default ImageLoader;