import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/blogs-main.css';
import Footer from './Footer';
import Navbar from './Navbar';
const Blogsmain = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }

    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5001/blogs');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs');
          setError('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error fetching blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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
    <Navbar/>
    <section className="blogs-section">
      <div className="blog-header">
        <div className="background-overlay"></div>
        <div className="blog-title-container">
          <div className="vertical-line"></div>
          <h1 className="blog-title">Blogs</h1>
        </div>
      </div>

      <div className='blogs-section-padding'>
        {blogs.map((blog) => {
          const { day, month } = formatDate(blog.dateNumber);
          return (
            <div key={blog._id} className='blog-post-summary'>
              <div className='date-container'>
                <h1 className='date-number-design'>{day}</h1>
                <p className='date-word-section'>{month}</p>
              </div>
              <div className="post-details">
                <h2 className="post-title">{blog.postTitle}</h2>
                <div className="post-meta">
                  <div className="meta-item">
                    <span>Posted by</span>
                    <strong>{blog.author}</strong>
                  </div>
                  <div className="meta-item">
                    <span>Categories</span>
                    <strong>{blog.category}</strong>
                  </div>
                </div>
              </div>
              <p className="post-excerpt">{blog.postExcerpt}</p>
              <Link to={`/blogs/${encodeURIComponent(blog.postTitle)}`}>
                <button className="read-more">READ MORE</button>
              </Link>             
            </div>
          );
        })}
      </div>
      <Footer />
    </section>
    </>
  );
};

export default Blogsmain;
