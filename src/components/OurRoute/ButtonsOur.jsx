import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Button/Buttons';

function ButtonsOur({ OpenPopUp }) {
  return (
    <div className="base__routes__button">
      <Buttons className="base__button__moreInf open-popup-exc" Click={OpenPopUp}>Докладніше</Buttons>
      <Buttons className="base__button__moreInf open-popu p-exc" Click={OpenPopUp}>Забронювати</Buttons>
    </div>
  );
}

export default ButtonsOur;

ButtonsOur.propTypes = {
  OpenPopUp: PropTypes.func.isRequired,
};
