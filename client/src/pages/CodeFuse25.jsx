import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const CodeFuse25 = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  
  // Countdown states
  const [onlineCountdown, setOnlineCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [offlineCountdown, setOfflineCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const calculateCountdown = (targetDate) => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    const onlineEventDate = new Date('2025-11-26T20:00:00').getTime();
    const offlineEventDate = new Date('2025-11-29T11:00:00').getTime();

    const timer = setInterval(() => {
      setOnlineCountdown(calculateCountdown(onlineEventDate));
      setOfflineCountdown(calculateCountdown(offlineEventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowWhatsAppModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gfg-light-gray via-white to-gfg-blue/5 py-20">
      {/* WhatsApp Community Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gfg-light-gray hover:bg-gfg-gray/20 transition-colors"
            >
              <svg className="w-5 h-9 text-gfg-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-space-grotesk font-black text-gfg-black text-center mb-3">
              Join WhatsApp Community First!
            </h3>
            <p className="text-base text-gfg-gray text-center mb-6 leading-relaxed">
              Before registering, it's <strong className="text-gfg-black">mandatory</strong> to join our WhatsApp community. All event updates, announcements, and important information will be shared directly on WhatsApp.
            </p>

            {/* Benefits */}
            <div className="bg-gfg-light-gray rounded-2xl p-4 mb-6">
              <h4 className="text-sm font-rajdhani font-bold text-gfg-black mb-3 tracking-wider">WHY JOIN?</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gfg-gray">
                  <svg className="w-5 h-5 text-gfg-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time event updates & announcements</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gfg-gray">
                  <svg className="w-5 h-5 text-gfg-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Important deadlines & reminders</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gfg-gray">
                  <svg className="w-5 h-5 text-gfg-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct communication with organizers</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gfg-gray">
                  <svg className="w-5 h-5 text-gfg-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Connect with fellow participants</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href="https://chat.whatsapp.com/GHQz3jgkxtR6rvRb1ASU75"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-rajdhani font-bold text-lg text-center transition-all duration-300 transform hover:scale-105"
              >
                Join WhatsApp Community
              </a>
              <a
                href="https://practice.geeksforgeeks.org/contest/codefuse-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gfg-green hover:bg-gfg-dark-green text-white px-6 py-4 rounded-xl font-rajdhani font-bold text-lg text-center transition-all duration-300"
              >
                Proceed to Registration
              </a>
            </div>

            <p className="text-xs text-center text-gfg-gray mt-4">
              Make sure to join the community before registering!
            </p>
          </div>
        </div>
      )}

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/events')}
          className="inline-flex items-center gap-2 text-gfg-gray hover:text-gfg-green transition-colors duration-300 mb-6 group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-rajdhani font-bold text-sm tracking-widest">BACK TO EVENTS</span>
        </button>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gfg-light-gray">
          
          {/* Hero Banner with Logo */}
          <div className="relative bg-white">
            <div className="relative p-6 sm:p-12 lg:p-16 min-h-[250px] sm:min-h-[400px] lg:min-h-[450px] flex items-center justify-center">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230F9D58' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* CodeFuse Logo - Full Banner */}
              <div className="relative z-10 pb-9 w-full flex items-center justify-center">
                <img 
                  src="/codefuse.svg" 
                  alt="CodeFuse 25 - The Ultimate DSA Battle Arena" 
                  className="w-full max-w-xl sm:max-w-2xl lg:max-w-4xl h-auto object-contain"
                />
              </div>

              {/* Quick Info Pills - Bottom Left (Desktop only) */}
              <div className="hidden sm:flex absolute bottom-6 left-6 lg:bottom-8 lg:left-8 z-20 flex-wrap gap-3">
                <div className="bg-gfg-green/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gfg-green shadow-lg">
                  <span className="text-white font-rajdhani font-bold text-sm">📅 26 & 29 NOV 2025</span>
                </div>
                <div className="bg-gfg-blue/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gfg-blue shadow-lg">
                  <span className="text-white font-rajdhani font-bold text-sm">🌐 ONLINE + OFFLINE</span>
                </div>
                <div className="bg-gfg-yellow/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gfg-yellow shadow-lg">
                  <span className="text-gfg-black font-rajdhani font-bold text-sm">✨ FREE ENTRY</span>
                </div>
              </div>
            </div>

            {/* Quick Info Pills - Below Banner (Mobile only) */}
            <div className="sm:hidden flex flex-wrap justify-center gap-2 px-4 pb-4 bg-white">
              <div className="bg-gfg-green/90 backdrop-blur-sm px-3 py-2 rounded-full border border-gfg-green shadow-lg">
                <span className="text-white font-rajdhani font-bold text-xs">📅 26 & 29 NOV 2025</span>
              </div>
              <div className="bg-gfg-blue/90 backdrop-blur-sm px-3 py-2 rounded-full border border-gfg-blue shadow-lg">
                <span className="text-white font-rajdhani font-bold text-xs">🌐 ONLINE + OFFLINE</span>
              </div>
              <div className="bg-gfg-yellow/90 backdrop-blur-sm px-3 py-2 rounded-full border border-gfg-yellow shadow-lg">
                <span className="text-gfg-black font-rajdhani font-bold text-xs">✨ FREE ENTRY</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            
            {/* Left Column - Event Details */}
            <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10 border-r border-gfg-light-gray">
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-gfg-light-gray pb-4">
                {['overview', 'rounds', 'prizes', 'contact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-rajdhani font-bold text-sm tracking-wider transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gfg-green text-white'
                        : 'bg-gfg-light-gray text-gfg-gray hover:bg-gfg-green/10'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-3xl font-space-grotesk font-black text-gfg-black mb-4">
                        About CodeFuse 25
                      </h2>
                      <p className="text-base text-gfg-gray leading-relaxed mb-4">
                        CodeFuse 25 is the ultimate Data Structures and Algorithms battle arena where the brightest minds compete to showcase their problem-solving skills. This two-round competition is designed to challenge participants at every level.
                      </p>
                      <p className="text-base text-gfg-gray leading-relaxed">
                        Whether you're a beginner or an experienced coder, CodeFuse 25 offers an exciting platform to learn, compete, and win amazing prizes from GeeksforGeeks.
                      </p>
                    </div>

                    <div className="bg-gfg-light-gray rounded-2xl p-6">
                      <h3 className="text-xl font-space-grotesk font-bold text-gfg-black mb-4">Organizers</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gfg-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-gfg-green font-bold">🏛️</span>
                          </div>
                          <div>
                            <div className="font-space-grotesk font-bold text-gfg-black">Allenhouse Institute of Technology</div>
                            <div className="text-sm text-gfg-gray">Rooma, Kanpur</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gfg-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-gfg-blue font-bold">💻</span>
                          </div>
                          <div>
                            <div className="font-space-grotesk font-bold text-gfg-black">GeeksforGeeks Campus Body</div>
                            <div className="text-sm text-gfg-gray">Official Partner</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Countdowns */}
                    <div className="space-y-4">
                      {/* Round 1 Countdown */}
                      <div className="bg-gradient-to-r from-gfg-blue/10 to-transparent rounded-2xl p-6 border-l-4 border-gfg-blue">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="bg-gfg-blue text-white px-3 py-1 rounded-full text-xs font-rajdhani font-bold">ROUND 1</div>
                          <h4 className="text-lg font-space-grotesk font-bold text-gfg-black">Online MCQs Battle</h4>
                        </div>
                        <div className="text-sm text-gfg-gray mb-3">26th November, 2025 • 8:00 PM</div>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                            <div className="text-2xl font-anton font-black text-gfg-blue">{onlineCountdown.days}</div>
                            <div className="text-xs font-rajdhani font-bold text-gfg-gray tracking-widest">DAYS</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                            <div className="text-2xl font-anton font-black text-gfg-blue">{onlineCountdown.hours}</div>
                            <div className="text-xs font-rajdhani font-bold text-gfg-gray tracking-widest">HRS</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                            <div className="text-2xl font-anton font-black text-gfg-blue">{onlineCountdown.minutes}</div>
                            <div className="text-xs font-rajdhani font-bold text-gfg-gray tracking-widest">MINS</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                            <div className="text-2xl font-anton font-black text-gfg-blue">{onlineCountdown.seconds}</div>
                            <div className="text-xs font-rajdhani font-bold text-gfg-gray tracking-widest">SECS</div>
                          </div>
                        </div>
                      </div>

                      {/* Round 2 Countdown */}
                      <div className="bg-gradient-to-r from-gfg-green/10 to-transparent rounded-2xl p-6 border-l-4 border-gfg-green">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="bg-gfg-green text-white px-3 py-1 rounded-full text-xs font-rajdhani font-bold">ROUND 2</div>
                          <h4 className="text-lg font-space-grotesk font-bold text-gfg-black">Offline On-Campus Battle</h4>
                        </div>
                        <div className="text-sm text-gfg-gray mb-3">29th November, 2025 • 11:00 AM</div>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                            <div className="text-2xl font-anton font-black text-gfg-green">{offlineCountdown.days}</div>
                            <div className="text-xs font-rajdhani font-bold text-gfg-gray tracking-widest">DAYS</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                            <div className="text-2xl font-anton font-black text-gfg-green">{offlineCountdown.hours}</div>
                            <div className="text-xs font-rajdhani font-bold text-gfg-gray tracking-widest">HRS</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                            <div className="text-2xl font-anton font-black text-gfg-green">{offlineCountdown.minutes}</div>
                            <div className="text-xs font-rajdhani font-bold text-gfg-gray tracking-widest">MINS</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                            <div className="text-2xl font-anton font-black text-gfg-green">{offlineCountdown.seconds}</div>
                            <div className="text-xs font-rajdhani font-bold text-gfg-gray tracking-widest">SECS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rounds Tab */}
                {activeTab === 'rounds' && (
                  <div className="space-y-6 animate-fade-in">
                    {/* Round 1 */}
                    <div className="border-l-4 border-gfg-blue pl-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-gfg-blue text-white px-3 py-1 rounded-full text-sm font-rajdhani font-bold">ROUND 1</div>
                        <h3 className="text-2xl font-space-grotesk font-black text-gfg-black">Online MCQs Battle</h3>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gfg-gray">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-inter"><strong>Date:</strong> 26th November, 2025</span>
                        </div>
                        <div className="flex items-center gap-2 text-gfg-gray">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-inter"><strong>Time:</strong> 8:00 PM (Sharp)</span>
                        </div>
                        <div className="flex items-center gap-2 text-gfg-gray">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          <span className="font-inter"><strong>Format:</strong> Online Platform</span>
                        </div>
                      </div>
                      <p className="text-gfg-gray leading-relaxed">
                        Multiple Choice Questions covering fundamental to advanced DSA concepts. Test your theoretical knowledge in a time-bound online assessment.
                      </p>
                    </div>

                    {/* Round 2 */}
                    <div className="border-l-4 border-gfg-green pl-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-gfg-green text-white px-3 py-1 rounded-full text-sm font-rajdhani font-bold">ROUND 2</div>
                        <h3 className="text-2xl font-space-grotesk font-black text-gfg-black">Offline On-Campus Battle</h3>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gfg-gray">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-inter"><strong>Date:</strong> 29th November, 2025</span>
                        </div>
                        <div className="flex items-center gap-2 text-gfg-gray">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-inter"><strong>Time:</strong> 11:00 AM (Sharp)</span>
                        </div>
                        <div className="flex items-center gap-2 text-gfg-gray">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-inter"><strong>Venue:</strong> Allenhouse Institute, Rooma, Kanpur</span>
                        </div>
                      </div>
                      <p className="text-gfg-gray leading-relaxed">
                        Hands-on coding challenges and real-world problem-solving. Qualified participants compete on-campus to determine the ultimate champions.
                      </p>
                    </div>
                  </div>
                )}

                {/* Prizes Tab */}
                {activeTab === 'prizes' && (
                  <div className="space-y-4 animate-fade-in">
                    <h2 className="text-3xl font-space-grotesk font-black text-gfg-black mb-6">Prizes & Rewards</h2>
                    
                    {/* Prize 1 */}
                    <div className="bg-gradient-to-r from-gfg-green/10 to-transparent border-l-4 border-gfg-green p-6 rounded-r-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gfg-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-gfg-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-space-grotesk font-bold text-gfg-black mb-2">Exclusive GFG Goodies</h3>
                          <p className="text-sm text-gfg-gray mb-2">For Every Finalist</p>
                          <p className="text-sm text-gfg-gray">Branded backpacks, t-shirts, stickers, and more!</p>
                        </div>
                      </div>
                    </div>

                    {/* Prize 2 */}
                    <div className="bg-gradient-to-r from-gfg-blue/10 to-transparent border-l-4 border-gfg-blue p-6 rounded-r-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gfg-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-gfg-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-space-grotesk font-bold text-gfg-black mb-2">₹10,000/- GFG Connect Vouchers</h3>
                          <p className="text-sm text-gfg-gray mb-2">For Top Performers</p>
                          <p className="text-sm text-gfg-gray">Access premium courses and resources!</p>
                        </div>
                      </div>
                    </div>

                    {/* Prize 3 */}
                    <div className="bg-gradient-to-r from-gfg-yellow/10 to-transparent border-l-4 border-gfg-yellow p-6 rounded-r-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gfg-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-gfg-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-space-grotesk font-bold text-gfg-black mb-2">GFG Certificates</h3>
                          <p className="text-sm text-gfg-gray mb-2">For All Participants</p>
                          <p className="text-sm text-gfg-gray">Official certificates, digital & printable!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Tab */}
                {activeTab === 'contact' && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-3xl font-space-grotesk font-black text-gfg-black mb-6">Get in Touch</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gfg-light-gray rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gfg-green/20 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-gfg-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <h3 className="font-space-grotesk font-bold text-gfg-black">Phone</h3>
                        </div>
                        <p className="text-sm text-gfg-gray">+91 7983023288</p>
                        <p className="text-sm text-gfg-gray">+91 9580716777</p>
                      </div>

                      <div className="bg-gfg-light-gray rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gfg-blue/20 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-gfg-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                          <h3 className="font-space-grotesk font-bold text-gfg-black">Website</h3>
                        </div>
                        <a href="https://www.allenhouse.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-gfg-blue hover:underline">
                          www.allenhouse.ac.in
                        </a>
                      </div>

                      <div className="bg-gfg-light-gray rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gfg-yellow/20 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-gfg-yellow" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                          <h3 className="font-space-grotesk font-bold text-gfg-black">Instagram</h3>
                        </div>
                        <a href="https://instagram.com/geeksforgeeks.ait.kanpur" target="_blank" rel="noopener noreferrer" className="text-sm text-gfg-gray hover:text-gfg-yellow">
                          @geeksforgeeks.ait.kanpur
                        </a>
                      </div>

                      <div className="bg-gfg-light-gray rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gfg-green/20 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-gfg-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <h3 className="font-space-grotesk font-bold text-gfg-black">Location</h3>
                        </div>
                        <p className="text-sm text-gfg-gray">Allenhouse Institute of Technology</p>
                        <p className="text-sm text-gfg-gray">Rooma, Kanpur</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Action Buttons */}
            <div className="lg:col-span-1 bg-gfg-light-gray p-6 sm:p-8">
              <h3 className="text-2xl font-space-grotesk font-black text-gfg-black mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                {/* Register Button */}
                <button
                  onClick={handleRegisterClick}
                  className="block w-full bg-gradient-to-r from-gfg-green to-gfg-dark-green text-white px-6 py-4 rounded-xl font-rajdhani font-bold text-lg text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  🚀 REGISTER NOW
                </button>

                {/* Check Results Button */}
                <button className="w-full bg-white border-2 border-gfg-blue text-gfg-blue px-6 py-4 rounded-xl font-rajdhani font-bold text-lg hover:bg-gfg-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  CHECK RESULTS
                </button>

                {/* Download Certificate Button */}
                <button className="w-full bg-white border-2 border-gfg-yellow text-gfg-dark-yellow px-6 py-4 rounded-xl font-rajdhani font-bold text-lg hover:bg-gfg-yellow hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  DOWNLOAD CERTIFICATE
                </button>

                {/* Download Coupon Button */}
                <button className="w-full bg-white border-2 border-gfg-green text-gfg-green px-6 py-4 rounded-xl font-rajdhani font-bold text-lg hover:bg-gfg-green hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  GET GFG COUPON
                </button>

                {/* Social Media Follow Section */}
                <div className="mt-8 pt-8 border-t border-gfg-gray/20">
                  <h4 className="text-lg font-space-grotesk font-bold text-gfg-black mb-4 text-center">Follow Us</h4>
                  
                  <div className="space-y-3">
                    {/* GeeksforGeeks Profile */}
                    <a
                      href="https://www.geeksforgeeks.org/profile/hateem_ansari_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-gfg-green hover:bg-gfg-dark-green text-white px-4 py-3 rounded-xl font-rajdhani font-bold transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                      <span>Follow on GeeksforGeeks</span>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com/geeksforgeeks.ait.kanpur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-4 py-3 rounded-xl font-rajdhani font-bold transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Follow on Instagram</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https:/www.linkedin.com/in/geeksforgeeks-campus-body-ait-9688a738a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-rajdhani font-bold transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>Follow on LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Important Note */}
                <div className="mt-6 bg-gfg-yellow/10 border-l-4 border-gfg-yellow p-4 rounded-r-xl">
                  <p className="text-sm text-gfg-gray">
                    <strong className="text-gfg-black">Registration Deadline:</strong><br/>
                    25th November 2025, 11:59 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeFuse25;
