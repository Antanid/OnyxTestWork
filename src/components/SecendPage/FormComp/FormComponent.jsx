import React from 'react';
import ButtonForm from './ButtonForm';

function FormComponent({ deleteLastArray, addTask, handleChangeMonth, valueMonth, handleChangeDate, valueDate, handleChangeYear, valueYear, handleChange, value, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input className='table_input' value={value} type='text' onChange={handleChange} placeholder='Введите значение' />

            <input value={valueYear} onChange={handleChangeYear} className='table_input_date' type="number" placeholder='Год..' />
            <input value={valueDate} onChange={handleChangeDate} className='table_input_date' type="number" placeholder='День..' />
            <input value={valueMonth} onChange={handleChangeMonth} className='table_input_date' type="number" placeholder='Месяц..' />

            <ButtonForm addTask={addTask} deleteLastArray={deleteLastArray} />
        </form>

    )
}

export default FormComponent