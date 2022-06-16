import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function ButtonForm({ deleteLastArray, addTask }) {
  return (
    <>
      <button type="button" onClick={() => addTask()}>Отправить</button>
      <button type="button" onClick={() => deleteLastArray()}>Удалить последний элемент массива</button>
    </>
  );
}

export default ButtonForm;

ButtonForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  deleteLastArray: PropTypes.func.isRequired,
};
