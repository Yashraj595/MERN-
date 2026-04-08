import React from 'react'
import './SecondHome.css'
// import "./HomePageDesign.css"
import "./SecondHome.css"
const second = '/images/secondimage.jpg';
import {Link} from 'react-router-dom'

const SecondHome = () => {
  return (
    <>
      <div id="designbox" style={{marginTop:"0px", height:"700px",backgroundColor:"#ffd600" }}>
        
        <div id="left" style={{backgroundColor: "#ffd600"}}>
          {/* Your left content */}

          <div id="shoptext" >50% Flat off </div>

          <Link to="/shop">
            <button id="purches">Shop Now</button>
          </Link>
        </div>

        <div id="rightright">
          {/* Using the variable 'first' here */}
          <img src={second} alt="First Design" className="right-box-img" />
        </div>
      </div>
    </>
  );
}

export default SecondHome;
