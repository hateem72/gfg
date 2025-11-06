// src/components/TeamPage.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageLoader from '../components/ImageLoader';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TeamPage = () => {
  const teamRef = useRef(null);
  const presidentRef = useRef(null);
  const teamGridRef = useRef(null);
  const sectionRefs = useRef([]);

  // Sample team data
  const teamData = {
    president: {
      name: "Mohd Hateem",
      post: "Campus Mantri",
      image: "/hateem.png",
      linkedin: "https://linkedin.com/in/rahulsharma",
      instagram: "https://instagram.com/rahulsharma",
      batch: "2023-2027",
      department: "Computer Science & Engineering",
      description: "Leading the tech revolution with passion and innovation. Dedicated to creating impactful learning experiences for the community."
    },
    coreTeam: [
      {
        name: "Prakhar Shukla",
        post: "Technical Head",
        image: "/prakhar.png",
        linkedin: "#",
        instagram: "#",
        batch: "2023-2027"
      },
      {
        name: "Saniya Siddiqui",
        post: "Event Head",
        image: "/saniya.png",
        linkedin: "#",
        instagram: "#",
        batch: "2023-2027"
      },
      {
        name: "Krish Awasthi",
        post: "Outreach head",
        image: "/krish.png",
        linkedin: "#",
        instagram: "#",
        batch: "2023-2027"
      },
      {
        name: "Abhay Kushwaha",
        post: "Social Media Head",
        image: "/abhay.png",
        linkedin: "#",
        instagram: "#",
        batch: "2023-2027"
      },
      {
        name: "Amrit Pal",
        post: "Logistics & Resource Lead",
        image: "/amrit.png",
        linkedin: "#",
        instagram: "#",
        batch: "2023-2027"
      }
    ]
  };

  useEffect(() => {
    // President card animation
    const presidentTl = gsap.timeline({
      scrollTrigger: {
        trigger: presidentRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    presidentTl.fromTo(presidentRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // Team grid animation
    const teamTl = gsap.timeline({
      scrollTrigger: {
        trigger: teamGridRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    teamTl.fromTo(teamGridRef.current.children,
      {
        y: 80,
        opacity: 0,
        rotationY: 15
      },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }
    );

    // Section animations
    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white py-20" ref={teamRef}>
      {/* Header Section */}
      <section className="container mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16 lg:mb-20">
        <div ref={addToRefs}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-anton font-black text-gfg-black mb-4 sm:mb-6 tracking-tight">
            MEET OUR <span className="text-gfg-green">TEAM</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gfg-green mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-gfg-gray max-w-3xl mx-auto leading-relaxed px-4">
            The brilliant minds driving innovation and excellence at GeeksForGeeks Campus Body
          </p>
        </div>
      </section>

      {/* President Section - Ultimate Creative Design */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-20 lg:mb-32">
        <div
          ref={presidentRef}
          className="max-w-6xl mx-auto relative"
        >
          {/* Background Glow Effects */}
          <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-gfg-green/10 via-gfg-blue/10 to-gfg-yellow/10 rounded-2xl sm:rounded-4xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

          {/* Main President Card */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-4xl border border-gfg-light-gray overflow-hidden transform hover:scale-105 transition-all duration-700 group">

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F9D58' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section - Left Side */}
              <div className="relative p-6 sm:p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-gfg-light-gray to-white">
                {/* Floating Elements */}
                <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-4 sm:w-6 h-4 sm:h-6 border-2 border-gfg-green rounded-full animate-ping"></div>
                <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-3 sm:w-4 h-3 sm:h-4 border-2 border-gfg-blue rounded-full animate-bounce"></div>

                <div className="relative z-10">
                  {/* Main Image Container with Creative Effects */}
                  <div className="relative">
                    {/* Outer Glow Ring */}
                    <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-gfg-green to-gfg-blue rounded-2xl sm:rounded-3xl opacity-20 blur-xl animate-pulse-slow"></div>

                    {/* Middle Animated Ring */}
                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-gfg-blue to-gfg-yellow rounded-xl sm:rounded-2xl opacity-30 animate-spin-slow" style={{ animationDuration: '8s' }}></div>

                    {/* Inner Image Container */}
                    <div className="relative w-60 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 bg-white rounded-xl sm:rounded-2xl overflow-hidden border-4 sm:border-8 border-white shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-700">
                      <ImageLoader
                        src={teamData.president.image}
                        alt={teamData.president.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                        containerClassName="w-full h-full"
                        loaderType="pulse"
                      />

                      {/* Shine Overlay Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gfg-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Floating Badges */}
                    <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-gfg-yellow text-gfg-black px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-rajdhani font-bold text-xs sm:text-sm tracking-widest shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500 z-20">
                      🏆 PRESIDENT
                    </div>

                    <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-gfg-green text-white px-3 sm:px-5 py-1 sm:py-2 rounded-xl sm:rounded-2xl font-fira-code text-xs font-bold shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 z-20">
                      {teamData.president.batch}
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Section - Right Side */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative bg-white">
                {/* Corner Decorations */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-gfg-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-gfg-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="space-y-6 sm:space-y-8">
                  {/* Header Section */}
                  <div>
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gfg-green rounded-full animate-pulse"></div>
                      <span className="text-gfg-gray font-inter text-xs sm:text-sm uppercase tracking-widest">Leadership</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-black text-gfg-black mb-3 sm:mb-4 leading-tight">
                      {teamData.president.name.split(' ')[0]}
                      <br />
                      <span className="text-gfg-green">{teamData.president.name.split(' ')[1]}</span>
                    </h2>

                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-gfg-light-gray px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl">
                      <div className="w-2 h-2 bg-gfg-green rounded-full animate-pulse"></div>
                      <span className="text-sm sm:text-lg font-rajdhani font-bold text-gfg-green tracking-widest">
                        {teamData.president.post}
                      </span>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gfg-light-gray rounded-xl sm:rounded-2xl transform group-hover:translate-x-2 transition-transform duration-300">
                      <div className="text-xl sm:text-2xl">🎓</div>
                      <div>
                        <p className="text-xs sm:text-sm font-inter text-gfg-gray">Education</p>
                        <p className="text-sm sm:text-base font-space-grotesk font-semibold text-gfg-black">{teamData.president.department}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gfg-light-gray rounded-xl sm:rounded-2xl transform group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                      <div className="text-xl sm:text-2xl">⚡</div>
                      <div>
                        <p className="text-xs sm:text-sm font-inter text-gfg-gray">Batch</p>
                        <p className="text-sm sm:text-base font-space-grotesk font-semibold text-gfg-black">{teamData.president.batch}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="border-l-4 border-gfg-green pl-4 sm:pl-6 py-2">
                    <p className="text-gfg-gray text-sm sm:text-lg leading-relaxed font-inter italic">
                      "{teamData.president.description}"
                    </p>
                  </div>

                  {/* Enhanced Social Links */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 pt-4 sm:pt-6 border-t border-gfg-light-gray">
                    <div className="flex space-x-3 sm:space-x-4">
                      <a
                        href={teamData.president.linkedin}
                        className="relative w-12 sm:w-14 h-12 sm:h-14 bg-gfg-light-gray rounded-xl sm:rounded-2xl flex items-center justify-center text-gfg-gray hover:bg-gfg-blue hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group/social"
                      >
                        <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gfg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
                          Connect on LinkedIn
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gfg-black rotate-45"></div>
                        </div>
                      </a>

                      <a
                        href={teamData.president.instagram}
                        className="relative w-12 sm:w-14 h-12 sm:h-14 bg-gfg-light-gray rounded-xl sm:rounded-2xl flex items-center justify-center text-gfg-gray hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group/social"
                      >
                        <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gfg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
                          Follow on Instagram
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gfg-black rotate-45"></div>
                        </div>
                      </a>
                    </div>

                    {/* Contact Button */}
                    <a
                      href="https://www.linkedin.com/in/hateem-ansari-3377b72a3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 bg-gfg-green text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-rajdhani font-bold text-sm sm:text-base hover:bg-gfg-dark-green transform hover:scale-105 hover:translate-x-2 transition-all duration-300 group/contact"
                    >
                      <span>Get in Touch</span>
                      <span className="transform group-hover/contact:translate-x-1 transition-transform duration-300">→</span>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto px-4 sm:px-6">
        <div ref={addToRefs} className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Elegant Title */}
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-black text-gfg-black mb-3 sm:mb-4">
              CORE <span className="text-gfg-green">TEAM</span>
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-gfg-green to-gfg-blue mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-gfg-gray max-w-2xl mx-auto italic px-4">
              The architects behind our technological excellence
            </p>
          </div>
        </div>

        {/* Creative Team Grid */}
        <div
          ref={teamGridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto"
        >
          {teamData.coreTeam.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Background Glow Effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-gfg-green/10 via-gfg-blue/10 to-gfg-yellow/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Main Card */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl border border-gfg-light-gray overflow-hidden transform group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-500">

                {/* Top Color Bar */}
                <div className="h-1 sm:h-2 bg-gradient-to-r from-gfg-green to-gfg-blue"></div>

                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-gfg-black mb-2 group-hover:text-gfg-green transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-gfg-light-gray px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                        <div className="w-2 h-2 bg-gfg-green rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-rajdhani font-bold text-gfg-green tracking-widest">
                          {member.post}
                        </span>
                      </div>
                    </div>

                    {/* Batch Badge */}
                    <div className="bg-gfg-black text-white px-2 sm:px-3 py-1 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-xs font-fira-code font-bold">{member.batch}</span>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                    {/* Big Image Section */}
                    <div className="md:col-span-1 flex justify-center">
                      <div className="relative">
                        {/* Floating Effect Container */}
                        <div className="relative transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                          {/* Background Shape */}
                          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-gfg-green/20 to-gfg-blue/20 rounded-xl sm:rounded-2xl transform rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                          {/* Main Image */}
                          <div className="w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-52 relative overflow-hidden rounded-lg sm:rounded-xl border-2 sm:border-4 border-white shadow-2xl bg-white">
                            <ImageLoader
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                              containerClassName="w-full h-full"
                              loaderType="dots"
                            />
                            {/* Shine Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="md:col-span-2 space-y-3 sm:space-y-4">
                      {/* Department */}
                      <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gfg-light-gray rounded-lg">
                        <div className="text-gfg-green text-base sm:text-lg">🎓</div>
                        <div>
                          <p className="text-xs sm:text-sm font-inter text-gfg-gray">Department</p>
                          <p className="text-sm sm:text-base font-space-grotesk font-semibold text-gfg-black">{member.department || 'Computer Science & Engineering'}</p>
                        </div>
                      </div>

                      {/* Expertise */}
                      <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gfg-light-gray rounded-lg">
                        <div className="text-gfg-blue text-base sm:text-lg">⚡</div>
                        <div>
                          <p className="text-xs sm:text-sm font-inter text-gfg-gray">Expertise</p>
                          <p className="text-sm sm:text-base font-space-grotesk font-semibold text-gfg-black">
                            {member.post.includes('Technical') ? 'Full Stack Development' :
                              member.post.includes('Event') ? 'Project Management' :
                                member.post.includes('Outreach') ? 'Community Building' :
                                member.post.includes('Social Media') ? 'Digital Marketing' :
                                member.post.includes('Logistics') ? 'Operations Management' : 'Leadership & Strategy'}
                          </p>
                        </div>
                      </div>

                      {/* Social Links - Creative Design */}
                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gfg-light-gray">
                        <div className="flex space-x-2 sm:space-x-3">
                          <a
                            href={member.linkedin}
                            className="relative w-10 sm:w-12 h-10 sm:h-12 bg-gfg-light-gray rounded-lg sm:rounded-xl flex items-center justify-center text-gfg-gray hover:bg-gfg-blue hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group/link"
                          >
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gfg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
                              Connect on LinkedIn
                            </div>
                          </a>

                          <a
                            href={member.instagram}
                            className="relative w-10 sm:w-12 h-10 sm:h-12 bg-gfg-light-gray rounded-lg sm:rounded-xl flex items-center justify-center text-gfg-gray hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group/link"
                          >
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gfg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
                              Follow on Instagram
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-r-2 border-gfg-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-l-2 border-gfg-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Team CTA */}
      <section ref={addToRefs} className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-20 text-center">
        <div className="bg-gfg-light-gray rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-anton font-black text-gfg-black mb-4 sm:mb-6">
            WANT TO JOIN OUR <span className="text-gfg-green">TEAM</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gfg-gray mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Be part of the revolution and help us create amazing experiences for the tech community.
          </p>
          <button className="bg-gfg-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-rajdhani font-bold text-base sm:text-lg hover:bg-gfg-dark-green transform hover:scale-105 transition-all duration-300 shadow-lg">
            SOON
           </button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;