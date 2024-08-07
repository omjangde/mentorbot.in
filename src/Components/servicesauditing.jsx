import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../css/servicesdetails.css';
import img3 from '../Components/Services/img3.webp';
import IconComponent from './Icons';
import Navbar from './Navbar';

const ServicesAuditing = () => {
  return (
    <>
    <Navbar/>
      <section className="services-section">
        <div className="job-details-content">
          <div className="services-header animate__animated animate__fadeInDown">
            <div className="sbackground-overlay"></div>
            <img src={img3} alt="img3" />
            <Link to="/services/offensive-penetration-testing"></Link>
            <div className="service-title-container animate__animated">
              <h1 className="service-title animate__animated animate__fadeInUp">Auditing</h1>
            </div>
          </div>

          <div className="service-details">
            <div className="scontainer">
              <div className="service-cards animate__animated animate__fadeInUp">
                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>Cloud Security Assessment</h3>
                  <p>
                    A cloud security assessment evaluates your organization’s cloud infrastructure. Our certified engineers can assist with an assortment of services to evaluate your organization’s cloud security posture, including cloud architecture reviews, web application assessments, host audits, and infrastructure-based penetration testing.
                    Console audits for AWS, Azure, and GCP consider the organization’s cloud perimeter and internal network architectures. After reviewing the architecture, the engineer validates the implementation on the system consoles. This review precipitates architectural and detailed implementation recommendations for improvement.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Malware Assessment</h3>
                  <p>
                    A host compliance audit evaluates a device (workstation, server, etc.) for security best-practices. Our engineers will evaluate the security of the device through measures such as attempting to boot alternate media, evaluating endpoint security solutions against malware, reviewing firewall configurations, reviewing patch management, and more.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>Network Config Assessment</h3>
                  <p>
                    A console architecture assessment considers the perimeter and internal network architectures and configurations. After reviewing the architecture and configurations, the engineer validates the implementation on the system consoles. This review precipitates architectural and detailed implementation recommendations for improvement.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Password Audit</h3>
                  <p>
                    A password audit is the evaluation of your organization’s password policy. Our engineers will perform a dump of all user hashes within an organization and perform hash cracking against the hashes to evaluate password strength. Weak passwords are one of the most common ways we compromise organizations. An audit can assist with employee training and the improvement of your organization’s password policy and security posture.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="circle" />
                  <h3>Security Policy Assessment</h3>
                  <p>
                    A security policy assessment is the evaluation of your organization’s current security policies. Our engineers will assist with the improvement of policies or create policies for your organization. Some policies we can assist with include: Acceptable Use Policy (AUP), Incident Response, Disaster Recovery, Remote Access, BYOD, and more.
                  </p>
                </div>

                <div className="s1card">
                  <IconComponent shape="square" />
                  <h3>Security Risk Assessment</h3>
                  <p>
                    A security risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information. Our engineers will evaluate your organization and the controls currently in place to provide strategic recommendations based on the likelihood and impact of our findings.
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

export default ServicesAuditing;
