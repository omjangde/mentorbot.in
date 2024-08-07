import React, { useState } from 'react';
import '../css/applyforAdt.css';

const ApplyAdt = ({ onClose, jobTitle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [contactMethod, setContactMethod] = useState('phone');
    const [graduation, setGraduation] = useState('');
    const [experience, setExperience] = useState('');
    const [resume, setResume] = useState(null);
    const [aboutYou, setAboutYou] = useState('');
    const [meetDate, setMeetDate] = useState('');
    const [meetTime, setMeetTime] = useState('');
    const [fullAddress, setFullAddress] = useState('');

    const handleFileChange = (event) => {
        setResume(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('contactMethod', contactMethod);
        formData.append('graduation', graduation);
        formData.append('experience', experience);
        formData.append('resume', resume);
        formData.append('aboutYou', aboutYou);
        formData.append('meetDate', meetDate);
        formData.append('meetTime', meetTime);
        formData.append('fullAddress', fullAddress);
        formData.append('jobTitle', jobTitle);

        try {
            const response = await fetch('http://localhost:5001/api/apply', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Job application submitted successfully');
            } else {
                const errorText = await response.text();
                console.error('Failed to submit job application:', errorText);
                alert('Failed to submit job application: ' + errorText);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className='adtoverlay'>
            <div className='adtmodal'>
                <button className='adt-close-button' onClick={onClose}>Close</button>
                <section id='adt'>
                    <div className='adtcontainer'>
                        <div className='adt-box'>
                            <form className='adt-form' onSubmit={handleSubmit}>
                                <h1>✨Application for {jobTitle}✨</h1>
                                <h2>Apply here for further contact</h2>
                                <div className='adt-group'>
                                    <h3>Name</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            name='name'
                                            className='adt-input-field'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Email</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='email'
                                            placeholder='Ex: email@mail.com'
                                            name='email'
                                            className='adt-input-field'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Phone</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='tel'
                                            placeholder='Ex: 9980317405'
                                            name='phone'
                                            className='adt-input-field'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Preferred Contact Mode</h3>
                                    <div className='adt-input-wrapper'>
                                        <select
                                            name='contactMethod'
                                            className='adt-input-field'
                                            value={contactMethod}
                                            onChange={(e) => setContactMethod(e.target.value)}
                                            required>
                                            <option value='phone'>Phone</option>
                                            <option value='email'>Email</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Graduation</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='text'
                                            placeholder='Graduation details'
                                            name='graduation'
                                            className='adt-input-field'
                                            value={graduation}
                                            onChange={(e) => setGraduation(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Experience</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='text'
                                            placeholder='Experience details'
                                            name='experience'
                                            className='adt-input-field'
                                            value={experience}
                                            onChange={(e) => setExperience(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Resume</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='file'
                                            name='resume'
                                            className='adt-input-field'
                                            onChange={handleFileChange}
                                            required />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>About You</h3>
                                    <div className='adt-input-wrapper'>
                                        <textarea
                                            placeholder='Tell us about yourself'
                                            name='aboutYou'
                                            className='adt-input-field'
                                            value={aboutYou}
                                            onChange={(e) => setAboutYou(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Meeting Date</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='date'
                                            name='meetDate'
                                            className='adt-input-field'
                                            value={meetDate}
                                            onChange={(e) => setMeetDate(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Meeting Time</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='time'
                                            name='meetTime'
                                            className='adt-input-field'
                                            value={meetTime}
                                            onChange={(e) => setMeetTime(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Full Address</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='text'
                                            placeholder='Full address'
                                            name='fullAddress'
                                            className='adt-input-field'
                                            value={fullAddress}
                                            onChange={(e) => setFullAddress(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <button type='submit' className='adt-submit-button'>Submit Application</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ApplyAdt;
