import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function ButtonForm({ deleteLastArray, addTask }) {
    return (
        <Fragment>
            <button onClick={() => addTask()}>Отправить</button>
            <button onClick={() => deleteLastArray()}>Удалить последний элемент массива</button>
        </Fragment>
    )
}

export default ButtonForm;

ButtonForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    deleteLastArray: PropTypes.func.isRequired,
}