import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const phases = [
    { text: "Initializing GeeksForGeeks Campus...", icon: "🚀", duration: 1000 },
    { text: "Loading awesome components...", icon: "⚡", duration: 800 },
    { text: "Compiling student data...", icon: "💾", duration: 700 },
    { text: "Connecting to the community...", icon: "🌐", duration: 600 },
    { text: "Ready to code the future!", icon: "✨", duration: 500 }
  ];

  useEffect(() => {
    let progressInterval;
    let phaseTimeout;

    const startLoading = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 3;
          
          // Update phase based on progress
          const phaseIndex = Math.floor((newProgress / 100) * phases.length);
          if (phaseIndex !== currentPhase && phaseIndex < phases.length) {
            setCurrentPhase(phaseIndex);
          }
          
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            setProgress(100);
            
            // Complete loading after a short delay
            setTimeout(() => {
              setIsComplete(true);
              setTimeout(() => {
                onComplete && onComplete();
              }, 800);
            }, 500);
            
            return 100;
          }
          
          return newProgress;
        });
      }, 50);
    };

    startLoading();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(phaseTimeout);
    };
  }, [currentPhase, onComplete, phases.length]);

  const CodeMatrix = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-gfg-green/20 text-sm"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
          animate={{
            y: [-20, window.innerHeight + 20],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {Array.from({ length: 15 }, () => 
            Math.random() > 0.5 ? '1' : '0'
          ).join('')}
        </motion.div>
      ))}
    </div>
  );

  const FloatingElements = () => (
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating Code Symbols */}
      {['{ }', '< />', '( )', '[ ]', '&&', '||', '=>', '++'].map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-gfg-green/30 font-mono text-lg"
          style={{
            left: `${10 + (i * 10)}%`,
            top: `${20 + Math.random() * 60}%`
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
        >
          {symbol}
        </motion.div>
      ))}
      
      {/* Floating Tech Icons */}
      {['💻', '⚡', '🔧', '🚀', '💡', '🎯'].map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            right: `${10 + (i * 12)}%`,
            top: `${30 + Math.random() * 40}%`
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-white z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Effects */}
          <CodeMatrix />
          <FloatingElements />
          
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, #0F9D58 1px, transparent 1px),
                linear-gradient(to bottom, #0F9D58 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Main Content */}
          <div className="relative z-10 text-center max-w-md mx-auto px-6">
            {/* Logo Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.img
                src="/gfg.svg"
                alt="GeeksForGeeks"
                className="h-20 w-auto mx-auto drop-shadow-2xl"
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 20px rgba(15, 157, 88, 0.5))",
                    "drop-shadow(0 0 30px rgba(15, 157, 88, 0.8))",
                    "drop-shadow(0 0 20px rgba(15, 157, 88, 0.5))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-gfg-green">GeeksForGeeks</span>
              <br />
              <span className="text-xl text-gray-600">Campus Body</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-gray-500 mb-8 font-mono text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Allenhouse Institute of Technology
            </motion.p>

            {/* Loading Animation */}
            <div className="mb-6">
              {/* Circular Progress */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* Background Circle */}
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="rgba(15, 157, 88, 0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#0F9D58"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(15, 157, 88, 0.8))"
                    }}
                  />
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="text-2xl mb-1"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        scale: { duration: 2, repeat: Infinity },
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      {phases[currentPhase]?.icon || '🚀'}
                    </motion.div>
                    <div className="text-gray-800 font-bold text-lg">
                      {Math.round(progress)}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gfg-green to-gfg-blue rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: "0 0 20px rgba(15, 157, 88, 0.6)"
                  }}
                />
              </div>

              {/* Loading Text */}
              <motion.div
                className="text-gfg-green font-mono text-sm h-6"
                key={currentPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {phases[currentPhase]?.text || 'Loading...'}
              </motion.div>

              {/* Typing Animation */}
              <motion.div
                className="flex justify-center mt-2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-gfg-green rounded-full"
                      animate={{ scale: [0, 1, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Fun Facts */}
            <motion.div
              className="text-xs text-gray-500 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                "Code is poetry in motion" - Loading your creative space...
              </motion.div>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 text-gfg-green/30 font-mono text-xs">
            &lt;loading&gt;
          </div>
          <div className="absolute bottom-4 right-4 text-gfg-green/30 font-mono text-xs">
            &lt;/loading&gt;
          </div>
          
          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 border-2 border-gfg-green/20"
            animate={{
              borderColor: [
                "rgba(15, 157, 88, 0.2)",
                "rgba(15, 157, 88, 0.6)",
                "rgba(15, 157, 88, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;