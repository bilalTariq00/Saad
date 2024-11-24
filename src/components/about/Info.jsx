import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box ">
            {/* <i className="bx bx-award about__icon"></i> */}
            <h3 className="about__title">5+ Years</h3>
            <span className="about__subtitle">Experience</span>
        </div>

        <div className="about__box">
            {/* <i className="bx bx-briefcase-alt about__icon"></i> */}
            <h3 className="about__title">50+ Projects</h3>
            <span className="about__subtitle"> Completed </span>
        </div>

        <div className="about__box">
            {/* <i className="bx bx-support about__icon"></i> */}
            <h3 className="about__title">20+ Serving</h3>
            <span className="about__subtitle"> Happy Customers</span>
        </div>

        <div className="about__box">
            {/* <i className="bx bx-support about__icon"></i> */}
            <h3 className="about__title">24/7 online</h3>
            <span className="about__subtitle">Support</span>
        </div>
    </div>
  )
}

export default Info
