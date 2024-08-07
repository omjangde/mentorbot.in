import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import '../css/dashboard.css'; // Import the CSS file
import logo from "../assets/logo.png";

const Dashboard = () => {
  const user = useSelector(state => state?.user?.user);
  const firstLetter = user?.name?.charAt(0).toUpperCase() || '';
  const [showDropdown, setShowDropdown] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5001/courses/beg');
        if (response.ok) {
          const data = await response.json();
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

  return (
    <div className='dashboard-container'>
      <aside className='dashboard-aside'>
        <img src={logo} alt="Logo" className='dashboard-logo' />
        <nav className='dashboard-nav'>
          <Link to={""} className='nav-link'>Dashboard</Link>
        </nav>
      </aside>

      <main className='dashboard-main'>
        <h1>Dashboard</h1>
        <h2>Welcome back, {user?.name}</h2>
        <div>
          <div className='profile-initial' onClick={toggleDropdown}>
            {firstLetter}
          </div>
          {showDropdown && (
            <div className='dropdown-menu'>
              <div className='dropdown-item'>
                <FaUser className='dropdown-icon' />{user?.name}
              </div>
              <div className='dropdown-item'>
                <FaEnvelope className='dropdown-icon' />{user?.email}
              </div>
              <div className='dropdown-item' onClick={handleLogout}>
                <FaSignOutAlt className='dropdown-icon' /> Logout
              </div>
              <div className='dropdown-item' onClick={toggleDropdown}>
                <FaTimes className='dropdown-icon' /> Close
              </div>
            </div>
          )}
        </div>

        <div className='dashboard-body'>
          <h3>Meeting Request</h3>
          <div>
            <a href="https://mentorbot.in/students/meeting-requests/create" className="button orange-btn">Add Meeting Request</a>
          </div>
          <h3>Recommended Courses</h3>
          {loading && <div>Loading courses...</div>}
          {error && <div>{error}</div>}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
              {courses.map((course) => (
                <div key={course._id} className="text-white p-4 rounded-lg shadow-md" style={{ backgroundColor: '#FF751A' }}>
                  {course.begcImage && course.begcImage.data && course.begcImage.contentType ? (
                    <div
                      className="h-40 bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url(data:${course.begcImage.contentType};base64,${arrayBufferToBase64(course.begcImage.data.data)})` }}
                    ></div>
                  ) : (
                    <div
                      className="h-40 bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url('/path/to/default/image.png')` }}
                    ></div>
                  )}
                  <div className="mt-2 space-y-1">
                    <h3 className="text-lg font-bold">{course.begcTitle}</h3>
                    <div className="flex items-center">
                      <span className="text-md">★★★★★</span>
                      <span className="ml-1">5.0</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-md font-bold">{course.begcfees.split('(')[0]}</span>
                      <span className="line-through">{course.begcfees.match(/\( (.*) /)[1]}</span>
                      <span>{course.begcfees.match(/\( .* (\d+\.\d+% OFF)/)[1]}</span>
                    </div>
                    <p className="text-xs">
                      Instructor: <span className="font-semibold">{course.begcinstructor}</span>
                    </p>
                    <div className="mt-2">
                      <Link className="bg-white text-orange-600 px-3 py-1 rounded shadow" to={`/courses/${course._id}`}>
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <h3>Your Courses</h3>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
