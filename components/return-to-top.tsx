'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ReturnToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
    {showScrollTop && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="aspect-square text-sm fixed bottom-8 right-8 bg-neutral-800 p-3 rounded-full text-white border border-white"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </motion.button>
      )}
      </>
  )
}

export default ReturnToTop
