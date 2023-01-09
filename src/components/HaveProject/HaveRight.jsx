import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import museum from '../../assets/img/birmingham-museums-trust-e0wBK0xJXYQ-unsplash.webp'
import emarts from '../../assets/img/emarts-emarts-ZCTh4f4mv18-unsplash.webp'

function HaveRight() {
    return (
        <div className='haveRight'>
            <div data-aos="zoom-in" className="haveRightTop">
                <img className=""
                    alt="printshops-uk"
                    src={museum} />
            </div>
            <div data-aos="zoom-in" className="haveRightBottom">
                <img className=""
                    alt="meshroom printshop"
                    src={emarts} />
            </div>
            {/* data-aos-offset="2250" */}
        </div>
    )
}

export default HaveRight
