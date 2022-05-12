import React, { Fragment, useState } from 'react';
import close from '../../assets/img/free-icon-recycling-bin-73806.png';
import cansel from '../../assets/img/cancel.png';


function TableComponent({ table, removeItem, setTable }) {


    const [editingText, setEditingText] = useState("");
    const [idItem, setIdItem] = useState(null);

    const handleEditing = (id) => {
        setIdItem(id);
    }

    const Edit = (e) => {
        setEditingText(e.currentTarget.value);
    }

    function submitEdits(id) {
        const updatedTodos = [...table].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText;
            }
            return todo;
        });
        setTable(updatedTodos);
        setIdItem(null);
        setEditingText('')
    }

    return (
        <thead>
            {
                table.map((item, id) => {
                    return (
                        <tr key={item.id}>

                            <th>{`${item.data.year}.${item.data.day}.${item.data.month}`}</th>
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


                            <th><img onClick={() => removeItem(item.id)} src={close} alt="close" /></th>

                        </tr>
                    )
                })
            }
        </thead>
    )
}

export default TableComponent