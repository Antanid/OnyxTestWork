import React from 'react';
import PropTypes from 'prop-types';

function ThirdLine({Line}) {
  return (
    <div className="col-lg-1">
    <img className="base__line base__line2" src={Line} alt="line" />
</div>
  )
}

export default ThirdLine;

ThirdLine.propTypes = {
  Line: PropTypes.string.isRequired,
}