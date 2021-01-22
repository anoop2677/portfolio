import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ data }) => (
  <div className="summary">
    <div className="link-to" id="summary" />
    <div className="title">
      <h3>Professional Summary</h3>
    </div>
    {data.map((title) => (
      <p style={{ fontSize: '14px' }}>{title.content}</p>
    ))}
  </div>
);

Summary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
};

Summary.defaultProps = {
  data: [],
};

export default Summary;
