import React from 'react';
import PropTypes from 'prop-types';

function FirstLine({ Line }) {
  return (
    <div className="col-lg-1">
      <img className="base__line" src={Line} alt="line" />
    </div>
  );
}

export default FirstLine;

FirstLine.propTypes = {
  Line: PropTypes.string.isRequired,
};
