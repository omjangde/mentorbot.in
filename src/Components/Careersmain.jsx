import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Carrers.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Careersmain = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }

    const fetchCareers = async () => {
      try {
        const response = await fetch('http://localhost:5001/careers');
        if (response.ok) {
          const data = await response.json();
          setCareers(data);
        } else {
          console.error('Failed to fetch careers');
          setError('Failed to fetch careers');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error fetching careers');
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return { fullDate: dateString, day: '', month: '' };
    }
    const day = String(date.getDate()).padStart(2, '0');
    const monthIndex = date.getMonth();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[monthIndex];
    const year = date.getFullYear();
    return {
      fullDate: `${day}/${String(monthIndex + 1).padStart(2, '0')}/${year}`,
      day,
      month
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <section className="careers-section">
        <div className="careers-title">Join Our Team</div>
        <div className="careers-subtitle">Explore our current job openings</div>
        <div className="flex-testi-card">
          {careers.map((career) => {
            const { day, month } = formatDate(career.applicationDeadline);
            return (
              <div className="job-box" key={career._id}>
                <div className="job-inner-box">
                  {career.jobImage && career.jobImage.data && (
                    <img
                      className="out-course-img"
                      src={`data:${career.jobImage.contentType};base64,${arrayBufferToBase64(career.jobImage.data.data)}`}
                      alt={career.jobTitle}
                    />
                  )}
                  <div className="job-date">{`${day} ${month}`}</div>
                  <div className="job-title">{career.jobTitle}</div>
                  <div className="job-description">{career.jobDescription}</div>
                  <Link to={`/job-details/${career._id}`}>
                    <button className="read-more-btn">Read More</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Careersmain;
