import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Users, Calendar, Trophy, Mail, Sparkles, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for styling
      setScrolled(currentScrollY > 50);

      // Hide/show navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setVisible(false);
        setIsOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Team', path: '/team', icon: Users },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass shadow-2xl border-b border-white/20'
        : 'glass-light'
        }`}
      style={{
        background: scrolled
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/gfg.svg"
                alt="GFG Logo"
                className="h-12 w-auto"
              />
              {/* Glossy shine effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12" />
            </motion.div>
            
            {/* Brand Text */}
            <div className="hidden sm:block">
              <div className="text-gfg-black font-space-grotesk font-bold text-lg group-hover:text-gfg-green transition-colors duration-300">
                Campus Body
              </div>
              <div className="text-gfg-gray font-inter text-xs -mt-1">
                AIT,Kanpur
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 group overflow-hidden ${isActive
                    ? 'text-white bg-gfg-green shadow-xl scale-105'
                    : 'text-gfg-black hover:text-gfg-green hover:scale-105'
                    }`}
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(15, 157, 88, 0.95), rgba(15, 157, 88, 0.8))'
                      : 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(15px)',
                    border: isActive 
                      ? '2px solid rgba(15, 157, 88, 0.3)' 
                      : '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: isActive 
                      ? '0 8px 32px rgba(15, 157, 88, 0.3)' 
                      : '0 4px 16px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="flex items-center space-x-2 relative z-10">
                    <Icon size={18} className={isActive ? 'text-white' : ''} />
                    <span className="font-inter font-semibold">{item.name}</span>
                  </div>

                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12" />

                  {/* Active state glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gfg-green/25 rounded-2xl blur-xl -z-10" />
                  )}

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gfg-green/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              );
            })}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/community"
                className="relative group flex items-center space-x-3 px-8 py-3 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 157, 88, 0.95), rgba(15, 157, 88, 0.8))',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 12px 40px rgba(15, 157, 88, 0.4)',
                }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-white/15"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-center space-x-3 whitespace-nowrap">
                  <Sparkles size={20} className="animate-pulse" />
                  <span className="font-inter text-lg">Community</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </div>

                {/* Enhanced shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 transform -skew-x-12" />

                {/* Enhanced pulsing glow */}
                <motion.div
                  className="absolute inset-0 bg-gfg-green/40 rounded-2xl blur-2xl -z-10"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl text-gfg-black hover:text-gfg-green transition-colors duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="px-6 py-6 space-y-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-5 py-4 rounded-xl font-medium transition-all duration-300 ${isActive
                        ? 'text-white bg-gfg-green shadow-lg'
                        : 'text-gfg-black hover:text-gfg-green'
                        }`}
                      style={{
                        background: isActive
                          ? 'linear-gradient(135deg, rgba(15, 157, 88, 0.9), rgba(15, 157, 88, 0.7))'
                          : 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      <Icon size={20} />
                      <span className="font-inter">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4 border-t border-white/20"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 157, 88, 0.9), rgba(15, 157, 88, 0.7))',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(15, 157, 88, 0.3)',
                  }}
                >
                  <Sparkles size={18} />
                  <span className="font-inter">Get In Touch</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;