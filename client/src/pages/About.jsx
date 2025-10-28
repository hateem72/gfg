import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageLoader from '../components/ImageLoader';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutPage = () => {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const mentorsRef = useRef(null);
  const outcomesRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Enhanced hero animation
    const heroTl = gsap.timeline();
    heroTl.fromTo(heroRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      }
    );

    // Enhanced section animations with stagger
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          {
            y: 100,
            opacity: 0,
            rotationY: 10
          },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
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

    // Enhanced floating animations
    gsap.to(".float-element", {
      y: 30,
      rotation: 5,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

    // Text reveal animations
    gsap.utils.toArray('.text-reveal').forEach((text, i) => {
      gsap.fromTo(text,
        {
          y: 50,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
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

  // Mentors data
  const mentorsData = [
    {
      name: "Prof. (Dr.) Sudhir Kumar Singh",
      position: "Supported By",
      image: "/sudhir.png",
      department: "Head of Department - CSE",
      expertise: ["Academic Leadership", "Research Guidance", "Industry Partnerships"],
      achievement: "15+ Years in Technical Education"
    },
    {
      name: "Prof. Anshuman Tyagi",
      position: "CP Mentor",
      image: "/anshuman.png",
      department: "CSE Professor & DSA Trainer",
      expertise: ["Competitive Programming", "Web Technologies", "Project Guidance"],
      achievement: "Industry Expert with 10+ Years Experience"
    },
    {
      name: "Prof. Arunendra Singh",
      position: "Development Mentor",
      image: "/arunendra.png",
      department: "CSE Professor",
      expertise: ["Competitive Programming", "Web Technologies", "Project Guidance"],
      achievement: "Industry Expert with 10+ Years Experience"
    },
    {
      name: "Prof. Amit Kr. Sinha",
      position: "Innovation Mentor",
      image: "/amit.png",
      department: "Incubation & Innovation Department",
      expertise: ["Competitive Programming", "Web Technologies", "Project Guidance"],
      achievement: "Industry Expert with 10+ Years Experience"
    },
    {
      name: "Prof. Hari Mohan Dixit",
      position: "Event Mentor",
      image: "/hmd.png",
      department: "CSE Professor",
      expertise: ["Competitive Programming", "Web Technologies", "Project Guidance"],
      achievement: "Industry Expert with 10+ Years Experience"
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 overflow-hidden" ref={aboutRef}>
      {/* Enhanced Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute float-element ${i % 3 === 0 ? 'border-gfg-green/10' :
                i % 3 === 1 ? 'border-gfg-blue/10' : 'border-gfg-yellow/10'
              }`}
            style={{
              width: `${20 + i * 8}px`,
              height: `${20 + i * 8}px`,
              top: `${10 + i * 12}%`,
              left: `${5 + i * 15}%`,
              borderWidth: '2px',
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              transform: `rotate(${i * 45}deg)`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Hero Section */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <div ref={heroRef} className="text-center">
          <section className="container mx-auto px-6 text-center mb-20">
            <div ref={addToRefs}>
              <h1 className="text-5xl md:text-7xl font-anton font-black text-gfg-black mb-6 tracking-tight">
                ABOUT <span className="text-gfg-green">US</span>
              </h1>
              <div className="w-24 h-1 bg-gfg-green mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl font-inter text-gfg-gray max-w-3xl mx-auto leading-relaxed">
                Launching the Premier Tech Community at Allenhouse Institute of Technology
              </p>
            </div>
          </section>

          {/* Club Launch Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Visionary Start",
                description: "Building from ground up with innovative approach",
                color: "gfg-green"
              },
              {
                icon: "🚀",
                title: "Future Ready",
                description: "Preparing students for tomorrow's technology",
                color: "gfg-blue"
              },
              {
                icon: "🌟",
                title: "Community First",
                description: "Creating a collaborative learning environment",
                color: "gfg-yellow"
              }
            ].map((highlight, index) => (
              <div key={index} className="group text-center transform hover:scale-110 transition-all duration-500">
                <div className={`text-5xl mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <div className={`text-2xl font-space-grotesk font-black text-${highlight.color} mb-3`}>
                  {highlight.title}
                </div>
                <div className="text-gfg-gray font-inter leading-relaxed">
                  {highlight.description}
                </div>
                <div className={`w-12 h-1 bg-${highlight.color} mx-auto mt-4 transform group-hover:scale-x-150 transition-transform duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section ref={missionRef} className="container mx-auto px-6 mb-32 relative z-10">
        <div ref={addToRefs} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
            {/* Enhanced Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-4 h-4 bg-gfg-green rounded-full animate-pulse shadow-lg"></div>
                <h2 className="text-5xl md:text-6xl font-space-grotesk font-black text-gfg-black">
                  OUR <span className="text-gfg-green">MISSION</span>
                </h2>
              </div>

              <div className="space-y-8">
                <p className="text-2xl text-gfg-gray font-inter leading-relaxed text-reveal">
                  To establish a dynamic platform where students can transform their theoretical knowledge into practical expertise through hands-on projects, coding challenges, and industry collaborations.
                </p>

                <div className="space-y-6">
                  {[
                    "Create an innovative learning ecosystem beyond classroom boundaries",
                    "Bridge the gap between academic curriculum and industry requirements",
                    "Foster a culture of collaborative problem-solving and creativity",
                    "Build a strong network of tech enthusiasts and future innovators"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-6 group transform hover:translate-x-4 transition-transform duration-500">
                      <div className="w-8 h-8 bg-gfg-green rounded-2xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-lg text-gfg-gray font-inter leading-relaxed group-hover:text-gfg-black transition-colors duration-300 flex-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Visual Element */}
            <div className="relative">
              <div className="bg-white rounded-2xl sm:rounded-4xl p-6 sm:p-8 lg:p-12 text-center border-2 border-gfg-light-gray shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6 lg:mb-8 transform hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-space-grotesk font-black text-gfg-black mb-4 sm:mb-6 lg:mb-8">
                  Launch Focus Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {['Competitive Programming', 'Web Development', 'AI/ML Workshops', 'Tech Seminars'].map((area, index) => (
                    <div key={index} className="bg-gfg-light-gray p-4 sm:p-6 rounded-2xl border-2 border-white transform hover:scale-105 hover:border-gfg-green transition-all duration-300 shadow-lg">
                      <div className="text-sm sm:text-lg font-rajdhani font-bold text-gfg-green text-center sm:text-left">{area}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Mentors Section - Big Image Focus */}
      <section ref={mentorsRef} className="container mx-auto px-6 mb-32 relative z-10">
        <div ref={addToRefs} className="max-w-8xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-black text-gfg-black mb-6">
              OUR <span className="text-gfg-blue">MENTORS</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-gfg-green to-gfg-blue rounded-full mx-auto mb-8"></div>
            <p className="text-2xl text-gfg-gray max-w-3xl mx-auto text-reveal">
              Visionary leaders guiding our journey towards technological excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {mentorsData.map((mentor, index) => (
              <div key={index} className="group relative">
                {/* Background Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-br from-gfg-blue/5 to-gfg-green/5 rounded-4xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

                {/* Main Mentor Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl hover:shadow-4xl border-2 border-gfg-light-gray overflow-hidden transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-700">

                  {/* Header Section - Details Above Image */}
                  <div className="p-8 pb-0 text-center">
                    {/* Name */}
                    <h3 className="text-3xl font-space-grotesk font-black text-gfg-black mb-3 group-hover:text-gfg-blue transition-colors duration-500">
                      {mentor.name}
                    </h3>

                    {/* Position Badge */}
                    <div className="inline-flex items-center gap-3 bg-gfg-light-gray px-6 py-3 rounded-2xl mb-4 transform group-hover:scale-105 transition-all duration-500">
                      <div className="w-2 h-2 bg-gfg-green rounded-full animate-pulse"></div>
                      <span className="font-rajdhani font-bold text-gfg-green text-lg tracking-wide">
                        {mentor.position}
                      </span>
                    </div>

                    {/* Department */}
                    <div className="text-gfg-gray font-inter text-lg mb-8">
                      {mentor.department}
                    </div>
                  </div>

                  {/* Big Image Section - 4:5 Ratio */}
                  <div className="px-8 pb-8">
                    <div className="relative">
                      {/* Outer Glow Effect */}
                      <div className="absolute -inset-6 bg-gradient-to-br from-gfg-green/15 to-gfg-blue/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

                      {/* Middle Ring Effect */}
                      <div className="absolute -inset-3 bg-gradient-to-br from-gfg-blue/10 to-gfg-green/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>

                      {/* Main Image Container - 4:5 Ratio */}
                      <div className="relative w-full h-80 bg-gfg-light-gray rounded-2xl overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700">
                        <ImageLoader
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                          containerClassName="w-full h-full"
                          loaderType="spin"
                        />

                        {/* Shine Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gfg-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Status Indicator */}
                        <div className="absolute bottom-4 right-4 w-5 h-5 bg-gfg-green rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                      </div>

                      {/* Floating Mentor Badge */}
                      <div className="absolute -top-3 -right-3 bg-gfg-yellow text-gfg-black px-4 py-2 rounded-2xl font-rajdhani font-bold text-sm tracking-widest transform group-hover:rotate-12 transition-transform duration-500 shadow-lg z-10">
                        MENTOR
                      </div>
                    </div>
                  </div>

                  {/* Simple Contact Section */}

                  {/* Corner Accents */}
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-gfg-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-gfg-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Background Elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gfg-green/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-gfg-blue/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>
            ))}
          </div>

          {/* Mentors Impact Stats */}
          <div ref={addToRefs} className="mt-20 bg-white rounded-3xl p-12 border-2 border-gfg-light-gray shadow-2xl text-center transform hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl font-space-grotesk font-black text-gfg-black mb-8">
              Guided by Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "Years Experience", icon: "🎓", color: "gfg-green" },
                { number: "Expert", label: "Industry Knowledge", icon: "💼", color: "gfg-blue" },
                { number: "Visionary", label: "Leadership", icon: "🌟", color: "gfg-yellow" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-2xl font-space-grotesk font-bold text-${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-inter text-gfg-gray">
                    {stat.label}
                  </div>
                  <div className={`w-8 h-1 bg-${stat.color} mx-auto mt-3 transform group-hover:scale-x-150 transition-transform duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Vision Section */}
      <section ref={visionRef} className="container mx-auto px-6 mb-32 relative z-10">
        <div ref={addToRefs} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
            {/* Enhanced Visual Element */}
            <div className="relative order-2 xl:order-1">
              <div className="bg-white rounded-4xl p-12 text-center border-2 border-gfg-light-gray shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="text-8xl mb-8 transform hover:scale-110 transition-transform duration-300">🔭</div>
                <h3 className="text-3xl font-space-grotesk font-black text-gfg-black mb-8">
                  Launch Roadmap
                </h3>
                <div className="space-y-4">
                  {['Workshop Series', 'Hackathon Launch', 'Industry Connect'].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-gfg-light-gray p-4 rounded-2xl border-2 border-white transform hover:scale-105 hover:border-gfg-blue transition-all duration-300">
                      <div className="w-3 h-3 bg-gfg-blue rounded-full animate-pulse"></div>
                      <div className="text-lg font-inter font-semibold text-gfg-black">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="order-1 xl:order-2 space-y-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-4 h-4 bg-gfg-blue rounded-full animate-pulse shadow-lg"></div>
                <h2 className="text-5xl md:text-6xl font-space-grotesk font-black text-gfg-black">
                  OUR <span className="text-gfg-blue">VISION</span>
                </h2>
              </div>

              <div className="space-y-8">
                <p className="text-2xl text-gfg-gray font-inter leading-relaxed text-reveal">
                  To position Allenhouse Institute of Technology as a hub of technological innovation, producing skilled developers and future tech leaders who will drive digital transformation across industries.
                </p>

                <div className="bg-white border-2 border-gfg-light-gray rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-500">
                  <h4 className="text-2xl font-space-grotesk font-black text-gfg-black mb-6">Strategic Objectives</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Skill Development", desc: "Comprehensive technical training programs", icon: "⚡" },
                      { title: "Industry Connect", desc: "Partnerships with tech companies", icon: "🤝" },
                      { title: "Innovation Culture", desc: "Foster creative problem-solving", icon: "💡" },
                      { title: "Community Growth", desc: "Expand student participation", icon: "🌱" }
                    ].map((obj, index) => (
                      <div key={index} className="bg-gfg-light-gray p-6 rounded-2xl border-2 border-white transform hover:scale-105 transition-all duration-300 group">
                        <div className="text-2xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                          {obj.icon}
                        </div>
                        <div className="font-space-grotesk font-bold text-gfg-black mb-2 text-lg">{obj.title}</div>
                        <div className="text-gfg-gray font-inter text-sm">{obj.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Expected Outcomes Section */}
      <section ref={outcomesRef} className="container mx-auto px-6 mb-32 relative z-10">
        <div ref={addToRefs} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-black text-gfg-black mb-6">
            EXPECTED <span className="text-gfg-green">IMPACT</span>
          </h2>
          <div className="w-32 h-2 bg-gfg-green rounded-full mx-auto mb-8"></div>
          <p className="text-2xl text-gfg-gray max-w-3xl mx-auto text-reveal">
            Transforming the learning experience through practical technology education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {[
            {
              icon: "💼",
              title: "Career Readiness",
              outcomes: [
                "Enhanced technical interview skills",
                "Industry-standard project experience",
                "Professional networking opportunities",
                "Resume and portfolio development"
              ],
              color: "gfg-green"
            },
            {
              icon: "🚀",
              title: "Skill Advancement",
              outcomes: [
                "Practical programming expertise",
                "Latest technology stack exposure",
                "Team collaboration experience",
                "Problem-solving capabilities"
              ],
              color: "gfg-blue"
            },
            {
              icon: "🌐",
              title: "Industry Exposure",
              outcomes: [
                "Guest sessions from industry experts",
                "Real-world project opportunities",
                "Internship guidance and support",
                "Professional community building"
              ],
              color: "gfg-yellow"
            },
            {
              icon: "🏆",
              title: "Competitive Excellence",
              outcomes: [
                "Hackathon participation experience",
                "Coding competition preparation",
                "Open source contribution guidance",
                "Technical presentation skills"
              ],
              color: "gfg-green"
            },
            {
              icon: "🤝",
              title: "Network Building",
              outcomes: [
                "Peer learning communities",
                "Alumni network access",
                "Faculty mentorship relationships",
                "Industry professional connections"
              ],
              color: "gfg-blue"
            },
            {
              icon: "💡",
              title: "Innovation Mindset",
              outcomes: [
                "Creative solution development",
                "Project ideation and execution",
                "Research-oriented approach",
                "Entrepreneurial thinking"
              ],
              color: "gfg-yellow"
            }
          ].map((card, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl border-2 border-gfg-light-gray p-10 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500">
              <div className={`text-6xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-space-grotesk font-black text-gfg-black mb-8 text-center">
                {card.title}
              </h3>
              <div className="space-y-4">
                {card.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item transform hover:translate-x-2 transition-transform duration-300">
                    <div className={`w-3 h-3 bg-${card.color} rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-lg`}></div>
                    <div className="text-base text-gfg-gray font-inter leading-relaxed group-hover/item:text-gfg-black transition-colors duration-300 flex-1">
                      {outcome}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section ref={addToRefs} className="container mx-auto px-6 mt-32 relative z-10">
        <div className="bg-white rounded-4xl p-20 text-center border-2 border-gfg-light-gray shadow-3xl transform hover:scale-105 transition-all duration-500">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-black text-gfg-black mb-8">
            Ready to <span className="text-gfg-green">Launch</span> With Us?
          </h2>
          <p className="text-2xl text-gfg-gray mb-12 max-w-3xl mx-auto font-inter text-reveal">
            Be part of the founding community that shapes the future of technology education at Allenhouse Institute of Technology
          </p>
          <button className="bg-gfg-green text-white px-16 py-6 rounded-3xl font-rajdhani font-black text-xl tracking-wider hover:bg-gfg-dark-green transform hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg">
            JOIN THE TECH COMMUNITY
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;