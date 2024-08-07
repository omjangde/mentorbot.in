// import React, { useState, useEffect } from 'react';
// import '../css/Navbar.css';
// import logo from '../assets/menterbotlogo.png';
// import { Link } from 'react-router-dom';
// import Header from './Header';

// const Navbar = () => {
//   const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
//   const [hideNavbar, setHideNavbar] = useState(false);
//   const [scrolledUp, setScrolledUp] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       const bannerHeight = document.querySelector('.banner').offsetHeight;

//       // Determine if user is scrolling up or down
//       if (currentScrollPos > prevScrollPos) {
//         // Scrolling down
//         setHideNavbar(currentScrollPos > bannerHeight / 2);
//       } else {
//         // Scrolling up
//         setHideNavbar(false);
//       }

//       // Check if the user has scrolled down at all
//       setScrolledUp(currentScrollPos > 0);

//       // Update the previous scroll position
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <>
//       <Header />
//       <nav className={`Navbar ${hideNavbar ? 'hide' : ''} ${scrolledUp ? 'scrolled-up' : ''}`}>
//         <div className="navbar-container">
//           <div className="logo">
//             <Link to="/">
//               <img src={logo} alt="Menterbot Logo" className="logo-img" />
//             </Link>
//           </div>
//           <div className="navbar-links">
//             <Link to="/blogs" className="navbar-text hover-effect">Blogs</Link>
//             <Link to="/about" className="navbar-text hover-effect">About</Link>
//             <Link to="/contact" className="navbar-text hover-effect">Contact</Link>
//             <Link to="/careers" className="navbar-text hover-effect">Careers</Link>
//             <div className="dropdown">
//               <Link to="/courses" className="navbar-text hover-effect">Courses</Link>
//               <div className="dropdown-content">
//                 <Link to="/courses/beginner" className="navbar-text">Beginner Level</Link>
//                 <Link to="/courses/intermediate" className="navbar-text">Intermediate Level</Link>
//                 <Link to="/courses/advanced" className="navbar-text">Advanced Level</Link>
//               </div>
//             </div>
//           </div>
//           <div className="login-signup">
//             <Link to="/login" className="login-button hover-effect">Login</Link>
//             <Link to="/signup" className="signup-button hover-effect">Sign Up</Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import logo from '../assets/menterbotlogo.png';
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if user is scrolling up or down
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setHideNavbar(true);
      } else {
        // Scrolling up
        setHideNavbar(false);
      }

      // Check if the user has scrolled down at all
      setScrolledUp(currentScrollPos > 0);

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <Header />
      <nav className={`Navbar ${hideNavbar ? 'hide' : ''} ${scrolledUp ? 'scrolled-up' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Menterbot Logo" className="logo-img" />
            </Link>
          </div>
          <div className="navbar-links">
          <Link to="/" className="navbar-text hover-effect">Home</Link>
            <Link to="/blogs" className="navbar-text hover-effect">Blogs</Link>
            <Link to="/about" className="navbar-text hover-effect">About</Link>
            <Link to="/contact" className="navbar-text hover-effect">Contact</Link>
            <Link to="/careers" className="navbar-text hover-effect">Careers</Link>
            <Link to="/services" className="navbar-text hover-effect">Services</Link>
            <div className="dropdown">
              <Link to="/courses" className="navbar-text hover-effect">Courses</Link>
              <div className="dropdown-content">
                <Link to="/courses/beginner" className="navbar-text">Beginner Level</Link>
                <Link to="/courses/intermediate" className="navbar-text">Intermediate Level</Link>
                <Link to="/courses/advanced" className="navbar-text">Advanced Level</Link>
              </div>
            </div>
          </div>
          <div className="login-signup">
            <Link to="/login" className="login-button hover-effect">Login</Link>
            <Link to="/signup" className="signup-button hover-effect">Sign Up</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
