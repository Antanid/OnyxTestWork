import React from 'react';
import PropTypes from 'prop-types';

function ServiceHead({ children }) {
  return (
    <div className="col-lg-12">
      <div id="services__h2" className="services__h2">
        <h2>
          {children}
        </h2>
      </div>
    </div>
  );
}

export default ServiceHead;

ServiceHead.propTypes = {
  children: PropTypes.string.isRequired,
};
