import React from "react";
import "./stylesheets/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="details1">
        <p className="footer-p">Navigation</p>
          <li>Home</li>
          <li>Apply</li>
          <li>How it works</li>
          <li>Artificial Intelligence</li>
          <li>Cloud Native and Mobile Web Computing</li>
          <li>Blockchain</li>
          <li>Internet of Things and AI</li>
          <li>About The President</li>
          <li>Management Committee</li>
          <li>Women Inclusion in Technology (WIT)</li>{" "}
      </div>
      <div className="details2">
        <p className="footer-p">Locations</p>
        <p className="footer-p">PIAIC Helpline</p>
        <img src="./images/cntch.png" alt="" />
        <p>Connect with us</p>
        
      </div>
    </footer>
  );
};

export default Footer;
