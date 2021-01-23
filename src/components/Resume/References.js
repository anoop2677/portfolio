import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h3>Interested, want to know more.
        <Link to="/contact">
          <b>Contact Me.</b>
        </Link>
      </h3>
    </div>
  </div>
);

export default References;
