import React from 'react';
import '../css/blogs.css';// Assuming your CSS file is named blogs.css
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Blogs = () => {
  return (
    <>
    <Navbar/>
    <div className="Blogs">

      <h2>Read From Our Latest Blogs.</h2>

      <div className='cards-blogs'>
        <div className="card-blog">
          <span className="date">18 April 2024</span>
          <h3>Unlocking Security Insights: How SIEM Tools Enhance Threat Detection</h3>
          <p>A SIEM (Security Information and Event Management) tool is a comprehensive cybersecurity solution that...</p>
          <a href='#'>Read more</a>
        </div>
        <div className="card-blog">
          <span className="date">18 April 2024</span>
          <h3>Demystifying MITRE ATT&CK: A Beginner’s Guide</h3>
          <p>MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) is a framework....</p>
          <a href='#'>Read more</a>
        </div>
        <div className="card-blog">
          <span className="date">18 April 2024</span>
          <h3>EncroChat: The Dark Side of Secure Communication</h3>
          <p>In the murky underworld of organised crime, communication is a double-edged sword. Criminals need to co...</p>
          <a href='#'>Read more</a>
        </div>
      </div>

      <Link className="butt" to="/blogs">
        <button>READ MORE</button>
      </Link>

    </div>
    </>
  );
};

export default Blogs;
