import React from 'react';
import Footer from '../Footer';
import LocalImage3 from '../courses/courseint1.png';

const CyberForensics = () => {
  return (
    <div className="bg-white">
      <div className="h-32"></div>
      <div className="max-w-5xl px-4 mx-auto">
        <div className="section">
          <div>
            <h2 className="text-left text-2xl font-bold mb-4">Category</h2>
            <h1 className="text-4xl font-bold mt-8 mb-8">Intermediate-level</h1>
            <section className="bg-orange-600 text-white py-4 my-4">
              <div className="max-w-5xl px-4 mx-auto">
                <div>
                  <h2 className="text-left text-4xl font-extrabold mb-2 text-white">Linux/ Windows Privilege Escalation</h2>
                </div>
              </div>
            </section>
            <section>
              <div className="shadow-lg mb-4">
                <img
                  className="rounded-md"
                  width="100%"
                  src={LocalImage3}
                  alt="Master's in Ethical Hacking"
                />
                <p></p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="course-left">
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <h2 className="text-xl font-extrabold text-orange-600 mb-4"> What you will learn</h2>
                    <div className="text-base font-sans">
                    Do this course if you want to improve your Capture the Flag skills and get ready for certifications like the OSCP. If your Senior Security Analyst, need to conduct comperihensive testing or Grey Box Pentesting.
                    </div>
                  </div>
                  <div className="shadow-lg p-4 rounded-md mb-4">
                    <h2 className="text-xl font-extrabold text-orange-600 mb-4">Who is it for</h2>
                    <div>
                      <p className="text-base font-sans">
                      Penetration Testers.<br />
                          Cyber Security Analysts.<br />
                          Cyber Security Students who want to become an advanced PenTester.<br />
                          Students interested in how attackers escalate privileges on modern Windows endpoints.<br />
                          Anyone who starves into learning hacking and security.<br />
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
                        <span className="text-lg font-bold pr-4">₹ 6000</span>
                        <span className="line-through">(₹ 7500</span>
                        <span className="font-bold">50.00% OFF)</span>
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
                        Linux Privilege Escalation
                            M1-Linux Fundamental<br />
                            M2-Writable Files<br />
                            M3-Misconfigured NFS<br />
                            M4-Abusing Sudo Rights<br />
                            M5-SUID Binaries<br />
                            M6-Capabilities<br />
                            M7-Groups<br />
                            M8-Exploiting Cron jobs<br />
                            M9-Kernel Exploit<br />
                            M10-Automated Script<br />
                            M11-Shell Escaping<br />
                            M12-Password Hunting<br />
                            Windows Privilege Escalation<br />
                            M1-Introduction & Lab Setup<br />
                            M2-Exploiting Scheduled Tasks<br />
                            M3-Weak Services/Permissions<br />
                            M4-Kernel Exploits<br />
                            M5-Logon Autostart Execution<br />
                            M6-Passwords Hunting<br />
                            M7-Bypass ACL<br />
                            M8-Automated Tools<br />
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
