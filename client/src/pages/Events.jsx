// src/components/EventsPage.jsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const EventsPage = () => {
  const navigate = useNavigate();
  const eventsRef = useRef(null);
  const heroRef = useRef(null);
  const comingSoonRef = useRef(null);
  const pastEventsRef = useRef(null);
  const sectionRefs = useRef([]);

  // Sample events data
  const eventsData = {
    comingSoon: {
      id: 1,
      title: "CodeFuse 25",
      subtitle: "The Ultimate DSA Battle Arena",
      description: "Join the ultimate Data Structures and Algorithms competition. Two rounds of intense coding challenges with amazing prizes from GeeksforGeeks!",
      date: "26 & 29 Nov 2025",
      status: "coming-soon",
      glowColor: "bg-gfg-green/20",
      borderColor: "border-gfg-green",
      accentColor: "text-gfg-green"
    },
    pastEvents: [
      {
        id: 2,
        title: "CP",
        subtitle: "Online Workship",
        description: "Successfully organized an online Competitive Programming Workshop focused on roadmap building and awareness. Empowered participants with strategic insights to kickstart their coding journey.",
        date: "Feb, 2025",
        participants: "150+",
        projects: "45",
        status: "completed",
        glowColor: "bg-gfg-yellow/20",
        borderColor: "border-gfg-yellow",
        accentColor: "text-gfg-yellow"
      },
      {
        id: 3,
        title: "Mentorship",
        subtitle: "1:1 Online Connect",
        description: "Organized online 1:1 mentorship sessions featuring experts from GeeksforGeeks and MAANG SDE. Provided personalized guidance to aspiring programmers through direct interaction with industry professionals.",
        date: "July, 2025",
        participants: "200+",
        projects: "30",
        status: "completed",
        glowColor: "bg-gfg-black/20",
        borderColor: "border-gfg-black",
        accentColor: "text-gfg-black"
      }
    ]
  };

  useEffect(() => {
    // Hero animation
    const heroTl = gsap.timeline();
    heroTl.fromTo(heroRef.current,
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    // Coming soon animation
    const comingSoonTl = gsap.timeline({
      scrollTrigger: {
        trigger: comingSoonRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    comingSoonTl.fromTo(comingSoonRef.current,
      {
        y: 100,
        opacity: 0,
        rotationY: 15
      },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // Past events animation
    const pastEventsTl = gsap.timeline({
      scrollTrigger: {
        trigger: pastEventsRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    pastEventsTl.fromTo(pastEventsRef.current?.children || [],
      {
        y: 80,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
      }
    );

    // Floating animation for elements
    gsap.to(".float-element", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
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
    <div className="min-h-screen bg-white py-20 overflow-hidden" ref={eventsRef}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gfg-green/5 rounded-full blur-2xl sm:blur-3xl float-element"></div>
        <div className="absolute top-1/3 right-8 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 bg-gfg-yellow/5 rounded-full blur-2xl sm:blur-3xl float-element" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 sm:w-36 sm:h-36 bg-gfg-black/5 rounded-full blur-2xl sm:blur-3xl float-element" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16 lg:mb-20">
        <div ref={heroRef}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-anton font-black text-gfg-black mb-4 sm:mb-6 tracking-tight">
            EVENTS
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gfg-green mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl font-inter text-gfg-gray max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            Experience unforgettable moments that transform ideas into reality and dreams into innovations.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-32 relative z-10">
        <div ref={addToRefs} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-black text-gfg-black mb-4 sm:mb-6">
            <span className="text-gfg-yellow">
              COMING EVENT
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gfg-gray max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto px-4">
            The next big thing is brewing. Get ready to be amazed.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div ref={comingSoonRef} className="max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
          <div 
            className="group relative cursor-pointer"
            onClick={() => navigate('/events/codefuse-25')}
          >
            {/* Outer Glow */}
            <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gfg-green/20 rounded-2xl sm:rounded-3xl lg:rounded-4xl blur-2xl sm:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

            {/* Main Card */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl hover:shadow-3xl sm:hover:shadow-4xl border-2 border-gfg-light-gray overflow-hidden transform group-hover:scale-105 transition-all duration-700">

              {/* Animated Header */}
              <div className="relative h-32 sm:h-40 lg:h-48 bg-gfg-green overflow-hidden">
                {/* Floating Particles */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/30 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-2000"></div>

                <div className="relative z-10 h-full flex items-center justify-center px-4">
                  <div className="text-center text-white">
                    <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-anton font-black mb-2 sm:mb-4 tracking-tighter">
                      {eventsData.comingSoon.title}
                    </div>
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-space-grotesk font-light opacity-90">
                      {eventsData.comingSoon.subtitle}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 sm:gap-4 bg-gfg-yellow/20 text-gfg-dark-yellow px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gfg-yellow rounded-full animate-ping"></div>
                    <span className="font-rajdhani font-bold text-sm sm:text-lg tracking-widest">COMING SOON</span>
                  </div>

                  <p className="text-base sm:text-lg lg:text-xl text-gfg-gray font-inter leading-relaxed mb-4 sm:mb-6 px-2">
                    {eventsData.comingSoon.description}
                  </p>

                  <div className="text-lg sm:text-xl lg:text-2xl font-space-grotesk font-bold text-gfg-green mb-6 sm:mb-8">
                    {eventsData.comingSoon.date}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => navigate('/events/codefuse-25')}
                    className="bg-gfg-green hover:bg-gfg-dark-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-rajdhani font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    VIEW EVENT DETAILS
                  </button>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-t-2 border-r-2 border-gfg-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-b-2 border-l-2 border-gfg-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={addToRefs} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-black text-gfg-black mb-4 sm:mb-6">
            <span className="text-gfg-green">
              PAST GLORIES
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gfg-gray max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto px-4">
            Celebrating the amazing memories we've created together
          </p>
        </div>

        {/* Past Events Grid */}
        <div ref={pastEventsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {eventsData.pastEvents.map((event) => (
            <div key={event.id} className="group relative">
              {/* Background Glow */}
              <div className={`absolute -inset-3 sm:-inset-4 lg:-inset-6 ${event.glowColor} rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

              {/* Event Card */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl border-2 border-gfg-light-gray overflow-hidden transform group-hover:-translate-y-2 sm:group-hover:-translate-y-4 transition-all duration-500">

                {/* Event Header */}
                <div className={`h-24 sm:h-28 lg:h-32 ${event.glowColor.replace('/20', '').replace('bg-', 'bg-')} relative overflow-hidden`}>
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>

                  <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="text-center text-white">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-anton font-black mb-1 sm:mb-2 tracking-tighter">
                        {event.title}
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg font-space-grotesk font-light opacity-90">
                        {event.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-gfg-light-gray px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-rajdhani font-bold text-gfg-green text-xs sm:text-sm tracking-widest">COMPLETED</span>
                    </div>

                    <p className="text-gfg-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 font-inter px-2">
                      {event.description}
                    </p>

                    <div className="text-lg sm:text-xl lg:text-2xl font-space-grotesk font-bold text-gfg-black mb-2">
                      {event.date}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="text-center p-3 sm:p-4 bg-gfg-light-gray rounded-xl sm:rounded-2xl transform group-hover:scale-105 transition-transform duration-300">
                      <div className="text-lg sm:text-xl lg:text-2xl font-anton font-black text-gfg-black mb-1">
                        {event.participants}
                      </div>
                      <div className="text-xs font-rajdhani font-bold text-gfg-gray tracking-widest">PARTICIPANTS</div>
                    </div>
                    
                  </div>

                </div>

                {/* Corner Accents */}
                <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 ${event.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-gfg-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={addToRefs} className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-32 relative z-10">
        <div className="bg-gfg-green rounded-2xl sm:rounded-3xl lg:rounded-4xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-black mb-4 sm:mb-6">
              Ready for the Next Adventure?
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto font-inter px-4">
              Join our community and be the first to experience groundbreaking events
            </p>
            <button 
              onClick={() => navigate('/community')}
              className="bg-white text-gfg-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-rajdhani font-bold text-base sm:text-lg hover:bg-gfg-light-gray transform hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl"
            >
              JOIN THE REVOLUTION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;