import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../../../Button/Buttons';
import HOC from '../../../hoc/HocPopUp';

function ButtonsOur({ open /*  setActive, */ }) {
  return (
    <div className="base__routes__button">
      <Buttons className="base__button__moreInf open-popup-exc" Click={() => open()}>Докладніше</Buttons>
      <Buttons className="base__button__moreInf open-popu p-exc" Click={() => open()}>Забронювати</Buttons>
    </div>
  );
}

export default HOC(ButtonsOur);

ButtonsOur.propTypes = {
  /*  setActive: PropTypes.func.isRequired, */
  open: PropTypes.func.isRequired,
};
