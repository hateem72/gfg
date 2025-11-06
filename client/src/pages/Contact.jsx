import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Users, Zap, Sparkles, ArrowRight, Shield, Award, HelpCircle, Code, Lightbulb, Calendar, UserPlus, Trophy } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Connect = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const contactInfoRef = useRef(null);
  const socialRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
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

    // Enhanced floating animations for geometric elements
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

    // Contact cards stagger animation
    gsap.utils.toArray('.contact-card').forEach((card, i) => {
      gsap.fromTo(card,
        {
          y: 80,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.1
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: '23csme054hateem@allenhouse.in',
      subtitle: 'We respond within 24 hours',
      color: 'bg-gfg-green',
      delay: 0.1
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9250324091',
      subtitle: 'Outreach Head',
      color: 'bg-gfg-blue',
      delay: 0.2
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Allenhouse Institute of Technology',
      subtitle: 'Rooma, Kanpur',
      color: 'bg-gfg-yellow',
      delay: 0.3
    },
    {
      icon: Clock,
      title: 'Club Hours',
      details: 'Monday - Friday',
      subtitle: '10:00 AM - 4:00 PM',
      color: 'bg-gfg-dark-green',
      delay: 0.4
    }
  ];

  const socialLinks = [
    {
      platform: 'WhatsApp Community',
      handle: '@AllenhouseCommunity',
      icon: FaWhatsapp,
      color: 'from-green-500 to-green-600',
      link: 'https://chat.whatsapp.com/your-group-link',
      members: '<300 Members'
    },
    {
      platform: 'LinkedIn',
      handle: '@gfg_campusbody_ait',
      icon: FaLinkedin,
      color: 'from-blue-600 to-blue-700',
      link: 'www.linkedin.com/in/geeksforgeeks-campus-body-ait-9688a738a',
      members: '>100 Followers'
    },
    {
      platform: 'Instagram',
      handle: '@geeksforgeeks.ait.kanpur',
      icon: FaInstagram,
      color: 'from-pink-500 to-purple-600',
      link: 'https://www.instagram.com/geeksforgeeks.ait.kanpur',
      members: '>100 Followers'
    },
  ];

  const faqs = [
    {
      question: "How can I join the GFG Campus Club?",
      answer: "Simply Join the Whatsapp Community",
      icon: UserPlus,
      color: "gfg-green",
      category: "Getting Started"
    },
    {
      question: "What programming languages do you focus on?",
      answer: "We cover everything from fundamentals (C/C++) to web development (MERN stack), AI/ML, competitive programming, and emerging technologies like blockchain and cloud computing.",
      icon: Code,
      color: "gfg-blue",
      category: "Technical"
    },
    {
      question: "Are there any membership fees?",
      answer: "No! Our community is completely free for all Allenhouse students. We believe in accessible tech education for everyone. All workshops, events, and resources are provided at no cost.",
      icon: Shield,
      color: "gfg-yellow",
      category: "Membership"
    },
    {
      question: "How often do you conduct workshops and events?",
      answer: "We host 2-3 workshops yearly, monthly Contest, and regular coding competitions. Plus special collaborative projects throughout the semester!",
      icon: Calendar,
      color: "gfg-green",
      category: "Events"
    },
    {
      question: "Can beginners join the club?",
      answer: "Absolutely! We have dedicated beginner tracks, mentorship programs, and a supportive community to help you start your coding journey. Our 'Zero to Hero' program is perfect for newcomers.",
      icon: Lightbulb,
      color: "gfg-blue",
      category: "Beginners"
    },
    {
      question: "What opportunities are available for advanced members?",
      answer: "Advanced members can lead projects, mentor beginners, participate in national hackathons, get industry exposure through our partner companies, and even contribute to open-source projects.",
      icon: Trophy,
      color: "gfg-yellow",
      category: "Advanced"
    }
  ];

  const stats = [
    { number: '300+', label: 'Active Members', icon: Users },
    { number: '2+', label: 'Events Hosted', icon: Zap },
    { number: '250+', label: 'Students Empowered', icon: Award },
    { number: '24/7', label: 'Community Support', icon: Shield }
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
    hidden: { y: 50, opacity: 0 },
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
    <div className="min-h-screen bg-white text-gfg-black overflow-hidden" ref={contactRef}>
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

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gfg-light-gray to-white">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Subtle geometric patterns */}
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 border-gfg-green/20 rounded-full"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border-2 border-gfg-blue/20 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-2 border-gfg-yellow/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div ref={heroRef}>
            <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 rounded-full bg-gfg-green/10 border border-gfg-green/20">
              <Sparkles size={14} className="text-gfg-green sm:w-4 sm:h-4" />
              <span className="text-gfg-green font-mono text-xs sm:text-sm">GET IN TOUCH</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-anton font-black mb-4 sm:mb-6">
              <span className="text-gfg-black">LET'S</span>{' '}
              <span className="text-gfg-green">CONNECT</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gfg-gray max-w-3xl mx-auto mb-6 sm:mb-8 font-inter leading-relaxed text-reveal px-4">
              Ready to start your tech journey? We're here to help you every step of the way.
              Reach out and let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center p-3 sm:p-4 lg:p-6 text-reveal"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gfg-green/10 mb-3 sm:mb-4">
                    <Icon size={20} className="text-gfg-green sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gfg-black mb-1 sm:mb-2 font-montserrat">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gfg-gray font-inter">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={contactInfoRef} className="py-16 sm:py-20 bg-gfg-light-gray">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-anton font-black mb-4 sm:mb-6">
              <span className="text-gfg-black">GET IN</span>{' '}
              <span className="text-gfg-green">TOUCH</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gfg-gray max-w-2xl mx-auto font-inter px-4 text-reveal">
              Multiple ways to connect with our vibrant tech community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 text-center group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 contact-card"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl ${item.color} mb-3 sm:mb-4 lg:mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={18} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gfg-black mb-2 sm:mb-3 font-space-grotesk">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gfg-black font-semibold mb-1 sm:mb-2 font-inter break-words">
                    {item.details}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-gfg-gray font-inter">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section ref={socialRef} className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-anton font-black mb-4 sm:mb-6">
              <span className="text-gfg-black">JOIN OUR</span>{' '}
              <span className="text-gfg-blue">COMMUNITY</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gfg-gray max-w-2xl mx-auto font-inter text-reveal px-4">
              Connect with us on social platforms and be part of the conversation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.link}
                  className="group bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:translate-x-2 text-reveal"
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={20} className="text-white sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-left min-w-0 flex-1">
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gfg-black font-space-grotesk truncate">
                          {social.platform}
                        </h3>
                        <p className="text-xs sm:text-sm text-gfg-gray font-inter truncate">{social.handle}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-gfg-gray group-hover:text-gfg-green group-hover:translate-x-2 transition-all duration-300 flex-shrink-0 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base text-gfg-green font-semibold font-inter">{social.members}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 sm:py-20 bg-gfg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Header */}
          <div ref={addToRefs} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-anton font-black mb-4 text-gfg-black">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-base sm:text-lg text-gfg-gray font-inter max-w-2xl mx-auto">
              Everything you need to know about joining our tech community
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isActive = activeFaq === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gfg-green/10 flex-shrink-0">
                        <Icon size={20} className="text-gfg-green" />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-gfg-black font-space-grotesk pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <ArrowRight 
                        size={20} 
                        className={`text-gfg-gray transition-transform duration-200 ${
                          isActive ? 'rotate-90 text-gfg-green' : ''
                        }`} 
                      />
                    </div>
                  </button>

                  {/* Answer Section */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="pl-14">
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gfg-green">
                          <p className="text-gfg-gray text-sm sm:text-base leading-relaxed font-inter">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gfg-black mb-3 font-space-grotesk">
                Still Have Questions?
              </h3>
              <p className="text-gfg-gray mb-6 font-inter">
                Our team is here to help you get started on your tech journey
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/community"
                  className="bg-white text-gfg-green border-2 border-gfg-green px-6 py-3 rounded-lg font-space-grotesk font-semibold hover:bg-gfg-green hover:text-white transition-all duration-200"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;