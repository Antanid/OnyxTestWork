import React from 'react';
import PropTypes from 'prop-types';


function Buttons({text, Click}) {
  return (
    <button onClick={Click} className="base__button__moreInf open-popup-exc">{text}</button>
  )
}

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Buttons