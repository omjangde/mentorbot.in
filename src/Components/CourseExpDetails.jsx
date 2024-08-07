import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/CourseExpDetails.css';
import Footer from './Footer';
import Navbar from './Navbar';

const CourseExpDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5001/courses/exp`);
        if (response.ok) {
          const data = await response.json();
          const foundCourse = data.find((c) => c._id === id);
          if (foundCourse) {
            setCourse(foundCourse);
          } else {
            setError('Course not found');
          }
        } else {
          console.error('Failed to fetch courses');
          setError('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Error fetching courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
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

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
    <Navbar/>
    <div>
    <section className="center">
      <div className="box-shade">
        <div className="image-container">
          {course.expcImage && course.expcImage.data && (
            <img
              className="out-course-img"
              src={`data:${course.expcImage.contentType};base64,${arrayBufferToBase64(course.expcImage.data.data)}`}
              alt={course.expcTitle}
            />
          )}
        </div>
        <div className="course-details-content">
          <div className="course-band">
            <h2>{course.expcTitle}</h2>
          </div>
          <div className="course-details-grid">
            <div className="course-details-left">
              <div className="course-details-box">
                <div className="mb-subheading">What you will learn</div>
                <div className="margin-1rem black-text">
                  {course.expcwhatlearn || 'No description available'}
                </div>
              </div>
              <div className="course-details-box">
                <div className="mb-subheading">Who is it for</div>
                {course.expcwhofor && (
                  <ul>
                    {course.expcwhofor.split('\r\n').map((target, index) => (
                      <li key={index} className="black-text">{target}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="course-details-box">
                <div className="mb-subheading">Who is your Instructor</div>
                <div className="margin-1rem black-text">
                  <strong>Instructor:</strong> {course.expcinstructor}
                </div>
                <div className="margin-1rem black-text">
                  <strong>Domain:</strong> {course.expcinstructordomain || 'Not specified'}
                </div>
              </div>
            </div>
            <div className="course-details-right">
              <div className="course-details-box">
                <div className="mb-subheading">Price</div>
                <div className="price-details">
                  <span className="current-price"> {course.expcfees}</span>
                  <span className="original-price"> {course.expcoriginalprice}</span>
                  {/* <span className="discount">({course.expcdiscount} OFF)</span> */}
                </div>
                <div className="buttons-container">
                  <button className="button orange-btn">Enroll now</button>
                  <a href="https://wa.me/+917224032078" target="_blank" className="button">Let's talk</a>
                  <button className="button">Download Here</button>
                </div>
              </div>
              <div className="course-details-box">
                <div className="mb-subheading">Syllabus</div>
                {course.expcsyllabus && (
                  <ul>
                    {course.expcsyllabus.split('\r\n').map((syllabusItem, index) => (
                      <li key={index} className="black-text">{syllabusItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="font-size09 text">
            <div>🚀 MentorBot: Educating Today, Empowering Tomorrow. 🚀</div>
            <div>Team MentorBot</div>
          </div>
        </div>
        
      </div>
     
    </section>
     <Footer/>
     </div>
     </>
  );
};

export default CourseExpDetails;
