import React from 'react';
import { Fragment } from 'react';
import cansel from '../../../assets/img/cancel.png';
import PropTypes from 'prop-types';

function EditComp({ id, idItem, Edit, editingText, submitEdits, setIdItem, handleEditing, item }) {
    return (
        <>
            {
                id === idItem ?

                    <Fragment>
                        <td
                        ><input
                                className={id === idItem ? 'table_data_active' : null}
                                onChange={Edit}
                                value={editingText}
                                type="text" /></td>
                        <td> <button
                            onClick={() => submitEdits(item)}
                        >Edit</button></td>
                        <td> <img onClick={() => setIdItem(null)} src={cansel} alt="cancel" /></td>

                    </Fragment>

                    : <th onDoubleClick={() => handleEditing(id)}>{item.text}</th>
            }
        </>
    )
}

export default EditComp;

EditComp.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        data: PropTypes.shape({
            year: PropTypes.string,
            month: PropTypes.string,
            day: PropTypes.string,
        })
    })
}

EditComp.propTypes = {
    handleEditing: PropTypes.func.isRequired,
    setIdItem: PropTypes.func.isRequired,
    submitEdits: PropTypes.func.isRequired,
    editingText: PropTypes.string.isRequired,
    Edit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}