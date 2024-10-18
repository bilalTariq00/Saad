import React from 'react';
import "./about.css";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container">
          <div className="about__data">
          <p className="about__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque iure suscipit quisquam quidem! Architecto eveniet veniam, consectetur repellat animi fugiat magni beatae tempore placeat consequatur quis sapiente vel voluptatibus.
            </p>
            <Info />

            
          </div>
        </div>
    </section>
  )
}

export default About;
