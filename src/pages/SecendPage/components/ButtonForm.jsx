import React from 'react';
import PropTypes from 'prop-types';

function ButtonForm({ addTask }) {
  return (
    <button type="button" onClick={() => addTask()}>Отправить</button>
  );
}

export default ButtonForm;

ButtonForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
