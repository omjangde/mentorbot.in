import React, { useEffect, useRef } from 'react';
import '../css/footer.css'; // Import CSS file for styling
import whatsapplogo from '../assets/whatsapp.svg';
import Lifetime from '../assets/Lifetime.svg';
import Expert from '../assets/Expert.svg';
import Online from '../assets/online_video.svg';
import Facebook from '../assets/icons8-facebook.svg';
import Twitter from '../assets/icons8-twitter.svg';
import Instagram from '../assets/icons8-instagram.svg';
import LinkedIn from '../assets/icons8-linkedin.svg';
import Youtube from '../assets/icons8-youtube.svg';
import WhatsApp from '../assets/wa.svg';
import logo from '../assets/logo.png'
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  const waContactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = waContactRef.current;
      if (!element) return;

      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        element.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="footer">
      <div ref={waContactRef} className='wa-contact'>
        <img src={whatsapplogo} alt="WhatsApp Logo"></img>
        <h2>To chat with us Contact Us At <span className="phone-number">+917224032078</span></h2>
        <h2>OR</h2>
        <a href="https://wa.me/+917224032078" target="_blank" className="custom-button">JUST CLICK HERE !</a>
      </div>
      <div className="quoteimage">
        <div className="image-container2">
          <img src={Online} alt="Image 1" />
          <p>Guiding</p>
        </div>
        <div className="image-container2">
          <img src={Expert} alt="Image 2" />
          <p>Training</p>
        </div>
        <div className="image-container2">
          <img src={Lifetime} alt="Image 3" />
          <p>Services</p>
        </div>
      </div>
      <div className='footercontent'>
        <div className="footer-column">
          <img src={logo} alt="Logo" />
          <p>Follow us</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/Mentor-Bot/100072427163735/" target="_blank"><img src={Facebook} alt="Facebook" /></a>
            <a href="https://twitter.com/mentorb0t" target="_blank"><img src={Twitter} alt="Twitter" /></a>
            <a href="https://www.instagram.com/mentorbot.in/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/mentor-bot-73274724b/" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="https://www.youtube.com/channel/UC_Pj72CWHP-ZPyUGtk4igHg" target="_blank"><img src={Youtube} alt="YouTube" /></a>
            <a href="https://wa.me/+917224032078" target="_blank"><img src={WhatsApp} alt="WhatsApp" /></a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Important links</h2>
          <ul>
            <li><a href="#" target="_blank" >Contact Us</a></li>
            <li><a href="#" target="_blank" >Career</a></li>
            <li><a href="#" target="_blank" >Gallery</a></li>
            <li><a href="#" target="_blank" >Partner With Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>About this website</h2>
          <ul>
            <li><a href="#" target="_blank" >Sitemap</a></li>
            <li><a href="#" target="_blank" >Privacy Policy</a></li>
            <li><a href="#" target="_blank" >Terms and Conditions</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">Copyright © 2024 mentorbot.in</p>
    </div>
  );
};

export default Footer;