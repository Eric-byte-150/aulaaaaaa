import React, { useState, useEffect } from 'react';
import "./ScrollButoon.css"
import {FaArrowUp} from 'react-icons/fa'
const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button className="scrollToTopButton" onClick={scrollToTop}>
     <FaArrowUp className='arrow'/>
        </button>
      )}
    </>
  );
};

export default ScrollButton;
