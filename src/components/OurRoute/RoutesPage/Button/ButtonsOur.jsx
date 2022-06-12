import React from 'react';
import Buttons from "../../../Button/Buttons";
import PropTypes from 'prop-types';
import {HOC} from '../../../hoc/HocPopUp';



const ButtonsOur = ({ open }) => {
  return (
    <div className="base__routes__button">
      <Buttons className={"base__button__moreInf open-popup-exc"} Click={open} >Докладніше</Buttons>
      <Buttons className={"base__button__moreInf open-popup-exc"} Click={open} >Забронювати</Buttons>
    </div>
  )
}

export const ToggleButton = HOC(ButtonsOur);


ButtonsOur.propTypes = {
  open: PropTypes.func.isRequired
}
