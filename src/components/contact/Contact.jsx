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
            <h1>Let’s Connect and Bring Your Idea to Life!</h1>
            <p>Have a question, a project idea, or just want to chat? I’m here to create high-quality, user-friendly apps designed to meet your needs perfectly.
            </p>
            <h3>Why Choose Me?
            </h3>
            <ul>
              <li>✔ User-Centric Design.</li>
              <li>✔ Clear Communication.</li>
              <li>✔ On-Time Project Delivery.</li>
              <li>✔ Dedicated Post-Launch Support.</li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Reach out today!</h2>
            <form>
              <div className="input-row">
                <input type="text" placeholder="Enter your Name" required />

              </div>
              <input type="email" placeholder="Enter your Email address" required />
              <textarea placeholder=" Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
