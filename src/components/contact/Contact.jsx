import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-title">My Contact</h2>
        <p className="contact-description">Feel free to get in touch with us anytime.</p>

        <div className="contact-container">
          <div className="contact-header">
            <h1>100% Satisfaction Guaranteed</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias optio minima, 
              tempore architecto sint ipsam dolore tempora facere laboriosam corrupti!</p>
            <h3>What will be the next step?</h3>
            <ul>
              <li>✔ We'll prepare the proposal.</li>
              <li>✔ We'll discuss it together.</li>
              <li>✔ Let's start the discussion.</li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Start Your Project</h2>
            <form>
              <div className="input-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
