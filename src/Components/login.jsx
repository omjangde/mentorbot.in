import React, { useContext, useState } from 'react';
import { CgClose } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/login.css';
import Home from './Home';
import Signup from './signup';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
  const [openSignUpPage, setOpenSignUpPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  const { fetchUserDetails } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataResponse = await fetch(SummaryApi.SignIn.url,{
      method: SummaryApi.SignIn.method,
      credentials: "include",
      headers: {
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      toast.success(dataApi.message)
      navigate('/dashboard')
      fetchUserDetails()
    }

    if(dataApi.error){
      toast.error(dataApi.message)
    }
  };

  const handleClose = (navigate) => {
    navigate('/');
  };

  return (
    <>
    <Home />
    <div className='overlay'>
      <div className='modal'>
        <div className='close-icon' onClick={() => handleClose(navigate)}>
          <CgClose />
        </div>
        <section id='login'>
          <div className='container'>
            <div className='login-box'>
              <form className='login-form' onSubmit={handleSubmit}>
                <h1>✨Login✨</h1>
                <div className='input-group'>
                  <div className='input-wrapper'>
                    <input
                      type='email'
                      placeholder='Username or email'
                      name='email'
                      className='input-field'
                      value={data.email}
                      onChange={handleOnChange} />
                  </div>
                </div>
                <div className='input-group'>
                  <div className='input-wrapper'>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder='Password'
                      name='password'
                      className='input-field' 
                      value={data.password}
                      onChange={handleOnChange}
                      />
                    <div className='toggle-password' onClick={() => setShowPassword(prev => !prev)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                  <div className='input-group remember-me'>
                    <div>
                      <input
                        type='checkbox'
                        id='rememberMe'
                        checked={rememberMe}
                        onChange={() => setRememberMe(prev => !prev)}
                      />
                      <label htmlFor='rememberMe'>Remember Me</label>
                    </div>
                    <Link to='/forgotPassword' className='forgot-password-link'>
                      Forgot your password ?
                    </Link>
                  </div>
                  <button className='submit-button'>Login</button>
                  <p className='signup-link'>
                    Don't have an account? <Link to="/signup" className='signup-link-highlight'>Register Now</Link>
                    {/* Don't have an account ? <button className='signup-link-highlight' onClick={() => setOpenSignUpPage(true)}>Register Now</button> */}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
  );
};

export default Login;
