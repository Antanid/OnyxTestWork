import React, { Fragment } from 'react'

function ButtonForm({ deleteLastArray, addTask }) {
    return (
        <Fragment>
            <button onClick={() => addTask()}>Отправить</button>
            <button onClick={() => deleteLastArray()}>Удалить последний элемент массива</button>
        </Fragment>
    )
}

export default ButtonForm;