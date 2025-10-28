// src/components/LandingPage.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Users2, ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import ImageLoader from '../components/ImageLoader';

// Register GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LandingPage = () => {
  const logoRef = useRef(null);
  const campusTitleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const featureSectionRef = useRef(null);
  const statsRef = useRef([]);
  const finalCtaRef = useRef(null);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(logoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: 'expo.out' });
    gsap.fromTo(campusTitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' });
    gsap.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' });
    gsap.fromTo(ctaGroupRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.6, ease: 'back.out(1.2)' });

    // Stats animation
    gsap.utils.toArray(statsRef.current).forEach((stat, i) => {
      gsap.fromTo(
        stat,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 85%',
          },
        }
      );
    });

    // Final CTA
    gsap.fromTo(
      finalCtaRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: finalCtaRef.current,
          start: 'top 85%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  // Helper Component: Animated Counter
  const AnimatedNumber = ({ target, suffix = '' }) => {
    const elementRef = useRef(null);

    useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const duration = 2000; // ms
            const increment = target / (duration / 16); // ~60fps

            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                element.textContent = `${target}${suffix}`;
                clearInterval(timer);
              } else {
                element.textContent = `${Math.ceil(start)}${suffix}`;
              }
            }, 16);

            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);

      return () => observer.disconnect();
    }, [target, suffix]);

    return <span ref={elementRef}>0{suffix}</span>;
  };

  const features = [
    {
      icon: "🧠",
      title: "DSA Mastery",
      description: "Weekly contests, doubt sessions, and curated problem sets to master algorithms.",
      color: "gfg-dark-green",
    },
    {
      icon: "🚀",
      title: "Tech Workshops",
      description: "Hands-on labs in AI, Web Dev, Cloud, and more — led by experts.",
      color: "gfg-dark-blue",
    },
    {
      icon: "🌐",
      title: "Open Source",
      description: "Contribute to real projects and build a global developer portfolio.",
      color: "gfg-dark-yellow",
    },
    {
      icon: "🏆",
      title: "Hackathons",
      description: "48-hour coding sprints with prizes, networking, and innovation.",
      color: "gfg-green",
    },
    {
      icon: "👨‍💻",
      title: "Interview Prep",
      description: "Mock interviews, resume reviews, and company-specific DSA drills.",
      color: "gfg-blue",
    },
    {
      icon: "🤝",
      title: "Industry Connect",
      description: "Live sessions with engineers from top tech companies.",
      color: "gfg-yellow",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">


      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Creative Grid Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
          linear-gradient(to right, #0F9D58 1px, transparent 1px),
          linear-gradient(to bottom, #0F9D58 1px, transparent 1px)
        `,
              backgroundSize: '50px 50px',
              backgroundPosition: 'center center'
            }}
          ></div>

          {/* Animated Grid Lines */}
          <div className="absolute inset-0">
            {/* Horizontal Lines */}
            {[...Array(10)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-gfg-green/20 transform -translate-y-1/2"
                style={{
                  top: `${(i + 1) * 10}%`,
                  animation: `slideInHorizontal 3s ease-in-out ${i * 0.2}s infinite alternate`
                }}
              ></div>
            ))}

            {/* Vertical Lines */}
            {[...Array(10)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-gfg-blue/20 transform -translate-x-1/2"
                style={{
                  left: `${(i + 1) * 10}%`,
                  animation: `slideInVertical 3s ease-in-out ${i * 0.2 + 0.5}s infinite alternate`
                }}
              ></div>
            ))}
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-1/4 left-1/6 w-8 h-8 border-2 border-gfg-green/30 rounded-lg transform rotate-45 animate-float"></div>
          <div className="absolute top-1/3 right-1/5 w-6 h-6 border-2 border-gfg-blue/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/5 w-10 h-10 border-2 border-gfg-yellow/20 transform -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/6 w-4 h-4 border-2 border-gfg-green/30 rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>

          {/* Background Dots Pattern */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gfg-green rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>

          {/* Animated Corner Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-gfg-green/20 rounded-tl-2xl"></div>
          <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-gfg-blue/20 rounded-tr-2xl"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-gfg-yellow/20 rounded-bl-2xl"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-gfg-green/20 rounded-br-2xl"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/5 left-1/4 w-40 h-40 bg-gfg-green/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/5 right-1/4 w-48 h-48 bg-gfg-blue/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gfg-yellow/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content Container with Perfect Centering */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          {/* Centered Logo Container */}
          <div className="flex justify-center items-center w-full mb-8">
            <div
              ref={logoRef}
              className="transition-transform duration-500 transform hover:scale-105 flex justify-center"
            >
              <ImageLoader
                src="/gfg.svg"
                alt="GeeksForGeeks"
                className="h-28 mt-8 md:h-36 lg:h-44 w-auto drop-shadow-2xl mx-auto"
                containerClassName="flex justify-center"
                loaderType="pulse"
              />
            </div>
          </div>

          {/* Title and Content */}
          <div className="w-full max-w-6xl mx-auto">
            <h1
              ref={campusTitleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-gfg-black mb-6 leading-tight"
            >
              Campus Body — <span className="text-gfg-dark-green bg-gradient-to-r from-gfg-green to-gfg-dark-green bg-clip-text text-transparent">Allenhouse Institute of Technology</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl lg:text-3xl font-inter text-gfg-gray max-w-3xl mx-auto leading-relaxed mb-12 px-4"
            >
              Empowering future engineers with cutting-edge tech, competitive programming, and real-world innovation.
            </p>

            <div
              ref={ctaGroupRef}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button className="group relative bg-gfg-black text-white px-10 py-5 rounded-2xl font-poppins font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border-2 border-gfg-black transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-xl">🚀</span>
                  Join the Community
                  <span className="text-xl transform group-hover:rotate-45 transition-transform duration-300">⚡</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gfg-green to-gfg-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative bg-transparent text-gfg-dark-green px-10 py-5 rounded-2xl font-poppins font-semibold text-lg border-2 border-gfg-dark-green hover:bg-gfg-dark-green hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  Upcoming Events
                  <span className="text-xl transform group-hover:translate-x-1 transition-transform duration-300">🎯</span>
                </span>
                <div className="absolute inset-0 bg-gfg-dark-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
    @keyframes slideInHorizontal {
      0% { transform: translateY(-1%) scaleX(0.8); opacity: 0.3; }
      100% { transform: translateY(-1%) scaleX(1); opacity: 0.6; }
    }
    
    @keyframes slideInVertical {
      0% { transform: translateX(-1%) scaleY(0.8); opacity: 0.3; }
      100% { transform: translateX(-1%) scaleY(1); opacity: 0.6; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>
      </section>









      {/* Ultra Creative Goodies Showcase */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Minimal Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-4 h-4 bg-gfg-green/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-3 h-3 bg-gfg-blue/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Minimal Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-black text-gfg-black mb-4">
              WIN <span className="text-gfg-green">OFFICIAL GFG SWAGS</span> 🎁
            </h2>
            <div className="w-24 h-1 bg-gfg-green rounded-full mx-auto mb-4"></div>
            <p className="text-xl text-gfg-gray font-inter flex items-center justify-center gap-2">
              Show your skills,get the chance to grab the goodies! 🚀✨🏆
            </p>
          </motion.div>
          {/* Big Images Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "GFG BACKPACK",
                image: "/bag.png"
              },
              {
                name: "GFG HOODIE",
                image: "/hoodie.png"
              },
              {
                name: "GFG PREMIUM",
                image: "/premium.png"
              },
              {
                name: "GFG TSHIRT",
                image: "/tshirt.png"
              }
            ].map((goodie, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Main Container */}
                <div className="relative">
                  {/* Big Image Container */}
                  <motion.div
                    className="relative w-full aspect-square bg-gfg-light-gray rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
                    whileHover={{ rotateZ: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Big Image */}
                    <ImageLoader
                      src={goodie.image}
                      alt={goodie.name}
                      className="w-full h-full object-contain p-8 transform group-hover:scale-110 transition-transform duration-700"
                      containerClassName="w-full h-full"
                      loaderType="dots"
                    />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gfg-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </motion.div>

                  {/* Name Floating Below */}
                  <motion.div
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-lg border border-gfg-light-gray"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-lg font-space-grotesk font-bold text-gfg-black whitespace-nowrap">
                      {goodie.name}
                    </h3>
                  </motion.div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gfg-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gfg-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simple CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-space-grotesk font-bold text-gfg-gray flex items-center justify-center gap-3"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-gfg-green text-2xl">+</span>
                And much more to discover
                <span className="text-gfg-green text-2xl">+</span>
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>








      {/* MIND-BLOWING FEATURE SECTION WITH 3D TILT */}
      <section className="py-28 bg-white relative overflow-hidden" ref={featureSectionRef}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-gfg-black mb-6">
              What We <span className="text-gfg-dark-green">Build</span>
            </h2>
            <div className="w-24 h-1 bg-gfg-dark-green mx-auto rounded-full mb-4"></div>
            <p className="text-xl md:text-2xl font-space-grotesk text-gfg-gray max-w-3xl mx-auto">
              Not just code — <span className="font-bold">future</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                transitionSpeed={1200}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#0F9D58"
                gyroscope={false}
                className="h-full"
              >
                <div className="bg-white rounded-3xl p-8 h-full border border-gfg-light-gray shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <div className="flex justify-center mb-6">
                    <div className="text-5xl transition-transform duration-500 group-hover:scale-125">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-space-grotesk font-bold text-gfg-black mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gfg-gray font-inter text-center leading-relaxed">
                    {feature.description}
                  </p>
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`}></div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {/* Subtle depth elements */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-gfg-dark-green/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gfg-dark-blue/5 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* AMAZING STATS SECTION - CLUB LAUNCH IMPACT */}
      <section className="py-28 bg-gradient-to-br from-gfg-black via-gfg-gray to-gfg-black text-white relative overflow-hidden">
        {/* Animated Tech Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Binary Matrix Effect */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute text-gfg-green font-fira-code text-xs animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>

          {/* Floating Tech Elements */}
          <div className="absolute top-20 left-10 w-8 h-8 border-2 border-gfg-green/20 rounded-lg transform rotate-45 animate-float"></div>
          <div className="absolute top-40 right-20 w-6 h-6 border-2 border-gfg-blue/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 border-2 border-gfg-yellow/20 transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>

          {/* Gradient Orbs */}
          <div className="absolute top-10 left-1/4 w-60 h-60 bg-gfg-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-gfg-blue/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-black mb-6">
              OUR <span className="text-gfg-green">LAUNCH</span> IMPACT
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gfg-green to-gfg-blue rounded-full mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gfg-light-gray max-w-3xl mx-auto">
              Building the largest tech community at Allenhouse, one milestone at a time
            </p>
          </motion.div>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: 300,
                suffix: '+',
                label: 'Community Members',
                description: 'Active developers in our growing network',
                icon: '👥',
                color: 'gfg-green',
                delay: 0
              },
              {
                number: 120,
                suffix: '+',
                label: 'Workshop Certificates',
                description: 'Students skilled through hands-on sessions',
                icon: '📜',
                color: 'gfg-blue',
                delay: 0.1
              },
              {
                number: 43,
                suffix: '',
                label: 'Expert Mentorships',
                description: 'Personal guidance from GFG professionals',
                icon: '🎯',
                color: 'gfg-yellow',
                delay: 0.2
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-4 bg-${stat.color}/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                {/* Stat Card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:border-gfg-green/30 transition-all duration-500">

                  {/* Animated Icon */}
                  <motion.div
                    className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Main Number */}
                  <div className="mb-4">
                    <motion.span
                      className="text-5xl md:text-6xl font-space-grotesk font-black text-white inline-block"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: stat.delay + 0.3 }}
                    >
                      {stat.number}
                      <span className="text-gfg-green">{stat.suffix}</span>
                    </motion.span>
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-space-grotesk font-bold text-white mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gfg-light-gray font-inter text-sm leading-relaxed mb-6">
                    {stat.description}
                  </p>

                  {/* Progress Pulse */}
                  <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-${stat.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: stat.delay + 0.5 }}
                    />
                    <div className={`absolute inset-0 bg-${stat.color} rounded-full animate-ping opacity-30`}></div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-gfg-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-gfg-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-gfg-green/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-gfg-blue/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </motion.div>
            ))}
          </div>

          {/* Growth Note */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-lg text-gfg-light-gray font-inter flex items-center justify-center gap-3">
              <span className="text-gfg-green text-xl">🚀</span>
              And we're just getting started...
              <span className="text-gfg-blue text-xl">✨</span>
            </p>
          </motion.div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>
      </section>

      {/* Enhanced Final CTA */}
      <section ref={finalCtaRef} className="py-32 bg-gfg-light-gray relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gfg-green/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-gfg-blue/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gfg-yellow/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          {/* Enhanced Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-anton font-black text-gfg-black mb-6 leading-tight"
          >
            Ready to{' '}
            <span className="text-gfg-green">Build</span>{' '}
            Your <span className="text-gfg-blue">Legacy</span>?
          </motion.h2>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-space-grotesk text-gfg-gray mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join <span className="text-gfg-green font-semibold">500+ innovators</span> who code, compete, and conquer the future of technology.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            

            {/* Secondary CTA - Meet the Team */}
            <Link to="/team">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#1A1A1A", color: "white" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gfg-black border-2 border-gfg-black px-12 py-5 rounded-2xl font-space-grotesk font-bold text-xl hover:bg-gfg-black hover:text-white transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <Users2 size={24} />
                  <span>Join The Community</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gfg-gray font-inter"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gfg-green rounded-full animate-pulse"></div>
              <span>No prior experience required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gfg-blue rounded-full animate-pulse"></div>
              <span>Beginner to advanced tracks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gfg-yellow rounded-full animate-pulse"></div>
              <span>24/7 community support</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;