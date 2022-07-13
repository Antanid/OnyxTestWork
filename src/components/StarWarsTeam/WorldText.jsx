/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function WorldText({ planet, worldStar }) {
  return (
    <>
      {
        worldStar.map((item) => {
          return (
            <div>
              <p>
                Home world:
                {item.text}
              </p>
            </div>
          );
        })
      }
    </>
    /*  <p>
       Home world:
       {planet}
     </p> */
  );
}

export default WorldText;

WorldText.defaultProps = {
  planet: 'Unknown',
  worldStar: 'Unknown',
};

WorldText.propTypes = {
  planet: PropTypes.string,
  worldStar: PropTypes.string,
};
