import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLazyImage } from '../hooks/useImagePreloader';

const LazyImageLoader = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  loaderType = "code",
  lazy = true,
  threshold = 0.1,
  rootMargin = "50px",
  ...props 
}) => {
  const [progress, setProgress] = useState(0);
  const { imgRef, isLoaded, error, shouldLoad } = useLazyImage(src, {
    threshold,
    rootMargin
  });

  useEffect(() => {
    if (shouldLoad && !isLoaded && !error) {
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [shouldLoad, isLoaded, error]);

  useEffect(() => {
    if (isLoaded) {
      setProgress(100);
    }
  }, [isLoaded]);

  const AdvancedCodeLoader = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-4 p-4">
      {/* IDE-like Interface */}
      <div className="w-full max-w-sm bg-white rounded-lg border border-gfg-green/30 overflow-hidden shadow-lg">
        {/* IDE Header */}
        <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b border-gray-200">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-600 text-xs font-mono">ImageLoader.jsx</span>
        </div>
        
        {/* Code Content */}
        <div className="p-4 font-mono text-sm space-y-2">
          <motion.div
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-purple-600">import</span>{" "}
            <span className="text-blue-600">Image</span>{" "}
            <span className="text-purple-600">from</span>{" "}
            <span className="text-green-600">'./components'</span>
          </motion.div>
          
          <motion.div
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-blue-600">const</span>{" "}
            <span className="text-yellow-600">loadImage</span> = 
            <span className="text-purple-600"> async</span> () =&gt; &#123;
          </motion.div>
          
          <motion.div
            className="text-gray-700 ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-purple-600">await</span>{" "}
            <span className="text-blue-600">fetch</span>
            <span className="text-gray-500">(</span>
            <span className="text-green-600">'{alt}'</span>
            <span className="text-gray-500">)</span>
          </motion.div>
          
          <motion.div
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            &#125;
          </motion.div>
          
          {/* Loading indicator */}
          <motion.div
            className="flex items-center text-gfg-green mt-3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mr-2"
            >
              ⚙️
            </motion.span>
            <span>Compiling... {Math.round(progress)}%</span>
          </motion.div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full max-w-sm bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gfg-green via-gfg-blue to-gfg-green"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite"
          }}
        />
      </div>
    </div>
  );

  const NeuralNetworkLoader = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
      {/* Neural Network Visualization */}
      <div className="relative w-48 h-32">
        {/* Input Layer */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-around">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`input-${i}`}
              className="w-4 h-4 bg-gfg-blue rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        
        {/* Hidden Layer */}
        <div className="absolute left-1/2 top-0 h-full flex flex-col justify-around transform -translate-x-1/2">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`hidden-${i}`}
              className="w-3 h-3 bg-gfg-green rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: i * 0.1 + 0.5
              }}
            />
          ))}
        </div>
        
        {/* Output Layer */}
        <div className="absolute right-0 top-0 h-full flex flex-col justify-around">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`output-${i}`}
              className="w-4 h-4 bg-gfg-yellow rounded-full"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 1.8, 
                repeat: Infinity,
                delay: i * 0.15 + 1
              }}
            />
          ))}
        </div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Input to Hidden connections */}
          {[...Array(4)].map((_, i) => 
            [...Array(6)].map((_, j) => (
              <motion.line
                key={`input-hidden-${i}-${j}`}
                x1="16" y1={`${(i + 1) * 20}%`}
                x2="50%" y2={`${(j + 1) * 14}%`}
                stroke="rgba(15, 157, 88, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2, 
                  delay: (i + j) * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))
          )}
          
          {/* Hidden to Output connections */}
          {[...Array(6)].map((_, i) => 
            [...Array(3)].map((_, j) => (
              <motion.line
                key={`hidden-output-${i}-${j}`}
                x1="50%" y1={`${(i + 1) * 14}%`}
                x2="176" y2={`${(j + 1) * 25}%`}
                stroke="rgba(66, 133, 244, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2, 
                  delay: (i + j) * 0.1 + 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))
          )}
        </svg>
      </div>
      
      <motion.div
        className="text-gfg-green font-mono text-sm text-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div>🧠 AI Processing Image...</div>
        <div className="text-xs text-gray-400 mt-1">
          Neural networks analyzing: {Math.round(progress)}%
        </div>
      </motion.div>
    </div>
  );

  const QuantumLoader = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
      {/* Quantum Particles */}
      <div className="relative w-32 h-32">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gfg-green rounded-full"
            style={{
              top: `${50 + 40 * Math.cos((i * 45) * Math.PI / 180)}%`,
              left: `${50 + 40 * Math.sin((i * 45) * Math.PI / 180)}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Center Quantum Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-gfg-blue rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -360],
            borderColor: ["#4285F4", "#0F9D58", "#F4B400", "#4285F4"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div
            className="w-full h-full bg-gfg-green/20 rounded-full"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>
      </div>
      
      <motion.div
        className="text-center"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-gfg-blue font-mono text-sm">⚛️ Quantum Loading</div>
        <div className="text-xs text-gray-400 mt-1">
          Entangling pixels: {Math.round(progress)}%
        </div>
      </motion.div>
    </div>
  );

  const renderLoader = () => {
    switch (loaderType) {
      case "neural": return <NeuralNetworkLoader />;
      case "quantum": return <QuantumLoader />;
      case "advanced": return <AdvancedCodeLoader />;
      default: return <AdvancedCodeLoader />;
    }
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${containerClassName}`}>
        <div className="text-center text-gray-500">
          <motion.div 
            className="text-4xl mb-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚠️
          </motion.div>
          <div className="font-mono text-sm">Failed to load image</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${containerClassName}`} ref={lazy ? imgRef : null}>
      <AnimatePresence>
        {(!isLoaded || (lazy && !shouldLoad)) && (
          <motion.div
            className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            {renderLoader()}
          </motion.div>
        )}
      </AnimatePresence>
      
      {(shouldLoad || !lazy) && (
        <motion.img
          src={src}
          alt={alt}
          className={className}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 0.95
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          {...props}
        />
      )}
      
      {/* Shimmer CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default LazyImageLoader;