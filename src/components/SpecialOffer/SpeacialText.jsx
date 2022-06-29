import React from 'react';
import PropTypes from 'prop-types';

function SpeacialText({ children }) {
  return (
    <div className="col-lg-12">
      <div id="special__offer__h2" className="special__offer__h2">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default SpeacialText;

SpeacialText.propTypes = {
  children: PropTypes.string.isRequired,
};
