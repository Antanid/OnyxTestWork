import React from 'react';
import PropTypes from 'prop-types';
import './sass/Style.scss';

function PhotoText({ children }) {
  return (
    <div className="col-lg-12">
      <div className="photo__text">
        <h2 id="photo__h2" className="photo__h2">{children}</h2>
      </div>
    </div>
  );
}

export default PhotoText;

PhotoText.propTypes = {
  children: PropTypes.string.isRequired,
};
