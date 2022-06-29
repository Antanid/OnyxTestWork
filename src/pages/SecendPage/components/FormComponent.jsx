/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonForm from './ButtonForm';

function FormComponent({
  deleteLastArray,
  addTask,
  handleChangeMonth,
  handleChangeDate,
  handleChangeYear,
  handleChange,
  handleSubmit,
  handleKeyPress
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={handleChange.value}
        onChange={handleChange.onChange}
        className="table_input"
        type="text"
        placeholder="Введите значение"
      />

      <input
        value={handleChangeYear.value}
        onChange={handleChangeYear.onChange}
        className="table_input_date"
        type="number"
        placeholder="Год.."
      />
      <input
        value={handleChangeDate.value}
        onChange={handleChangeDate.onChange}
        className="table_input_date"
        type="number"
        placeholder="День.."
      />
      <input
        value={handleChangeMonth.value}
        onChange={handleChangeMonth.onChange}
        onKeyDown={handleKeyPress}
        className="table_input_date"
        type="number"
        placeholder="Месяц.."
      />

      <ButtonForm
        addTask={addTask}
        deleteLastArray={deleteLastArray}
      />
    </form>

  );
}

export default FormComponent;

FormComponent.propTypes = {
  handleChangeMonth: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  handleChangeDate: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  handleChangeYear: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  handleChange: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  deleteLastArray: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};
