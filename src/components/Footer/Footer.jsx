import React,{useState} from 'react'
import './Footer.css'
import Brush from "../../assets/img/footer-brush.svg"

function Footer() {
    const [width,setWidth]=useState(true)
    const changeWidth=()=>{
        if(window.screen.width>=1024){
          setWidth(false)
        }
        else{
            setWidth(true)
        }
    }
    window.addEventListener('scroll',changeWidth)
    return (
        <footer>
            <img className='footerBg' src={Brush} alt="" />
            <div className="footerContainer">
                <div className="footerFirst">
                    <h3 data-aos={width?"zoom-in":"fade-up"}>Pages</h3>
                    <ul>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Services</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Projects</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">About</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footerSecond">
                    <h3 data-aos={width?"zoom-in":"fade-up"}>Services</h3>
                    <ul>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Screen Printing</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Sublimation Printing</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Custom branded items</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Custom pos</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Custom signage</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Fashion Printing</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">Emroidery</a></li>
                    </ul>
                </div>
                <div className="footerThird">
                    <h3 data-aos={width?"zoom-in":"fade-up"}>Contact details</h3>
                    <ul>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">hello@themeshroom.co.uk</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}><a href="#">+44 7834 282061</a></li>
                        <li data-aos={width?"zoom-in":"fade-up"}>
                            <a href="#">5st Mary’s Row Moseley <br />
                                Birmingham B13 8HW</a>
                        </li>
                        <li className="footerIcons">
                            <span data-aos={width?"zoom-in":"fade-up"}><a href="#">FB</a></span>
                            <span data-aos={width?"zoom-in":"fade-up"}><a href="#">IG</a></span>
                            <span data-aos={width?"zoom-in":"fade-up"}><a href="#">TW</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
