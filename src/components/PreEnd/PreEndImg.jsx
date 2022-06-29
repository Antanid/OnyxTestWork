import React from 'react';
import PropTypes from 'prop-types';

function PreEndImg({ Footer }) {
  return (
    <div className="col-lg-2 col-sm-6">
      <div className="footer__logo">
        <img src={Footer} alt="Footer" />
      </div>
    </div>
  );
}

export default PreEndImg;

PreEndImg.propTypes = {
  Footer: PropTypes.string.isRequired,
};
