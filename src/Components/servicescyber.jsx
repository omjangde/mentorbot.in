import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../css/servicesdetails.css';
import img4 from '../Components/Services/img4.webp';
import IconComponent from './Icons';
import Navbar from './Navbar';


const ServicesCyber = () => {
  return (
    <>
    <Navbar/>
      <section className="services-section">
        <div className="job-details-content">
          <div className="services-header animate__animated animate__fadeInDown">
            <div className="sbackground-overlay"></div>
            <img src={img4} alt="img4" />
            <Link to="/services/offensive-penetration-testing"></Link>
            <div className="service-title-container animate__animated">
              <h1 className="service-title animate__animated animate__fadeInUp">Cyber forensic</h1>
            </div>
          </div>

          <div className="service-details">
            <div className="scontainer">
              <div className="service-cards animate__animated animate__fadeInUp">
                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>Cloud/Network/Live Forensics/Incident Response</h3>
                  <p>
                    
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Social Media/OSINT/Dark Web/Blockchain/Investigations</h3>
                  <p>
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>Decryption/Password Recovery</h3>
                  <p>
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Mobile/ JTAG/ Chip-Off Phone Forensics</h3>
                  <p>
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>Hard Drive/ Damaged Hard Drive Forensics</h3>
                  <p>
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>DVR/ NVR/ CCTV Video Forensics</h3>
                  <p>
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Forensic Acquisition & Extraction</h3>
                  <p>
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Forensic Analysis & Reporting</h3>
                  <p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesCyber;
