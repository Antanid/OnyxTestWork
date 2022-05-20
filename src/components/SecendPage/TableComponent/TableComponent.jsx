import React, { useState } from 'react';
import EditComp from './EditComp';
import RemoveItem from './RemoveItem';
import PropTypes from 'prop-types';
import axios from 'axios';





function TableComponent({ table, removeItem}) {

    const [editingText, setEditingText] = useState("");
    const [idItem, setIdItem] = useState(null);

    const handleEditing = (id) => {
        setIdItem(id);
    }

    const Edit = (e) => {
        setEditingText(e.currentTarget.value);
    }

    const submitEdits = (item) => {
        axios.patch(`http://localhost:3004/item/${item.id}`, { text: editingText })
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
                            <EditComp
                                item={item}
                                handleEditing={handleEditing}
                                setIdItem={setIdItem}
                                submitEdits={submitEdits}
                                editingText={editingText}
                                Edit={Edit}
                                id={id}
                                idItem={idItem} />

                            <RemoveItem
                                id={id}
                                items={item}
                                removeItem={removeItem} />
                        </tr>
                    )
                })
            }
        </thead>
    )
}

export default TableComponent;

TableComponent.propTypes = {
    setTable: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
}