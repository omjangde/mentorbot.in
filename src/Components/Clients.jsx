import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ClientSlider from './ClientSlider';
import '../css/Clients.css';

let clients = [
    {
        name: "RITHU SARVI",
        position: "KLE SOCIETY, BENGALURU",
        img: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg',
        disc: `I am extremely grateful to the company for their exceptional services in career counseling, students' development, and cyber security training. Their team of experts provided insightful guidance and personalized support, helping me navigate the complex job market with confidence. Their comprehensive cybersecurity training equipped me with the necessary skills to protect digital assets effectively. Moreover, their efforts in connecting students with internships and job opportunities were commendable, ensuring a seamless transition into the professional world. I highly recommend their services to anyone seeking holistic career growth, invaluable industry insights, and a secure path towards their dream job. `
    },
    {
        name: "PRAZAL SATPUTE",
        position: "LNCT, BHOPAL",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        disc: `I am truly grateful for the outstanding services provided by MentorBot. Their expertise in career counseling, students' development, and cyber security training has exceeded my expectations. The guidance they offered throughout my academic journey was instrumental in shaping my career path. Their comprehensive approach not only equipped me with essential skills but also facilitated connections with internships and job opportunities in the field. Their dedication to helping students achieve their goals is commendable. I highly recommend MentorBot to anyone seeking professional development, mentorship, and a secure future in the ever-evolving world of cybersecurity.`
    },
    {
        name: "SAMRUDDHI PANDEY",
        position: "MALLA REDDY COLLEGE, HYDERABAD",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        disc: `"I am incredibly grateful to the company for their outstanding services in career counseling, students' development, and cyber security training. Their team of experts provided me with invaluable guidance, helping me navigate the complexities of the job market and secure a rewarding internship. Their comprehensive cybersecurity training equipped me with the necessary skills to excel in the field. Moreover, their unwavering support and personalized approach made the entire process seamless and efficient. Thanks to them, I have now landed my dream job and have a promising future ahead. I wholeheartedly recommend their services to anyone seeking professional growth and a successful career path.`
    },
    {
        name: "AJAY KUMAR",
        position: "STUDENT, ENGINEERING",
        img_url: "https://example.com/alice_johnson.jpg",
        disc: `I cannot express enough gratitude for the transformative experience I had with MentorBot. Their career counselling and student development programs equipped me with invaluable skills and guidance. The cyber security training was top-notch, preparing me for the ever-evolving digital landscape. With their support, I secured an incredible internship and landed my dream job. Thank you for being the catalyst in shaping my future! `
    },
    {
        name: "ASHUTOSH SHARMA",
        position: "PUNJAB",
        img_url: "https://example.com/alice_johnson.jpg",
        disc: `Where do I even begin? MentorBot has been an absolute game-changer in my journey towards professional success. Their career counselling and student development programs provided me with personalized guidance, uncovering my strengths and passions. The cyber security training was unparalleled, empowering me with cutting-edge knowledge and skills. With their unwavering support, I not only landed an exceptional internship but also secured my dream job in the field. The team's expertise, dedication, and genuine care for students' futures are commendable. I am forever grateful for the doors they opened and the transformative impact they had on my career trajectory. Thank you, MentorBot, for shaping my future in the most incredible way! `
    },
];

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = clients.map((item, i) => (
        <div className="client-card" key={i}>
            <ClientSlider item={item} />
        </div>
    ));

    useEffect(() => {
        const testimonials = document.querySelector('.tcontainer .orange');
        testimonials.style.opacity = 1; // Ensure opacity is set to 1
    }, []);

    return (
        <div className="tcontainer" id="client">
            <span className="orange">Testimonials</span>
            <h1>what clients say</h1>
            <div className="testimonials">
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <div className="tbuttons">
                    <button onClick={() => arrowRef.current.slickPrev()}>
                        <IoIosArrowBack />
                    </button>
                    <button onClick={() => arrowRef.current.slickNext()}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Clients;
