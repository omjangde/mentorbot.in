import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setHideHeader(true);
      } else {
        // Scrolling up
        setHideHeader(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={`Header ${hideHeader ? 'hide' : ''}`}>
      <h1>✨ Welcome To Learn With Fun!!! ✨</h1>
    </header>
  );
};

export default Header;
