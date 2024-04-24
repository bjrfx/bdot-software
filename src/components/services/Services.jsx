import React from 'react'
import Ourservices from './ourservices/Ourservices'
import WebDevelopment from './webdevelopment/WebDevelopment'
import MotionGraphics from './motiongraphics/MotionGraphics'
import Devops from './devops/Devops'
const Services = () => {
    return (

        <section className="service_section layout_padding">
            <div className="service_container">
                <div className="container ">
                    <Ourservices />
                    <div className="row">
                        <WebDevelopment />
                        <MotionGraphics />
                        <Devops />
                    </div>
                    <div className="btn-box">
                        <a >
                            View All
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services