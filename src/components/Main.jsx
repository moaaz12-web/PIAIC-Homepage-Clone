import React from "react";
import "./stylesheets/Main.css";
const Main = () => {
  return (
    <>
      <body>
        <div className="imgDiv">
          <img src=".\images\download.jpg" alt="" />
        </div>
        <div className="contentDiv">
          <ul data-aos="fade-down" data-aos-duration="3000">
            <li id="li1">Presidential initiative</li>
            <li id="li2">for Artificial Intelligence and Cloud Computing</li>
            <li id="li3">
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
              {/* </div> */}
            </li>
            <div className="smallDiv">
              <button>APPLY</button>
            </div>
            <p id="li4">Available Programs</p>
          </ul>
        </div>
      </body>
      <section>
        <div className="cards" data-aos="fade-up" data-aos-duration="3000">
          <div id="hover-blue">
            <div className="head blue"></div>
            <div className="subhead blue-sub">Artificial Intelligence</div>
          </div>
        </div>
        <div className="cards" data-aos="fade-up" data-aos-duration="3000">
          <div id="hover-pink">
            <div className="head pink"></div>
            <div className="subhead pink-sub">Cloud Native and Mobile Web</div>
          </div>
        </div>
        <div className="cards" data-aos="fade-up" data-aos-duration="3000">
          <div id="hover-yellow">
            <div className="head yellow"></div>
            <div className="subhead yellow-sub">Blockchain</div>
          </div>
        </div>
        <div className="cards" data-aos="fade-up" data-aos-duration="3000">
          <div id="hover-green">
            <div className="head green"></div>
            <div className="subhead green-sub">Internet of things and AI</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
