// src/Components/ServicesOffensive.jsx
import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../css/servicesdetails.css';
import img1 from '../Components/Services/img1.webp';
import IconComponent from './Icons';
import Navbar from './Navbar';


const ServicesOffensive = () => {
  return (
    <>
    <Navbar/>
      <section className="services-section">
        <div className="job-details-content">
          <div className="services-header animate__animated animate__fadeInDown">
            <div className="sbackground-overlay"></div>
            <img src={img1} alt="img1" />
            <Link to="/services/offensive-penetration-testing"></Link>
            <div className="service-title-container animate__animated">
              <h1 className="service-title animate__animated animate__fadeInUp">Offensive-Penetration Testing</h1>
            </div>
          </div>

          <div className="service-details">
            <div className="scontainer">
              <div className="service-cards animate__animated animate__fadeInUp">
                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>External Penetration Testing</h3>
                  <p>
                    An external penetration test emulates the role of an attacker attempting to gain access to an internal network without internal resources or inside knowledge. A Security engineer attempts to gather sensitive information through open-source intelligence (OSINT), including employee information, historical breached passwords, and more that can be leveraged against external systems to gain internal network access. The engineer also performs scanning and enumeration to identify potential vulnerabilities in hopes of exploitation.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Internal Penetration Testing</h3>
                  <p>
                    An internal penetration test emulates the role of an attacker from inside the network. A Security engineer will scan the network to identify potential host vulnerabilities. The engineer will also perform common and advanced internal network attacks, such as: man-in-the-middle attacks, token impersonation, kerberoasting, pass-the-hash, golden ticket, and more. The engineer will seek to gain access to hosts through lateral movement, compromise domain user and admin accounts, and exfiltrate sensitive data.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>Physical Penetration Testing</h3>
                  <p>
                    Physical penetration tests evaluate a company’s physical security posture. Our engineers will attempt to gain physical access to sensitive locations such as data centers, server rooms, and network closets through all means possible. Our toolkit includes, but is not limited to: drone reconnaissance, lockpicking, social engineering, sensor bypassing, and RFID/badge cloning.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Social Engineering</h3>
                  <p>
                    Humans are often the weakest link in an organization. Our engineers are capable of performing detailed phishing, vishing, whaling, and other advanced social engineering attacks with an end goal of evaluating your company’s social engineering posture as well as gaining access to requested sensitive data, information, PII, and more as determined by the customer.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>Vulnerability Scanning</h3>
                  <p>
                    Not all companies require a penetration test to successfully evaluate their security posture. Regular vulnerability scans are often an alternative. An engineer performs vulnerability scanning to search systems for known vulnerabilities without exploitation attempts with an end goal of providing a remediation report prioritized on risk.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Web Application Penetration Testing</h3>
                  <p>
                    Web application testing measures the security posture of your website and/or custom developed application. Security performs full unauthenticated and authenticated testing based on strict OWASP guidelines. Our engineers focus on identifying weak points across the entire web application to ensure your applications and data stay safe. Testing activities include hunting OWASP Top 10 Vulnerabilities, website mapping and enumeration, testing for injection attacks (SQL, JavaScript, LDAP, etc.), testing for remote code execution, malicious file upload abuse testing, and more.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>Wireless Penetration Testing</h3>
                  <p>
                    Wireless testing is the evaluation of your wireless posture. Nearly every business provides wireless access for their employees. Some go as far as allowing guests on the network. Our engineers evaluate WPA password strength, perform evil twin attacks, conduct WPA-Enterprise bypassing attacks, and evaluate network visibility and segmentation.
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

export default ServicesOffensive;
