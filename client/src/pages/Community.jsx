import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Brain, Network, GitBranch, Lightbulb, Zap, Trophy, Code, Users2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import ImageLoader from '../components/ImageLoader';

const Community = () => {
  const [activeDescription, setActiveDescription] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate descriptions
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveDescription((prev) => (prev + 1) % descriptions.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const descriptions = [
    {
      title: "Innovation Hub",
      description: "Our state-of-the-art tech lab where groundbreaking ideas transform into reality through cutting-edge technology.",
      icon: Code,
      stats: "50+ Active Projects"
    },
    {
      title: "Hackathon Champions", 
      description: "Celebrating our recent victory at the National Hackathon with innovative solutions that pushed boundaries.",
      icon: Trophy,
      stats: "25+ Awards Won"
    },
    {
      title: "Workshop Excellence",
      description: "Hands-on learning sessions covering everything from web development to machine learning.",
      icon: Users2,
      stats: "100+ Workshops"
    },
    {
      title: "Community Spirit",
      description: "Regular meetups fostering knowledge sharing and networking among passionate tech enthusiasts.",
      icon: Network,
      stats: "500+ Members"
    },
    {
      title: "Career Launchpad",
      description: "Transforming students into industry-ready professionals with mentorship and opportunities.",
      icon: TrendingUp,
      stats: "80% Placement Rate"
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: "Hyper-Growth Acceleration",
      description: "0 to Tech Hero in 6 months with intensive learning paths and real-world projects",
      delay: 0
    },
    {
      icon: Brain,
      title: "AI-Powered Learning", 
      description: "Access cutting-edge AI tools and ML models before they hit mainstream",
      delay: 0.1
    },
    {
      icon: Network,
      title: "Global Tech Network",
      description: "Connect with developers worldwide through international partnerships",
      delay: 0.2
    },
    {
      icon: GitBranch,
      title: "Open Source Dominance",
      description: "Contribute to major open-source projects and build your GitHub portfolio",
      delay: 0.3
    },
    {
      icon: Lightbulb,
      title: "Idea Incubation",
      description: "Turn your ideas into funded startups with venture capital partnerships",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Lightning Fast Progress",
      description: "Master in-demand tech stacks 3x faster with expert mentors",
      delay: 0.5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gfg-black overflow-x-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Optimized Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-full bg-gfg-green/10 border border-gfg-green/20"
          >
            <Sparkles size={16} className="text-gfg-green" />
            <span className="text-gfg-green font-mono text-sm">WELCOME TO TECH COMMUNITY</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 font-space-grotesk"
          >
            <span className="text-gfg-black">Allenhouse</span>
            <br />
            <span className="text-gfg-green">Tech Community</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gfg-gray max-w-3xl mx-auto mb-12 font-inter leading-relaxed"
          >
            Where <span className="text-gfg-green font-semibold">innovation</span> meets{' '}
            <span className="text-gfg-blue font-semibold">collaboration</span>, and dreams transform into digital reality
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="https://forms.gle/Weetybpw1cDcPuDy9"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gfg-green text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Rocket size={20} />
                <span>Launch Your Journey</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <button className="px-8 py-4 border border-gfg-green text-gfg-green font-bold rounded-xl hover:bg-gfg-green/5 transition-all duration-300">
              Explore More
            </button>
          </motion.div>
        </motion.div>

        {/* Single Square Image with Descriptions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-24"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 font-space-grotesk"
            >
              Our <span className="text-gfg-green">Community</span> in Action
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Single Square Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-gfg-green/20 shadow-lg">
                  <ImageLoader
                    src="/community.png"
                    alt="Allenhouse Tech Community"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    containerClassName="w-full h-full"
                    loaderType="pulse"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Dynamic Descriptions */}
              <div className="relative h-80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDescription}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="bg-gfg-light-gray rounded-2xl p-6 border border-gray-200 shadow-lg h-full">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gfg-green/20 flex items-center justify-center">
                          {React.createElement(descriptions[activeDescription].icon, { 
                            size: 24, 
                            className: "text-gfg-green" 
                          })}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gfg-black font-space-grotesk">
                            {descriptions[activeDescription].title}
                          </h3>
                          <p className="text-gfg-green font-semibold text-sm">
                            {descriptions[activeDescription].stats}
                          </p>
                        </div>
                      </div>

                      <p className="text-gfg-gray leading-relaxed mb-4 font-inter">
                        {descriptions[activeDescription].description}
                      </p>

                      <div className="flex space-x-2">
                        {descriptions.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveDescription(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === activeDescription 
                                ? 'bg-gfg-green scale-125' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optimized Why Join Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-24"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-gfg-green/10 border border-gfg-green/20"
            >
              <Zap size={18} className="text-gfg-green" />
              <span className="text-gfg-green font-mono text-sm font-bold">WHY JOIN US</span>
            </motion.div>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk"
            >
              Your <span className="text-gfg-green">Tech Superpower</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gfg-gray max-w-2xl mx-auto font-inter"
            >
              We're here to turn you into a 10x developer who builds the future
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: feature.delay, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gfg-green/10 flex items-center justify-center group-hover:bg-gfg-green/20 transition-colors">
                      <Icon size={24} className="text-gfg-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gfg-black mb-2 font-space-grotesk group-hover:text-gfg-green transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gfg-gray text-sm leading-relaxed font-inter">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="https://forms.gle/Weetybpw1cDcPuDy9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gfg-green text-white font-bold rounded-xl hover:bg-gfg-dark-green transition-all duration-300"
            >
              <Rocket size={20} />
              <span>Join Now</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;