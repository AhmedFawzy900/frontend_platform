import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './top.css';
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-btn">
          <ArrowUpwardIcon />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
