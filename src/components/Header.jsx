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

    //     <>
    //     <div className='upd'>
    //     <header data-aos="fade-down" data-aos-duration="2000">
    //         <img src=".\images\logo.svg" alt=""  />
    //         <nav>
    //             <div className="links" data-aos="fade-up"
    //      data-aos-duration="3000">How it works</div>
    //             {/* <div className="links"data-aos="fade-up"
    //      data-aos-duration="3000">Apply</div> */}
    //             <div className="links"data-aos="fade-up"
    //      data-aos-duration="3000">Available Programs</div>
    //             <div className="links"data-aos="fade-up"
    //      data-aos-duration="3000">About Us</div>
    //             <div className="links"data-aos="fade-up"
    //      data-aos-duration="3000">WIT</div>
    //         </nav>
    //     </header>
    //     </div>
    //     {/* <div className='border'></div> */}
    //     </>

  
  );
};

export default Header;
