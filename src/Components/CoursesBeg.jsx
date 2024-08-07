import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css'; // Import animate.css for animations
import Footer from './Footer';
import Navbar from './Navbar';

const CoursesBeg = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }

    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5001/courses/beg');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched data:', data); // Debug: Log the fetched data
          setCourses(data);
        } else {
          console.error('Failed to fetch courses');
          setError('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error fetching courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="main-container bg-gray-100 min-h-screen pt-12 pb-20">
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center my-8">
            <h2 className="text-xl font-semibold text-orange-600 animate__animated animate__fadeInLeft mb-4">Category</h2>
            <h1 className="text-4xl font-semibold text-orange-600 animate__animated animate__fadeInLeft animate__delay-1s mb-8">Beginner-level</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
            {courses.map((course) => (
              <div key={course._id} className="text-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn" style={{ backgroundColor: '#FF751A' }}>
                {course.begcImage && course.begcImage.data && course.begcImage.contentType ? (
                  <div
                    className="h-60 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(data:${course.begcImage.contentType};base64,${arrayBufferToBase64(course.begcImage.data.data)})` }}
                  ></div>
                ) : (
                  <div
                    className="h-60 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url('/path/to/default/image.png')` }}
                  ></div>
                )}
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">{course.begcTitle}</h3>
                  <div className="flex items-center">
                    <span className="text-lg">★★★★★</span>
                    <span className="ml-2">5.0</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold"> {course.begcfees.split('(')[0]}</span>
                    <span className="line-through">{course.begcfees.match(/\( (.*) /)[1]}</span>
                    <span>{course.begcfees.match(/\( .* (\d+\.\d+% OFF)/)[1]}</span>
                  </div>
                  <p className="text-sm">
                    Instructor: <span className="font-semibold">{course.begcinstructor}</span>
                  </p>
                  <div className="mt-4">
                    <Link className="bg-white text-orange-600 px-4 py-2 rounded shadow" to={`/courses/${course._id}`}>
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default CoursesBeg;
