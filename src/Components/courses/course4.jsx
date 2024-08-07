import React from 'react';
import Footer from '../Footer';
import LocalImage4 from '../courses/courseadv1.png';

const CyberForensics = () => {
  return (
    <div className="bg-white">
      <div className="h-32"></div>
      <div className="max-w-5xl px-4 mx-auto">
        <div className="section">
          <div>
            <h2 className="text-left text-2xl font-bold mb-4">Category</h2>
            <h1 className="text-4xl font-bold mt-8 mb-8">Expert-level</h1>
            <section className="bg-orange-600 text-white py-4 my-4">
              <div className="max-w-5xl px-4 mx-auto">
                <div>
                  <h2 className="text-left text-4xl font-extrabold mb-2 text-white">Bug Bounty</h2>
                </div>
              </div>
            </section>
            <section>
              <div className="shadow-lg mb-4">
                <img
                  className="rounded-md"
                  width="100%"
                  src={LocalImage4}
                  alt="Master's in Ethical Hacking"
                />
                <p></p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="course-left">
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <h2 className="text-xl font-extrabold text-orange-600 mb-4"> What you will learn</h2>
                    <div className="text-base font-sans">
                    Bug Bounty Hunter is an all-encompassing security course that equips free-hand security testers to discover potential bugs in applications and websites following advanced methodologies. Live web application penetration testing POC. Comprehensive tech-how to exploit diverse web applications and platforms.
                    </div>
                  </div>
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <h2 className="text-xl font-extrabold text-orange-600 mb-4">Who is it for</h2>
                    <div>
                      <p className="text-base font-sans">
                      Anyone looking to become a bug bounty hunter with little to no prior experience.
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
                        <span className="text-lg font-bold pr-4">₹ 40,000</span>
                        <span className="line-through">(₹ 50,000</span>
                        <span className="font-bold">₹ 20.00% OFF)</span>
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
                        1-Introduction to WAPT & OWASP Top 10<br />
                              2-Pentest Lab Setup<br />
                              3-Information Gathering & Reconnaissance<br />
                              4-Netcat For Pentester<br />
                              5-Configuration Management Testing<br />
                              6-Cryptography<br />
                              7-Authentication<br />
                              8-Session Management<br />
                              9-Local File Inclusion<br />
                              10-Remote File Inclusion<br />
                              11-Path Traversal<br />
                              12-OS Command Injection<br />
                              13-Open Redirect<br />
                              14-Unrestricted File Upload<br />
                              15-PHP Web Shells<br />
                              16-HTML Injection<br />
                              17-Cross-Site Scripting (XSS)<br />
                              18-Client-Side Request Forgery<br />
                              19-SQL Injection<br />
                              M20-XXE Injection<br />

                              <br/>

                  
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
