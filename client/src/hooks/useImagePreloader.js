import { useState, useEffect } from 'react';

/**
 * Hook to preload images and track loading progress
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {object} - { isLoading, progress, loadedImages, failedImages }
 */
export const useImagePreloader = (imageUrls = []) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [failedImages, setFailedImages] = useState([]);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setIsLoading(false);
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    let failedCount = 0;
    const totalImages = imageUrls.length;

    const updateProgress = () => {
      const completed = loadedCount + failedCount;
      const newProgress = (completed / totalImages) * 100;
      setProgress(newProgress);
      
      if (completed === totalImages) {
        setIsLoading(false);
      }
    };

    const preloadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          setLoadedImages(prev => [...prev, url]);
          updateProgress();
          resolve({ url, status: 'loaded' });
        };
        
        img.onerror = () => {
          failedCount++;
          setFailedImages(prev => [...prev, url]);
          updateProgress();
          resolve({ url, status: 'failed' });
        };
        
        img.src = url;
      });
    };

    // Start preloading all images
    Promise.all(imageUrls.map(preloadImage));

  }, [imageUrls]);

  return {
    isLoading,
    progress,
    loadedImages,
    failedImages,
    totalImages: imageUrls.length
  };
};

/**
 * Hook for managing app-wide loading state
 */
export const useAppLoader = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [loadingPhase, setLoadingPhase] = useState('initializing');

  const completeLoading = () => {
    setLoadingPhase('complete');
    setTimeout(() => {
      setIsAppLoading(false);
    }, 500);
  };

  const setPhase = (phase) => {
    setLoadingPhase(phase);
  };

  return {
    isAppLoading,
    loadingPhase,
    completeLoading,
    setPhase
  };
};

/**
 * Hook for lazy loading images with intersection observer
 * @param {string} src - Image source URL
 * @param {object} options - Intersection observer options
 */
export const useLazyImage = (src, options = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  useEffect(() => {
    if (isInView && src) {
      const img = new Image();
      
      img.onload = () => {
        setIsLoaded(true);
        setError(null);
      };
      
      img.onerror = () => {
        setError('Failed to load image');
        setIsLoaded(false);
      };
      
      img.src = src;
    }
  }, [isInView, src]);

  return {
    imgRef,
    isLoaded,
    isInView,
    error,
    shouldLoad: isInView
  };
};

export default useImagePreloader;