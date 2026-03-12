// import womanimage from 'UI\public\images\longwomanImage.jpg';
import React from 'react';
import './HomePageDesign.css';

// For files in public folder, we use the absolute path as a string variable
const first = '/images/firstimage.jpg';

const HomePageDesign = () => {
  return (
    <div id="designbox">
    
    
    
      <div id="left">
        {/* Your left content */}

        <div id="shoptext">Elevate Your Style. Discover The Collection</div>

        <button id="purches">Shop Now </button>
      </div>

      <div id="rightright">
        {/* Using the variable 'first' here */}
        <img src={first} alt="First Design" className="right-box-img" />
      </div>
    </div>
  );
};

export default HomePageDesign;