/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function WorldText({ worldStar }) {
  return (
    <p>
      Home world:
      {worldStar.name}
    </p>
  );
}

export default WorldText;

WorldText.defaultProps = {
  worldStar: 'Unknown',
};

WorldText.propTypes = {
  worldStar: PropTypes.shape({
    name: PropTypes.string,
  }),
};
