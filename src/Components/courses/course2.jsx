import React from 'react';
import Footer from '../Footer';
import LocalImage from '../courses/coursebeg1.png';

const CyberForensics = () => {
  return (
    <div className="bg-white">
      <div className="h-32"></div>
      <div className="max-w-5xl px-4 mx-auto">
        <div className="section">
          <div>
            <h2 className="text-left text-2xl font-bold mb-4">Category</h2>
            <h1 className="text-4xl font-bold mt-8 mb-8">Beginner-level</h1>
            <section className="bg-orange-600 text-white py-4 my-4">
              <div className="max-w-5xl px-4 mx-auto">
                <div>
                  <h2 className="text-left text-4xl font-extrabold mb-2 text-white">Master's in Ethical Hacking</h2>
                </div>
              </div>
            </section>
            <section>
              <div className="shadow-lg mb-4">
                <img
                  className="rounded-md"
                  width="100%"
                  src={LocalImage}
                  alt="Master's in Ethical Hacking"
                />
                <p></p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="course-left">
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <h2 className="text-xl font-extrabold text-orange-600 mb-4"> What you will learn</h2>
                    <div className="text-base font-sans">
                    "Embark on a transformative journey into the world of cybersecurity with our comprehensive Master's in Ethical Hacki program. This cutting-edge course is meticulously designed to equip students with the advanced skills and knowledge needed to navigate the rapidly evolving landscape of cyber threats and security vulnerabilities.
                    </div>
                  </div>
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <h2 className="text-xl font-extrabold text-orange-600 mb-4">Who is it for</h2>
                    <div>
                      <p className="text-base font-sans">
                      College Students<br />
                          IS/IT specialist, analyst, or manager<br />
                          IS/IT auditor or consultant<br />
                          IT operations manager<br />
                          Network security officers and practitioners<br />
                          Site administrators<br />
                          Technical support engineer<br />
                          Senior systems engineer<br />
                          Systems analyst or administrator<br />
                          IT security specialist, analyst, manager, architect, or administrator<br />
                          IT security officer, auditor, or engineer<br />
                          Network specialist, analyst, manager, architect, consultant, or administrator<br/>
                      </p>
                    </div>
                  </div>
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <h2 className="text-xl font-extrabold text-orange-600 mb-4"> Who is your Instructor</h2>
                    <div className="text-base font-sans mb-4">Abhishek Chouriya</div>
                    <div>
                      <p className="text-base font-sans">cyber security trainer</p>
                    </div>
                  </div>
                </div>
                <div className="course-right">
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <div className="text-xl font-extrabold text-orange-600">
                      <h2 className="text-xl font-extrabold text-orange-600 mb-4">
                        Price:
                        <span className="text-lg font-bold pr-4">₹ 49,999</span>
                        <span className="line-through">(₹ 58,822</span>
                        <span className="font-bold">15.00% OFF)</span>
                      </h2>
                    </div>
                    <div className="mb-4">
                      <a className="inline-block cursor-pointer text-center border border-solid border-orange-600 bg-orange-600 text-white py-2 px-6 rounded mb-4 mr-2 font-bold" href="#">
                        Enroll now
                      </a>
                      <a className="inline-block cursor-pointer text-center border border-solid border-orange-600 bg-orange-600 text-white py-2 px-6 rounded mb-4 mr-2 font-bold" target="_blank" href="#">
                        Let's talk
                      </a>
                    </div>
                  </div>
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <div className="mb-4">
                      <h2 className="text-xl font-extrabold text-orange-600 mb-4">Syllabus</h2>
                      <div>
                        <p className="text-base font-sans">
                        Introduction to Ethical Hacking<br />
                            Foot Printing and Reconnaissance<br />
                            Scanning Networks<br />
                            Enumeration<br />
                            Vulnerability Analysis<br />
                            System Hacking<br />
                            Malware Threats<br />
                            Sniffing<br />
                            Social Engineering<br />
                            Denial-of-Service<br />
                            Session Hijacking<br />
                            Evading IDS, Firewalls, and Honeypots<br />
                            Hacking Web Servers<br />
                            Hacking Web Applications<br />
                            SQL Injection<br />
                            Hacking Wireless Networks<br />
                            Hacking Mobile Platforms<br />
                            IoT and OT Hacking<br />
                            Cloud Computing<br />
                            Cryptography<br />
                            <br></br>
                        </p>
                      </div>
                      <div>
                        <a className="inline-block cursor-pointer text-center border border-solid border-orange-600 bg-orange-600 text-white py-2 px-6 rounded mb-4 mr-2 font-bold" href="#">Download Here</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default CyberForensics;
