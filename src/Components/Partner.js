import React from 'react';
import '../css/Partner.css';
import partner1 from '../assets/partrner1.png';
import partner2 from '../assets/partrner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.jpeg';

const Partner = () => {
  return (
    <div className="partner-container">
      <h2>Our Partners</h2>
      <div className="partner-images">
      
        <div className="partner-image-container2">
          <img src={partner1} alt="Image 1" />
        </div>
        <div className="partner-image-container2">
          <img src={partner2} alt="Image 1" />
        </div>

        <div className="partner-image-container2">
          <img src={partner3} alt="Image 1" />
    
        </div>
        <div className="partner-image-container2">
          <img src={partner4} alt="Image 1" />
    
        </div>
      </div>
    </div>
  );
}

export default Partner;
