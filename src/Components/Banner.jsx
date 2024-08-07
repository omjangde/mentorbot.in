//Banner.js

import React, { useEffect, useState, useCallback } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import '../css/banner.css'; // Import the CSS file
import image1 from '../assets/banner1.png';
import image2 from '../assets/banner2.png';
import image3 from '../assets/banner3.png';

const Banner = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);

    const desktopImages = [image1, image2, image3];

    const nextImage = useCallback(() => {
        setCurrentImage(prev => {
            if (prev === 0) {
                setTimeout(() => {
                    setStartAnimation(true);
                }, 500); // Timeout to match CSS transition time
            }
            return (prev + 1) % desktopImages.length;
        });
    }, [desktopImages.length]);

    const prevImage = useCallback(() => {
        setCurrentImage(prev => (prev - 1 + desktopImages.length) % desktopImages.length);
    }, [desktopImages.length]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                clearInterval(interval);
            } else {
                interval = setInterval(nextImage, 6000);
            }
        };

        let interval = setInterval(nextImage, 6000);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearInterval(interval);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [nextImage]);

    return (
        <>
            <div className='container'>
                <div className='banner'>
                    <div className='controls'>
                        {/* Uncomment and add icons or text to these buttons to enable them */}
                        <button onClick={prevImage}><FaAngleLeft /></button>
                        <button onClick={nextImage}><FaAngleRight /></button>
                    </div>
                    <div className='desktop-images'>
                        {desktopImages.map((url, index) => (
                            <div key={index} className={`image-container1 ${index === currentImage ? 'active' : ''}`} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                                {index === 0 && (

                                    <>
                                        <h1 className={`${index === currentImage ? 'active banner-text-left' : ''} ${startAnimation ? 'animate-text' : ''}`}>
                                            Guiding Your Next Step
                                        </h1>
                                        <h2 className={`${index === currentImage ? 'active banner-text-right' : ''} ${startAnimation ? 'animate-subtext' : ''}`}>
                                            Empowering Your Career:<br />
                                            Career Counselling<br />and <br />Tech Skills Training<br /> All in One Place!
                                        </h2>
                                    </>


                                )}
                                {index === 1 && (
                                    <>
                                        <h3 className={`${index === currentImage ? 'active banner-text-left' : ''} ${startAnimation ? 'animate-text' : ''}`}>
                                            Take a Step in<br />Cyber<br /> Security<br />   With Us!
                                        </h3>
                                        <h4 className={`${index === currentImage ? 'active banner-text-right' : ''} ${startAnimation ? 'animate-text' : ''}`}>
                                            Welcome to Mentorbot, a premiere technology training<br />
                                            provider specializing in cybersecurity training,<br />
                                            penetration testing, bug hunting, cyber forensics, AWS,<br />
                                            and data science.
                                        </h4>
                                    </>
                                )}
                                {index === 2 && (
                                    <>
                                        <h5 className={` ${index === currentImage ? 'active banner-text-left' : ''} ${startAnimation ? 'animate-text' : ''}`}>
                                            New Way <br />To Learn<br />From Home
                                        </h5>
                                        <h6 className={` ${index === currentImage ? 'active banner-text-right' : ''} ${startAnimation ? 'animate-text' : ''}`}>
                                            "Unlock your potential in the world of<br />
                                            cyber security with our exceptional<br />
                                            training programs. Gain the skills and<br />
                                            knowledge needed to defend against<br />
                                            threats and build a successful career. Join<br />
                                            our city's top-rated cyber security training<br />
                                            and become an expert in protecting digital<br />
                                            landscapes."
                                        </h6>
                                    </>
                                )}
                                <img src={url} alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;

