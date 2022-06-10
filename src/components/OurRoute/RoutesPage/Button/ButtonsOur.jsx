import React from 'react';
import Buttons from "../../../Button/Buttons";
import PropTypes from 'prop-types';


const ButtonsOur = ({ setActive }) => {
  return (
    <div className="base__routes__button">
      <Buttons className={"base__button__moreInf open-popup-exc"} Click={() => setActive(true)} >Докладніше</Buttons>
      <Buttons className={"base__button__moreInf open-popup-exc"} Click={() => setActive(true)} >Забронювати</Buttons>
    </div>
  )
}

export default ButtonsOur;

ButtonsOur.propTypes = {
  setActive: PropTypes.func.isRequired
}
