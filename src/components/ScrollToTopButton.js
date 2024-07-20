import React, { useState, useEffect } from 'react';
import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (!visible && window.pageYOffset > 100) {
      setVisible(true);
    } else if (visible && window.pageYOffset <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [visible]);

  return (
    <Zoom in={visible}>
      <Fab 
        color="primary" 
        size="medium" 
        onClick={scrollToTop} 
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <ArrowUpward />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
