import React,{useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Joinour.css'

import TopImage from '../../assets/img/geraldine-lewa-3fWE0Dp_aj8-unsplash.webp'
import BottomImg from '../../assets/img/lennert-naessens-EgB66PkGZbQ-unsplash.webp'

import JoinOurLeft from './JoinOurLeft'
import JoinOurRight from './JoinOurRight'

function Joinour() {
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
        <section className='joinOur'>
            
            <div data-aos={width?"zoom-in":"fade-right"} className='joinOurTop'>
                <img className=""
                    alt="uk-print-workshop"
                    src={TopImage} />
            </div>

            <div className="joinOurContainer">
                <JoinOurLeft />
                <JoinOurRight />
            </div>

            <div data-aos={width?"zoom-in":"fade-right"} className="joinLeftEnd">
                <img className=""
                    alt="uk-print-workshop"
                    src={BottomImg} />
            </div>
        </section>
    )
}

export default Joinour
