import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Button/Buttons';

function ButtonsOur({
  OpenPopUp,
  firstButton,
  secendButton
}) {
  return (
    <div className="base__routes__button">
      <Buttons
        className="base__button__moreInf open-popup-exc"
        Click={OpenPopUp}
      >
        {firstButton}
      </Buttons>
      <Buttons
        className="base__button__moreInf open-popu p-exc"
        Click={OpenPopUp}
      >
        {secendButton}
      </Buttons>
    </div>
  );
}

export default ButtonsOur;

ButtonsOur.propTypes = {
  firstButton: PropTypes.string.isRequired,
  secendButton: PropTypes.string.isRequired,
  OpenPopUp: PropTypes.func.isRequired,
};
