import React, { useEffect, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const StickyButton = ({ scrollToSearch, targetRef }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the target element is in the viewport, hide the button
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  const buttonStyle = {
    position: 'fixed',
    top: '50px',
    right: '20px',
    display: isVisible ? 'block' : 'none'
  };

  return (
    <button style={buttonStyle} onClick={scrollToSearch}><ArrowDownwardIcon color='inherit'/></button>
  );
};

export default StickyButton;
