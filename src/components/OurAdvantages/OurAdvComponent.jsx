import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function OurAdvComponent({ routes }) {
  return (
    <>
      {
        routes.map((item) => (
          <div key={item.id} className="col-lg-3 col-sm-6">
            <div className="route">
              <div className="route__img">
                <img className="route__tree" src={item.img} alt="Tree" />
                <img className="route__elipse" src={item.elipse} alt="Elipse" />
              </div>
              <h3 className="route__h3">
                {item.fisrtText}
              </h3>
              <p className="route__p">
                {item.secendText}
              </p>
            </div>
          </div>
        ))
      }
    </>

  );
}

OurAdvComponent.defaultProps = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    fisrtText: 'FirstText',
    secendText: 'secendText',
  }))
};

OurAdvComponent.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    fisrtText: PropTypes.string.isRequired,
    secendText: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    elipse: PropTypes.string.isRequired,
  }))
};

export default OurAdvComponent;
