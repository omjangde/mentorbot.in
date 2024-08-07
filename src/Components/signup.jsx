import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/signup.css';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Home from './Home';


const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data", data);
    if (data.password === data.confirmPassword) {
      console.log("SummaryApi.SignUp.url", SummaryApi.SignUp.url);
      const dataResponse = await fetch(SummaryApi.SignUp.url, {
        method: SummaryApi.SignUp.method,
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      console.log("Please check password and confirm password");
    }
  };

  const handleClose = (navigate) => {
    navigate('/');
  };

  return (
    <>
      <Home />
      <div className='soverlay'>
        <div className='smodal'>
          <div className='sclose-icon' onClick={() => handleClose(navigate)}>
            <CgClose />
          </div>
          <section id='signup'>
            <div className='scontainer'>
              <div className='signup-box'>
                <form className='signup-form' onSubmit={handleSubmit}>
                  <h1>✨Create Student Free Account✨</h1>
                  <div className='sinput-group'>
                    <div className='sinput-wrapper'>
                      <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        className='sinput-field'
                        value={data.name}
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className='sinput-group'>
                    <div className='sinput-wrapper'>
                      <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        className='sinput-field'
                        value={data.email}
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className='sinput-group'>
                    <div className='sinput-wrapper'>
                      <input
                        type='text'
                        placeholder='Phone Number'
                        name='phone'
                        className='sinput-field'
                        value={data.phone}
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className='sinput-group'>
                    <div className='sinput-wrapper'>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        name='password'
                        className='sinput-field'
                        value={data.password}
                        onChange={handleOnChange}
                      />
                      <div className='stoggle-password' onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>
                  <div className='sinput-group'>
                    <div className='sinput-wrapper'>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        className='sinput-field'
                        value={data.confirmPassword}
                        onChange={handleOnChange}
                      />
                      <div className='stoggle-password' onClick={() => setShowConfirmPassword(prev => !prev)}>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>
                  <div className='input-group rememberMe'>
                    <input
                      type='checkbox'
                      id='rememberMe'
                      checked={rememberMe}
                      onChange={() => setRememberMe(prev => !prev)}
                    />
                    <label htmlFor='rememberMe'>I agree to the Terms and Conditions</label>
                  </div>
                  <button className='register-button'>Register</button>
                  <p className='login-link'>
                    Already have an account? <Link to="/login" className='login-link-highlight'>Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};


export default Signup;
