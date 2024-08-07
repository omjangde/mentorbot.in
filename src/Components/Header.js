import React, { useState, useEffect } from 'react';
import '../css/Header.css';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [hideHeader, setHideHeader] = useState(false);
  const [headerScrolledUp, setHeaderScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if user is scrolling up or down
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setHideHeader(true);
      } else {
        // Scrolling up
        setHideHeader(false);
      }

      // Check if the user has scrolled down at all
      setHeaderScrolledUp(currentScrollPos > 0);

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`Header ${hideHeader ? 'hide' : ''} ${headerScrolledUp ? 'scrolled-up' : ''}`}>
      {/* Your Header Content */}
      <div className="header-content">
        <h1>✨ Welcome To Learn With Fun!!! ✨</h1>
        {/* Add other header content as needed */}
      </div>
    </header>
  );
};

export default Header;
