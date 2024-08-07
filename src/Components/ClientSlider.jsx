import React from 'react';
import { IoIosQuote } from "react-icons/io";
import '../css/ClientSlider.css';

const ClientSlider = (props) => {
    const { name, position, img_url, stars, disc } = props.item;
    return (
        <div className="client-slider-container">
            <div className="theader">
                <span className="tquote"><IoIosQuote /></span>
            </div>
            
            <p className="tbody">
                {disc}
            </p>
            <div className="tfooter">
                <img src={img_url} alt={name} />
                <div className="tdetails">
                    <h1>{name}</h1>
                    <p>{position}</p>
                </div>
            </div>
            
        </div>
    );
}

export default ClientSlider;
