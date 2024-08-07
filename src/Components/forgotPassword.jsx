import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Navbar from './Navbar';
import "../css/forgotPassword.css";
import Footer from "./Footer";


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/forgot-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error sending password reset email. Please try again.');
        }
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className='forgot-center'>
                <div>
                    <h1>Forgot your password?</h1>
                    <p>No problem. Let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
                    <form onSubmit={handleSubmit}>
                        <h2>Email</h2>
                        {/* <label for="email">Email</label> */}
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=""
                        />
                        <button type='submit' className='forgot-btn'>Email Password Reset Link</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ForgotPassword;
