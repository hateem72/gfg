import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CodeFusePromoPopup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('codeFusePromoShown');
    
    if (!popupShown) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('codeFusePromoShown', 'true');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    const calculateCountdown = () => {
      const eventDate = new Date('2025-11-26T20:00:00').getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

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

    if (isVisible) {
      const timer = setInterval(() => {
        setCountdown(calculateCountdown());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleViewDetails = () => {
    setIsVisible(false);
    navigate('/events/codefuse-25');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative transform animate-slide-up">
