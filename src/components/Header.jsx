import React from "react";
import "./stylesheets/Header.css";
const Header = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="2000">
    <div className="header">
      <div className="headImg"><img src=".\images\logo.svg" alt=""  /></div>
      <div className="headLinks">
          <span>How it works</span>
          <span>Apply</span>
          <span>Available Programs</span>
          <span>About Us</span>
          <span>WIT</span>
        {/* <>N VJV<//span> */}
      </div>
    </div>
    </div>

    // <div>
    //   <img src=".\images\logo.svg" alt=""  />
    //   <ul>
    //     <li>How it works</li>
    //     <li>Apply</li>
    //     <li>Available Programs</li>
    //     <li>Abour US</li>
    //     <li>WIT</li>
    //   </ul>

    // </div>
  
  );
};

export default Header;
