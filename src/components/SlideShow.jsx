import React, {useState} from 'react'
import './stylesheets/SlideShow.css'


const slideImages = [
    {
        url: 'images/s-img1.png',
        caption: 'President launching the PIAIC website.',
        text: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).'
    },

    {
        url: 'images/s-img2.png',
        caption: 'First meeting with the President.',
        text: 'First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust).'
    },
    {
        url: 'images/s-img3.png',
        caption: 'Meeting with Chief Secretary Sindh.',
        text: 'Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th, where he assured the PIAIC management team of his full support for the national cause and offered space at all the public universities in Sindh.'
    },
];



const SlideShow = () => {
    const [Img, setImg] = useState(slideImages[0].url)
    const [caps, setCaps] = useState(slideImages[0].caption)
    const [txt, setTxt] = useState(slideImages[0].text)

    return (
        <div>
            <div className="ccontainer">
            <h1 className="heading-of-images">Images</h1>

                <div className='CONTENT'>
                    <div className="ImgDiv">
                        <img src={Img}  alt="" data-aos="zoom-in" data-aos-duration="2000"/>
                    </div>
                    <div className="TextDiv">
                        <p className='heads'data-aos="flip-up" data-aos-duration="2000">{caps}</p>
                        <p className='subheads'data-aos="flip-up" data-aos-duration="2000">{txt}</p>
                    </div>

                </div>



            </div>
                <div className='abc'>
                    <span onClick={()=>{
                        setImg(slideImages[0].url)
                        setCaps(slideImages[0].caption)
                        setTxt(slideImages[0].text)

                    }}>1</span>
                    <span onClick={()=>{
                        setImg(slideImages[1].url)
                        setCaps(slideImages[1].caption)
                        setTxt(slideImages[1].text)
                        
                    }}>2</span>
                    <span onClick={()=>{
                        setImg(slideImages[2].url)
                        setCaps(slideImages[2].caption)
                        setTxt(slideImages[2].text)
                        
                    }}>3</span>
                </div>
        </div>
    )
}

export default SlideShow
