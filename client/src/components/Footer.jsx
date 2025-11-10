import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { Heart } from 'lucide-react';
import ImageLoader from './ImageLoader';

const Footer = () => {
  // Navigation links from navbar
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];



  const socialLinks = [
    { 
      icon: FaWhatsapp, 
      href: 'https://forms.gle/Weetybpw1cDcPuDy9', 
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    },
    { 
      icon: FaLinkedin, 
      href: 'www.linkedin.com/in/geeksforgeeks-campus-body-ait-9688a738a', 
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/geeksforgeeks.ait.kanpur/', 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <footer className="bg-gfg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <ImageLoader 
                src="/gfg.svg" 
                alt="GeeksForGeeks" 
                className="h-10 w-auto"
                containerClassName="h-10"
                loaderType="spin"
              />
              <div>
                <h3 className="text-xl font-space-grotesk font-bold text-gfg-green">
                 Campus Body
                </h3>
                <p className="text-gray-400 font-inter text-sm">
                  Allenhouse Institute of Technology
                </p>
              </div>
            </div>
            <p className="text-gray-300 font-inter text-sm leading-relaxed max-w-sm">
              Empowering students with cutting-edge technology skills and building the next generation of tech leaders.
            </p>
          </div>

          {/* Navigation & Social */}
          <div>
            <h4 className="text-lg font-space-grotesk font-semibold text-white mb-4">
              Navigation
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-300 hover:text-gfg-green transition-colors duration-300 font-inter text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-space-grotesk font-semibold text-white mb-3">
                Follow Us
              </h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color} hover:scale-110`}
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 font-inter text-sm mb-4 sm:mb-0">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 animate-pulse" />
            <span>by Md. Hateem Ansari</span>
          </div>
          
          <div className="text-gray-400 font-inter text-sm">
            © 2025 Hateem Ansari. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;