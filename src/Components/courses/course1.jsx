import React from 'react';
import Footer from '../Footer';
import LocalImage2 from '../courses/coursebeg2.png';

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
                  <h2 className="text-left text-4xl font-extrabold mb-2 text-white">Cyber Forensics</h2>
                </div>
              </div>
            </section>
            <section>
              <div className="shadow-lg mb-4">
                <img
                  className="rounded-md"
                  width="100%"
                  src={LocalImage2}
                  alt="Master's in Ethical Hacking"
                />
                <p></p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="course-left">
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <h2 className="text-xl font-extrabold text-orange-600 mb-4"> What you will learn</h2>
                    <div className="text-base font-sans">
                      Cyber forensics is a process of extracting data as proof of a crime (that involves electronic devices) while following proper investigation rules to nab the culprit by presenting the evidence to the court. Cyber forensics is also known as computer forensics. The main aim of cyber forensics is to maintain the thread of evidence and documentation to find out who did the crime digitally.
                    </div>
                  </div>
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <h2 className="text-xl font-extrabold text-orange-600 mb-4">Who is it for</h2>
                    <div>
                      <p className="text-base font-sans">
                        Professionals seeking to specialize in digital investigations.<br />
                        Law enforcement personnel involved in cybercrime investigations.<br />
                        Legal professionals dealing with digital evidence in legal cases.<br />
                        Information security specialists looking to enhance their skills in incident response.<br />
                        Computer science students interested in the field of digital forensics.<br />
                        Network administrators aiming to understand and respond to security incidents.<br />
                        Cybersecurity analysts aiming to develop expertise in forensic analysis.<br />
                        Forensic investigators focused on digital evidence collection and analysis.<br />
                        Incident responders responsible for handling cybersecurity breaches.<br />
                        Risk and compliance professionals dealing with data breach incidents.<br />
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
                        <span className="text-lg font-bold pr-4">₹ 59,999</span>
                        <span className="line-through">(₹ 74999</span>
                        <span className="font-bold">20.00% OFF)</span>
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
                          Module 01: Computer Forensics in Today’s World<br />
                          Module 02: Computer Forensics Investigation Process<br />
                          Module 03: Understanding Hard Disks and File Systems<br />
                          Module 04: Data Acquisition and Duplication<br />
                          Module 05: Defeating Anti-Forensics Techniques<br />
                          Module 06: Windows Forensics<br />
                          Module 07: Linux and Mac Forensics<br />
                          Module 08: Network Forensics<br />
                          Module 09: Investigating Web Attacks<br />
                          Module 10: Database Forensics<br />
                          Module 11: Cloud Forensics<br />
                          Module 12: Investigating Email Crimes<br />
                          Module 13: Malware Forensics<br />
                          Module 14: Mobile Forensics<br />
                          Module 15: IoT Forensics<br />
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
