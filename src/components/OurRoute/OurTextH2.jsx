import React from 'react';
import PropTypes from 'prop-types';


function OurTextH2(props) {
  return (
    <div className="col-lg-12">
    <div className="our_routes">
        <h2 id="our_routes_h2" className="our_routes_h2">{props.children}
        </h2>
    </div>
</div>
  )
}

export default OurTextH2;

OurTextH2.propTypes = {
  children: PropTypes.string.isRequired,
}