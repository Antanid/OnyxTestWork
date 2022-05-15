import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  return (
    <button onClick={props.Click} className={props.className}>{props.children}</button>
  )
}



export default Buttons;


Buttons.propTypes = {
  children: PropTypes.string.isRequired,
}