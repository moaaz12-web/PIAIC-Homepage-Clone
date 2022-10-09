import React, {useState} from "react";
import "./stylesheets/Header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div >
     
    // <div className="header">
    //   <div className="headImg">
    //     <img src=".\images\logo.svg" alt=""  />
    //     <span>CLOSE</span>
    //     </div>
    //   <div className="headLinks">
    //       <span>How it works</span>
    //       <span>Apply</span>
    //       <span>Available Programs</span>
    //       <span>About Us</span>
    //       <span>WIT</span>
    //     {/* <>N VJV<//span> */}
    //   </div>
    // </div>
    // </div>

    <div className="Navbar">
      <img src=".\images\logo.svg" alt=""  id="ggg"/>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
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
