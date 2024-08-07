import React from 'react';

const Icons = ({ shape }) => {
  let shapeElement, backgroundElement;

  switch (shape) {
    case 'circle':
      shapeElement = (
        <>
          <circle cx="25" cy="25" r="20" fill="#eb6308" opacity=".15" />
          <circle cx="25" cy="25" r="15" fill="#eb6308" opacity=".4" />
          <circle cx="25" cy="25" r="10" fill="#eb6308" opacity=".6" />
          <circle cx="25" cy="25" r="5" fill="#eb6308" opacity=".8" />
          <circle cx="25" cy="25" r="2" fill="#eb6308" />
        </>
      );
      break;
    case 'square':
      shapeElement = (
        <>
          <rect x="10" y="10" width="30" height="30" fill="#eb6308" opacity=".15" />
          <rect x="15" y="15" width="20" height="20" fill="#eb6308" opacity=".4" />
          <rect x="20" y="20" width="10" height="10" fill="#eb6308" opacity=".6" />
          <rect x="23" y="23" width="4" height="4" fill="#eb6308" opacity=".8" />
          <rect x="24" y="24" width="2" height="2" fill="#eb6308" />
        </>
      );
      break;
    
    default:
      shapeElement = null;
  }

  return (
    <svg width="50" height="50" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>{`svg [data-color="1"] {fill: #8A8A8A;}`}</style>
      </defs>
      <g>
        {shapeElement}
      </g>
    </svg>
  );
};

export default Icons;
