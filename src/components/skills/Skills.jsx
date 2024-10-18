import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">Far far away, behind the word mountains</span>

      <div className="skills__container container grid">
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Photoshop</h3>
            <span className="skills__number">90%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__photoshop"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">HTML5</h3>
            <span className="skills__number">95%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__html5"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">WordPress</h3>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__wordpress"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">jQuery</h3>
            <span className="skills__number">85%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__jquery"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">CSS3</h3>
            <span className="skills__number">90%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__css3"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">SEO</h3>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__seo"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

