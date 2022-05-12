import React from 'react';

function FormComponent({ deleteLastArray, addTask, handleChangeMonth, valueMonth, handleChangeDate, valueDate, handleChangeYear, valueYear, handleChange, value, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input className='table_input' value={value} type='text' onChange={handleChange} placeholder='Введите значение' />

            <input value={valueYear} onChange={handleChangeYear} className='table_input_date' type="number" placeholder='Год..' />
            <input value={valueDate} onChange={handleChangeDate} className='table_input_date' type="number" placeholder='День..' />
            <input value={valueMonth} onChange={handleChangeMonth} className='table_input_date' type="number" placeholder='Месяц..' />

            <button onClick={() => addTask()}>Отправить</button>
            <button onClick={() => deleteLastArray()}>Удалить последний элемент массива</button>
        </form>

    )
}

export default FormComponent