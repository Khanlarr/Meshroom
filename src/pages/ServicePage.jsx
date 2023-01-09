import React from 'react'
import '../assets/ServicePage.css'
import Header from '../components/Header/Header'

function ServicePage() {
    return (
        <>
            <Header />
            <section className='main servicePage'>
                <div className="mainCenterArea servicePageCenter">
                    <h1>
                        <div className="title">
                            <span className="text write" data-splitting="lines">
                                Services
                            </span>
                            <span aria-hidden="true" className="text laser" data-splitting="lines">
                                Services
                            </span>
                        </div>
                    </h1>
                </div>
                <div className="mainCenterAreaDesc servicePageCenterDesc">
                    <p>Our mission is to embrace the skills of our talented workforce to provide a high level of service designed to fulfil the requirements of our customers to our exacting standards, to their complete satisfaction,within timescales and budget levels.
                        Our mission is to embrace the skills of our talented workforce to provide a high level of service designed to fulfil the requirements of our customers to our exacting standards, to their complete satisfaction,within timescales and budget levels.
                    </p>
                </div>
            </section>
        </>
    )
}

export default ServicePage
