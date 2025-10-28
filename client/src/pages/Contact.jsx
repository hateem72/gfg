import React, { useEffect, useRef } from 'react';
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
      details: '+91 92503 24091',
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
      <section className="relative py-24 bg-gradient-to-br from-gfg-light-gray to-white">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Subtle geometric patterns */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gfg-green/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-gfg-blue/20 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-gfg-yellow/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div ref={heroRef}>
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-gfg-green/10 border border-gfg-green/20">
              <Sparkles size={16} className="text-gfg-green" />
              <span className="text-gfg-green font-mono text-sm">GET IN TOUCH</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-anton font-black mb-6">
              <span className="text-gfg-black">LET'S</span>{' '}
              <span className="text-gfg-green">CONNECT</span>
            </h1>

            <p className="text-2xl text-gfg-gray max-w-3xl mx-auto mb-8 font-inter leading-relaxed text-reveal">
              Ready to start your tech journey? We're here to help you every step of the way.
              Reach out and let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center p-6 text-reveal"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gfg-green/10 mb-4">
                    <Icon size={28} className="text-gfg-green" />
                  </div>
                  <div className="text-3xl font-bold text-gfg-black mb-2 font-montserrat">
                    {stat.number}
                  </div>
                  <div className="text-gfg-gray font-inter">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={contactInfoRef} className="py-20 bg-gfg-light-gray">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton font-black mb-4 sm:mb-6">
              <span className="text-gfg-black">GET IN</span>{' '}
              <span className="text-gfg-green">TOUCH</span>
            </h2>
            <p className="text-lg sm:text-xl text-gfg-gray max-w-2xl mx-auto font-inter px-4 text-reveal">
              Multiple ways to connect with our vibrant tech community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 text-center group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 contact-card"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${item.color} mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gfg-black mb-2 sm:mb-3 font-space-grotesk">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gfg-black font-semibold mb-1 sm:mb-2 font-inter break-words">
                    {item.details}
                  </p>
                  <p className="text-sm sm:text-base text-gfg-gray font-inter">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section ref={socialRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton font-black mb-6">
              <span className="text-gfg-black">JOIN OUR</span>{' '}
              <span className="text-gfg-blue">COMMUNITY</span>
            </h2>
            <p className="text-xl text-gfg-gray max-w-2xl mx-auto font-inter text-reveal">
              Connect with us on social platforms and be part of the conversation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.link}
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:translate-x-2 text-reveal"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-gfg-black font-space-grotesk">
                          {social.platform}
                        </h3>
                        <p className="text-gfg-gray font-inter">{social.handle}</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-gfg-gray group-hover:text-gfg-green group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                  <div className="text-left">
                    <p className="text-gfg-green font-semibold font-inter">{social.members}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section - Mind-Blowing Edition */}
      <section ref={faqRef} className="py-32 bg-gradient-to-br from-gfg-light-gray via-white to-gfg-light-gray relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gfg-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gfg-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gfg-yellow/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* Enhanced Header */}
          <div ref={addToRefs} className="text-center mb-20">
           

            <h2 className="text-5xl md:text-7xl font-anton font-black mb-8 bg-gradient-to-r from-gfg-black via-gfg-green to-gfg-black bg-clip-text text-transparent">
              FREQUENTLY ASKED
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-gfg-green via-gfg-blue to-gfg-yellow rounded-full mx-auto mb-8"></div>
            <p className="text-2xl text-gfg-gray font-inter text-reveal max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about joining our amazing tech community
            </p>
          </div>

          {/* Enhanced FAQ Cards */}
          <div className="space-y-8">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isActive = activeFaq === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring", bounce: 0.3 }}
                  className={`group relative bg-white rounded-3xl shadow-xl border-2 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isActive ? 'border-gfg-green shadow-gfg-green/20 scale-105' : 'border-gray-200 hover:border-gfg-green/50'
                    }`}
                >
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${faq.color === 'gfg-green' ? 'from-green-500 to-emerald-500' :
                    faq.color === 'gfg-blue' ? 'from-blue-500 to-cyan-500' :
                      'from-yellow-500 to-orange-500'
                    }`}></div>

                  {/* Category Badge */}
                  <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-bold tracking-wider ${faq.color === 'gfg-green' ? 'bg-green-100 text-green-700' :
                    faq.color === 'gfg-blue' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                    {faq.category}
                  </div>

                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 relative z-10"
                  >
                    <div className="flex items-center space-x-6 flex-1">
                      {/* Enhanced Icon */}
                      <motion.div
                        className={`flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg ${faq.color === 'gfg-green' ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                          faq.color === 'gfg-blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                            'bg-gradient-to-br from-yellow-500 to-orange-600'
                          }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          rotate: isActive ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon size={28} className="text-white" />
                      </motion.div>

                      {/* Enhanced Question */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gfg-black font-space-grotesk leading-tight group-hover:text-gfg-green transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Enhanced Arrow */}
                    <motion.div
                      animate={{
                        rotate: isActive ? 90 : 0,
                        scale: isActive ? 1.2 : 1
                      }}
                      transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-gfg-green shadow-lg' : 'bg-gray-100 group-hover:bg-gfg-green/10'
                        }`}>
                        <ArrowRight size={20} className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-gfg-gray group-hover:text-gfg-green'
                          }`} />
                      </div>
                    </motion.div>
                  </button>

                  {/* Enhanced Answer Section */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -20 }}
                      animate={{ y: isActive ? 0 : -20 }}
                      transition={{ duration: 0.3, delay: isActive ? 0.2 : 0 }}
                      className="px-8 pb-8"
                    >
                      <div className={`w-full h-px bg-gradient-to-r mb-6 ${faq.color === 'gfg-green' ? 'from-transparent via-green-300 to-transparent' :
                        faq.color === 'gfg-blue' ? 'from-transparent via-blue-300 to-transparent' :
                          'from-transparent via-yellow-300 to-transparent'
                        }`}></div>

                      <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-gfg-green">
                        <p className="text-gfg-gray text-lg leading-relaxed font-inter">
                          {faq.answer}
                        </p>

                        {/* Call to Action */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                          transition={{ delay: 0.3 }}
                          className="mt-6 flex items-center space-x-4"
                        >
                         
                          <span className="text-gfg-gray text-sm">Still have questions? Contact us!</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${faq.color === 'gfg-green' ? 'shadow-2xl shadow-green-500/20' :
                    faq.color === 'gfg-blue' ? 'shadow-2xl shadow-blue-500/20' :
                      'shadow-2xl shadow-yellow-500/20'
                    }`}></div>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-gfg-light-gray relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gfg-green/5 via-gfg-blue/5 to-gfg-yellow/5"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-anton font-black text-gfg-black mb-6">
                  Still Have Questions?
                </h3>
                <p className="text-xl text-gfg-gray mb-8 font-inter">
                  Our team is here to help you get started on your tech journey
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-gfg-green to-emerald-600 text-white px-8 py-4 rounded-2xl font-space-grotesk font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Ask a Question
                  </button>
                  <button className="bg-white text-gfg-green border-2 border-gfg-green px-8 py-4 rounded-2xl font-space-grotesk font-bold text-lg hover:bg-gfg-green hover:text-white transition-all duration-300 hover:scale-105">
                    Join Our Community
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div ref={addToRefs} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-anton font-black mb-6">
              <span className="text-gfg-black">READY TO</span>{' '}
              <span className="text-gfg-green">START?</span>
            </h2>
            <p className="text-xl text-gfg-gray mb-10 font-inter text-reveal">
              Join 500+ students who are already building their tech future with us
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="bg-gfg-green text-white px-10 py-4 rounded-2xl font-space-grotesk font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-reveal">
                Join Community Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;