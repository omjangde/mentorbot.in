import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faYoutube, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../css/ContactUs.css"; // Make sure to import the CSS file
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactUs = ({ data, settings }) => {
  return (
    <>
    <Navbar/>
    <section className="contact-section">
      <div className="contact-header animate__animated animate__fadeIn">
        <div className="background-overlay"></div>
        <div className="contact-title-container animate__animated animate__fadeInLeft">
          <div className="vertical-line"></div>
          <h1 className="contact-title">Contact Us</h1>
        </div>
      </div>

      <div className="breadcrumbs-wrapper animate__animated animate__fadeInRight">
        <div className="container">
          <ul className="breadcrumbs" id="breadcrumbs">
            <li><a href="/">Home |</a></li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="address-section">
        <div className="container">
          <div className="address-cards animate__animated animate__fadeInUp">
            <div className="address-card">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              </div>
              <h3>Address Way</h3>
              <p>
                132 B,<br />
                beside Manohar Dairy,<br />
                MP Nagar, Zone - I,<br />
                Bhopal, M.P 462011
              </p>
            </div>
            <div className="address-card">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </div>
              <h3>Contact Info</h3>
              <p>
                +91 72240 32078<br />
                admin@mentorbot.in
              </p>
            </div>
            <div className="address-card">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </div>
              <h3>Join Us</h3>
              <div className="social-links animate__animated animate__pulse animate__infinite">
                <a href="https://twitter.com/mentorb0t" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/mentor-bot-73274724b/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://www.youtube.com/channel/UC_Pj72CWHP-ZPyUGtk4igHg" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.instagram.com/mentorbot.in/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100072427163735" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form 7 Component */}
      <div className="contact-form-section">
        <div className="container">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-74968e3 thim-ekits-heading-text-center elementor-widget thim-ekits-heading elementor-widget-thim-heading" data-id="74968e3" data-element_type="widget" data-widget_type="thim-heading.default">
              <div className="elementor-widget-container">
                <div className="sc_heading text-center">
                  <h3 className="title animate__animated animate__fadeInLeft">Fill the form below so we can get to know you and your needs better.</h3>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-db9c2bc elementor-widget elementor-widget-thim-ekits-contact-form-7" data-id="db9c2bc" data-element_type="widget" data-widget_type="thim-ekits-contact-form-7.default">
              <div className="elementor-widget-container animate__animated animate__zoomIn">
                <div className="thim-ekit-wpcf7">
                  <div className="wpcf7 js" id="wpcf7-f13916-p87-o1" lang="en-US" dir="ltr">
                    <div className="screen-reader-response">
                      <p role="status" aria-live="polite" aria-atomic="true"></p>
                      <ul></ul>
                    </div>
                    <form action="/demo-main/contact/#wpcf7-f13916-p87-o1" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate="novalidate" data-status="init">
                      <div style={{ display: 'none' }}>
                        <input type="hidden" name="_wpcf7" value="13916" />
                        <input type="hidden" name="_wpcf7_version" value="5.9.5" />
                        <input type="hidden" name="_wpcf7_locale" value="en_US" />
                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f13916-p87-o1" />
                        <input type="hidden" name="_wpcf7_container_post" value="87" />
                        <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                      </div>
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="your-name">
                          <input size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Name *" value="" type="text" name="your-name" />
                        </span>
                      </p>
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="your-email">
                          <input size="40" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email *" value="" type="email" name="your-email" />
                        </span>
                      </p>
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="your-website">
                          <input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Website *" value="" type="text" name="your-website" />
                        </span>
                      </p>
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="your-message">
                          <textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message *" name="your-message"></textarea>
                        </span>
                      </p>
                      <p>
                        <input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Submit now" />
                        <span className="wpcf7-spinner"></span>
                      </p>
                      <div className="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section" style={{ marginBottom: '200px' }}> {/* Adjust margin as needed */}
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.1145922482285!2d77.43282243862926!3d23.234745744756385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42664ad131e3%3A0x49fbb31da961dd9a!2sMP%20Nagar%20Zone-I%2C%20Bhopal%2C%20Madhya%20Pradesh%20462011!5e0!3m2!1sen!2sin!4v1688011598960!5m2!1sen!2sin"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
    </>
  );
};

export default ContactUs;
