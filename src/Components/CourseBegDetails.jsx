import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/CourseBegDetails.css';
import Footer from './Footer';
import Navbar from './Navbar';

const CourseBegDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5001/courses/beg`);
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
          {course.begcImage && course.begcImage.data && (
            <img
              className="out-course-img"
              src={`data:${course.begcImage.contentType};base64,${arrayBufferToBase64(course.begcImage.data.data)}`}
              alt={course.begcTitle}
            />
          )}
        </div>
        <div className="course-details-content">
          <div className="course-band">
            <h2>{course.begcTitle}</h2>
          </div>
          <div className="course-details-grid">
            <div className="course-details-left">
              <div className="course-details-box">
                <div className="mb-subheading">What you will learn</div>
                <div className="margin-1rem black-text">
                  {course.begcwhatlearn || 'No description available'}
                </div>
              </div>
              <div className="course-details-box">
                <div className="mb-subheading">Who is it for</div>
                {course.begcwhofor && (
                  <ul>
                    {course.begcwhofor.split('\r\n').map((target, index) => (
                      <li key={index} className="black-text">{target}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="course-details-box">
                <div className="mb-subheading">Who is your Instructor</div>
                <div className="margin-1rem black-text">
                  <strong>Instructor:</strong> {course.begcinstructor}
                </div>
                <div className="margin-1rem black-text">
                  <strong>Domain:</strong> {course.begcinstructordomain || 'Not specified'}
                </div>
              </div>
            </div>
            <div className="course-details-right">
              <div className="course-details-box">
                <div className="mb-subheading">Price</div>
                <div className="price-details">
                  <span className="current-price"> {course.begcfees}</span>
                  <span className="original-price"> {course.begcoriginalprice}</span>
                  {/* <span className="discount">({course.begcdiscount} OFF)</span> */}
                </div>
                <div className="buttons-container">
                  <button className="button orange-btn">Enroll now</button>
                  <a href="https://wa.me/+917224032078" target="_blank" className="button">Let's talk</a>
                  <button className="button">Download Here</button>
                </div>
              </div>
              <div className="course-details-box">
                <div className="mb-subheading">Syllabus</div>
                {course.begcsyllabus && (
                  <ul>
                    {course.begcsyllabus.split('\r\n').map((syllabusItem, index) => (
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
    <Footer></Footer>
    </div>
    </>
  );
};

export default CourseBegDetails;
