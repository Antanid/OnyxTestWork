import React from 'react';
import PropTypes from 'prop-types';
import './sass/Style.scss';

function AdditionalComp({ service }) {
  return (
    <section className="section__additional">
      <div className="container-fluid">
        <div className="row">
          {
            service.map((item) => (
              <div key={item.text} className="col-lg-3 col-sm-6">
                <div className="additional__services">
                  <div className="additional__img">
                    <img src={item.img} alt="evacuation" />
                  </div>
                  <div className="additional__text">
                    <h4>{item.text}</h4>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

AdditionalComp.defaultProps = {
  service: PropTypes.node.isRequired,
};

AdditionalComp.propTypes = {
  service: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  }))
};

export default AdditionalComp;
