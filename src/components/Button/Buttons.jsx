import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ Click, className, children }) {
  return (
    <button type="button" onClick={Click} className={className}>{children}</button>
  );
}

export default Buttons;

Buttons.defaultProps = {
  Click: null,
};

Buttons.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  Click: PropTypes.func,
};
