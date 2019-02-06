import React from 'react';
import PropTypes from 'prop-types';

const BlankPages = ({ number }) => (
  <div>
    {[...Array(number)].map(() => (
      <div className="blank-page" />
    ))}
  </div>
);

BlankPages.propTypes = {
  number: PropTypes.number,
};

BlankPages.defaultProps = {
  number: 1,
};

export default BlankPages;
