import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/menterbotlogo.png';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Login from '../Components/login';
import Signup from '../Components/signup';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [openLoginPage, setOpenLoginPage] = useState(false);
  const [openSignUpPage, setOpenSignUpPage] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [initialScrollDone, setInitialScrollDone] = useState(false);
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => setNav(!nav);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (!initialScrollDone && scrollTop > 0) {
        setInitialScrollDone(true);
      }

      if (initialScrollDone) {
        if (scrollTop > lastScrollTop) {
          // Scrolling down
          setHideNavbar(true);
        } else {
          // Scrolling up
          setHideNavbar(false);
        }
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, initialScrollDone]);

  return (
    <>
      <Header />
      <nav className={`Navbar ${hideNavbar ? 'hide' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Menterbot Logo" className="logo-img" />
          </Link>
        </div>
        <div className="toggle-button" onClick={handleClick}>
          {nav ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`sidebar ${nav ? 'open' : ''}`}>
          <div className="sidebar-links">
            <Link to="/home" className="navbar-text hover-effect" onClick={handleClick}>Home</Link>
            <Link to="/blogs" className="navbar-text hover-effect" onClick={handleClick}>Blogs</Link>
            <Link to="/about" className="navbar-text hover-effect" onClick={handleClick}>About</Link>
            <Link to="/contact" className="navbar-text hover-effect" onClick={handleClick}>Contact</Link>
            <Link to="/careers" className="navbar-text hover-effect" onClick={handleClick}>Careers</Link>
            <Link to="/services" className="navbar-text hover-effect" onClick={handleClick}>Services</Link>
            <div className="dropdown">
              <span className="navbar-text hover-effect" onClick={toggleDropdown}>Courses</span>
              <div className={`dropdown-content ${dropdownOpen ? 'open' : ''}`}>
                <Link to="/courses/beginner" className="navbar-text" onClick={handleClick}>Beginner Courses</Link>
                <Link to="/courses/intermediate" className="navbar-text" onClick={handleClick}>Intermediate Courses</Link>
                <Link to="/courses/advanced" className="navbar-text" onClick={handleClick}>Advanced Courses</Link>
              </div>
            </div>
            <button className='login-button hover-effect' onClick={() => { setOpenLoginPage(true); handleClick(); }}>Login</button>
            <button className='signup-button hover-effect' onClick={() => { setOpenSignUpPage(true); handleClick(); }}>Sign Up</button>
          </div>
        </div>
        <div className="navbar-container">
          <div className="navbar-links">
            <Link to="/home" className="navbar-text hover-effect">Home</Link>
            <Link to="/blogs" className="navbar-text hover-effect">Blogs</Link>
            <Link to="/about" className="navbar-text hover-effect">About</Link>
            <Link to="/contact" className="navbar-text hover-effect">Contact</Link>
            <Link to="/careers" className="navbar-text hover-effect">Careers</Link>
            <Link to="/services" className="navbar-text hover-effect">Services</Link>
            <div className="dropdown">
              <span className="navbar-text hover-effect">Courses</span>
              <div className="dropdown-content">
                <Link to="/courses/beginner" className="navbar-text" >Beginner Level</Link>
                <Link to="/courses/intermediate" className="navbar-text">Intermediate Level</Link>
                <Link to="/courses/advanced" className="navbar-text">Advanced Level</Link>
              </div>
            </div>
          </div>
          <div className="login-signup">
            <Link to="/login" className="login-button hover-effect">Login</Link>
            <Link to="/signup" className="signup-button hover-effect">Signup</Link>
            {/* <button className='login-button hover-effect' onClick={() => setOpenLoginPage(true)}>Login</button> */}
            {/* <button className='signup-button hover-effect' onClick={() => setOpenSignUpPage(true)}>Sign Up</button> */}
          </div>
        </div>
      </nav>
      {openLoginPage && <Login onClose={() => setOpenLoginPage(false)} />}
      {openSignUpPage && <Signup onClose={() => setOpenSignUpPage(false)} />}
    </>
  );
};

export default Navbar;
