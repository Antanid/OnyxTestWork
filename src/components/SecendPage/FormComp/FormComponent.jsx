import React from 'react';
import ButtonForm from './ButtonForm';
import PropTypes from 'prop-types';


function FormComponent({ deleteLastArray, addTask, handleChangeMonth, valueMonth, handleChangeDate, valueDate, handleChangeYear, valueYear, handleChange, value, handleSubmit }) {


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='table_input' value={value} type='text' onChange={handleChange} placeholder='Введите значение' />

            <input value={valueYear} onChange={handleChangeYear} className='table_input_date' type="number" placeholder='Год..' />
            <input value={valueDate} onChange={handleChangeDate} className='table_input_date' type="number" placeholder='День..' />
            <input onKeyPress={handleKeyPress} value={valueMonth} onChange={handleChangeMonth} className='table_input_date' type="number" placeholder='Месяц..' />

            <ButtonForm addTask={addTask} deleteLastArray={deleteLastArray} />
        </form>

    )
}

export default FormComponent;

FormComponent.propTypes = {
    handleChangeMonth: PropTypes.func.isRequired,
    valueMonth: PropTypes.string.isRequired,
    handleChangeDate: PropTypes.func.isRequired,
    valueDate: PropTypes.string.isRequired,
    handleChangeYear: PropTypes.func.isRequired,
    valueYear: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}
