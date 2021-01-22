import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Anoop Kumar via email @ kumaranoop527@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <a href="mailto:kumaranoop527.com">
          <span>kumaranoop527@gmail.com</span>
        </a>
        <p>Or call me at: </p>
        <a href="tel:8860448996">
          <span>8860448996</span>
        </a>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
