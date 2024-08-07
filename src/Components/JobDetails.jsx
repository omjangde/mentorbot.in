import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/JobDetails.css';
import ApplyAdt from './ApplyAdt';
import Footer from './Footer';
import Navbar from './Navbar';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openAdtPage, setOpenADTPage] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:5001/careers`);
        if (response.ok) {
          const data = await response.json();
          const foundJob = data.find((j) => j._id === id);
          if (foundJob) {
            setJob(foundJob);
          } else {
            setError('Job not found');
          }
        } else {
          console.error('Failed to fetch careers');
          setError('Failed to fetch jobs');
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Error fetching jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div>
    <Navbar/>
    <section className="center">
      <div className="box-shade">
        {job.jobImage && job.jobImage.data && (
          <img
            className='out-course-img'
            src={`data:${job.jobImage.contentType};base64,${arrayBufferToBase64(job.jobImage.data.data)}`}
            alt={job.jobTitle}
          />
        )}
        <div className="job-details-content">
          <div className="location">
            <strong>Location:</strong> {job.location || 'Not specified'}
          </div>
          <div className="experience-level">
            <strong>Experience Level:</strong> {job.experienceLevel || 'Not specified'}
          </div>
          <div className="type">
            <strong>Type:</strong> {job.employmentType || 'Not specified'}
          </div>
          <div className="blog-article-description">
            <p><strong>About us:</strong> {job.jobDescription || 'No description available'}</p>
          </div>  
          {job.responsibilities && (
            <div className="blog-article-description">
              <p><strong>Key Responsibilities:</strong></p>
              <ul>
                {job.responsibilities.split('\n').map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )}
          {job.qualifications && (
            <div className="blog-article-description">
              <p><strong>Qualifications:</strong></p>
              <ul>
                {job.qualifications.split('\n').map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
          )}
          {job.howToApply && (
            <div className="blog-article-description">
              <p><strong>How to Apply:</strong> {job.howToApply}</p>
              <button className='button orange-btn' onClick={() => setOpenADTPage(true)}>Apply for Above Role</button>
              {openAdtPage && (
                <ApplyAdt onClose={() => setOpenADTPage(false)} jobTitle={job.jobTitle} />
              )}
            </div>
          )}
          <div className="font-size09">
            <div>🚀 MentorBot: Educating Today, Empowering Tomorrow. 🚀</div>
            <div>Team {job.company}</div>
            <div>{new Date(job.applicationDeadline).toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default JobDetails;
