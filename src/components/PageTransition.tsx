import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/PageTransition.module.css';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsTransitioning(true);
    };
    const handleComplete = () => {
      setTimeout(() => setIsTransitioning(false), 500); // Match CSS animation duration
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div className={`${styles.pageWrapper} ${isTransitioning ? styles.transitioning : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;
