import React from 'react'
import './stylesheets/Header.css'
const Header = () => {
  return (
    <>
    <header data-aos="fade-left" data-aos-duration="2000">
        <img src=".\images\logo.svg" alt=""  />
        <nav>
            <div className="links" data-aos="fade-up"
     data-aos-duration="3000">How it works</div>
            <div className="links"data-aos="fade-up"
     data-aos-duration="3000">Apply</div>
            <div className="links"data-aos="fade-up"
     data-aos-duration="3000">Available Programs</div>
            <div className="links"data-aos="fade-up"
     data-aos-duration="3000">About Us</div>
            <div className="links"data-aos="fade-up"
     data-aos-duration="3000">WIT</div>
        </nav>
    </header>
    {/* <div className='border'></div> */}
    </>
  )
}

export default Header
