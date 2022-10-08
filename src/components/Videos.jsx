import React, { useState } from "react";
import "./stylesheets/Videos.css";

let link1 = "https://www.youtube.com/embed/m4g0zd4E_bo";
let title1 = "PIAIC offering free first quarter classes online";

let link2 = "https://www.youtube.com/embed/NPGapK5aMII";
let title2 = "PIAIC OFFICIAL COVID-19 Coronavirus Policy";

let link3 = "https://www.youtube.com/embed/_rUQ301EJAo";
let title3 = "PIAIC Classes Coming Soon!";

let link4 = "https://www.youtube.com/embed/RuYbBHHF4VM";
let title4 = "Teaser 2: PIAIC Classes Coming Soon";

let link5 = "https://www.youtube.com/embed/sqtc7s1KZEg";
let title5 = "PIAIC Intro - Full Version";

let link8 = "https://www.youtube.com/embed/7fjcWkDFbcg";
let title8 = "PIAIC Launch - President Arif Alvi Address";

let link10 = "https://www.youtube.com/embed/5p8oJVVg2P4";
let title10 = "PTV Coverage of PIAIC Launch Event";

let text1 =
  "The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.";

let text2 =
  "The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.";

let text3 =
  "The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.";

let text4 =
  "The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.";

let text5 =
  "Official intro video of the PIAIC. Messages from President Dr. Arif Alvi, Kazi Rahat Ali, Hunaid Lakhani, Sulaiman S. Mehdi, and Zia Ullah Khan.";

let text8 =
  "Presidential address at the launch of the Presidential Initiative for Artificial Intelligence and Computing on December 9, 2018.";

let text10 = "PTV Coverage of PIAIC Launch Event on December 9, 2018";

let img1 =
  "https://i.ytimg.com/vi/m4g0zd4E_bo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCIG8swl5weIsSt_36mG2VyKPupyw";

let img2 =
  "https://i.ytimg.com/vi/NPGapK5aMII/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAx5pegJf4dKBlDmoYz5B-paYAU1A";

let img3 =
  "https://i.ytimg.com/vi/_rUQ301EJAo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAtBZodxxHyobIDP13zgWTQ92E-hQ";

let img4 =
  "https://i.ytimg.com/vi/RuYbBHHF4VM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLABXcLM3C6FliZCd7LcHmdfftlMyw";

let img5 =
  "https://i.ytimg.com/vi/sqtc7s1KZEg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNwQn7v_KMACOFna29uryb3EpPzg";

let img8 =
  "https://i.ytimg.com/vi/7fjcWkDFbcg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAJ712JI48vC7_tJQmhlOjnsIEx_A";

let img10 =
  "https://i.ytimg.com/vi/5p8oJVVg2P4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXEtZvFoYIbr2qr3o_yZ_qZ-0G8Q";

const options = {
  display: "inline-block",
  "background-position": "50%",
  "background-size": "cover",
  width: "471px",
  height: "119px",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

const Videos = () => {
  const [link, setLink] = useState(link1);
  const [title, setTitle] = useState(title1);
  const [text, setText] = useState(text1);
  return (
    <div>
      <div className="container" data-aos="fade-in" data-aos-duration="2000">
        <h1 className="heading-of-videos">Videos</h1>
        <div className="content">
          <div className="videos">
            <iframe
              width="817"
              height="480"
              src={link}
              title={title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p
              className="bottom-text1"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              {title}
            </p>
            <p className="bottom-text2">{text}</p>
          </div>
          <div className="videoLinks">
            <div
              className="subVideoLinks"
              onClick={() => {
                setTitle(title1);
                setLink(link1);
                setText(text1);
              }}
            >
              <div
                style={{ backgroundImage: `url(${img1})`, ...options }}
              ></div>
              <div >
                <h4>{title1}</h4>
                <p>{text1}</p>
              </div>
            </div>
            <div
              className="subVideoLinks"
              onClick={() => {
                setTitle(title2);
                setLink(link2);
                setText(text2);
              }}
            >
              <div
                style={{ backgroundImage: `url(${img2})`, ...options }}
              ></div>
              <div >
                <h4>{title2}</h4>
                <p>{text2}</p>
              </div>
            </div>
            <div
              className="subVideoLinks"
              onClick={() => {
                setTitle(title3);
                setLink(link3);
                setText(text3);
              }}
            >
              <div
                style={{ backgroundImage: `url(${img3})`, ...options }}
              ></div>
              <div >
                <h4>{title3}</h4>
                <p>{text3}</p>
              </div>
            </div>
            <div
              className="subVideoLinks"
              onClick={() => {
                setTitle(title4);
                setLink(link4);
                setText(text4);
              }}
            >
              <div
                style={{ backgroundImage: `url(${img4})`, ...options }}
              ></div>
              <div >
                <h4>{title4}</h4>
                <p>{text4}</p>
              </div>
            </div>
            <div
              className="subVideoLinks"
              onClick={() => {
                setTitle(title5);
                setLink(link5);
                setText(text5);
              }}
            >
              <div
                style={{ backgroundImage: `url(${img5})`, ...options }}
              ></div>
              <div >
                <h4>{title5}</h4>
                <p>{text5}</p>
              </div>
            </div>
            <div
              className="subVideoLinks"
              onClick={() => {
                setTitle(title8);
                setLink(link8);
                setText(text8);
              }}
            >
              <div
                style={{ backgroundImage: `url(${img8})`, ...options }}
              ></div>
              <div >
                <h4>{title8}</h4>
                <p>{text8}</p>
              </div>
            </div>
            <div
              className="subVideoLinks"
              onClick={() => {
                setTitle(title10);
                setLink(link10);
                setText(text10);
              }}
            >
              <div
                style={{ backgroundImage: `url(${img10})`, ...options }}
              ></div>
              <div >
                <h4>{title10}</h4>
                <p>{text10}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Videos;
