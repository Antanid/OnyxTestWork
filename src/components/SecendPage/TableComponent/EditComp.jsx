import React from 'react';
import { Fragment } from 'react';
import cansel from '../../../assets/img/cancel.png';


function EditComp({ id, idItem, Edit, editingText, submitEdits, setIdItem, handleEditing, item }) {
    return (
        <>
            {
                id === idItem ?

                    <Fragment>
                        <td> <input
                            onChange={Edit}
                            value={editingText}
                            type="text" /></td>
                        <td> <button
                            onClick={() => submitEdits(id)}
                        >Edit</button></td>
                        <td> <img onClick={() => setIdItem(null)} src={cansel} alt="cancel" /></td>

                    </Fragment>


                    : <th onClick={() => handleEditing(id)}>{item.text}</th>
            }
        </>
    )
}

export default EditComp