import React from 'react'
import motionIcon from '../../../images/motionIcon.png'
const MotionGraphics = () => {
    return (
        <div className="col-md-4 ">
            <div className="box ">
                <div className="img-box">
                    <img src={motionIcon} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        Motion Graphics for Web
                    </h5>
                    <p>
                        fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The
                        point of using
                    </p>
                    <a >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MotionGraphics