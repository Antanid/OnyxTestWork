import React, { useState, useEffect, useCallback } from 'react';
import EditComp from './EditComp';
import RemoveItem from './RemoveItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import DataItem from './Data/DataItem';


function TableComponent({ table, removeItem, setTable }) {

    const [editingText, setEditingText] = useState("");
    const [idItem, setIdItem] = useState(null);
    const [style] = useState('null');
    const [currentItem, setCurrentItem] = useState(null);


    useEffect(() => {
        const SortItems = (a, b) => {
            if (a.order > b.order) {
                return 1
            } else {
                return -1
            }
        }
        setTable((table) => ([...table].sort(SortItems)));
      
    }, [currentItem, setTable])

    const handleEditing = useCallback((id) => {
        setIdItem(id);
    }, [])


    const Edit = (e) => {
        setEditingText(e.currentTarget.value);
    }

    const submitEdits = (item) => {
        axios.patch(`http://localhost:3004/item/${item.id}`, { text: editingText })
        setIdItem(null);
        setEditingText('')
    }

    function dragStartHandler(e, item) {
        setCurrentItem(item)
    }

    function dragEndHandler(e) {

    }

    function dragOVerHandler(e) {
        e.preventDefault()
    }

    function dragHandler(e, item) {
        e.preventDefault()
        setTable(table.map(c => {
            if (c.id === item.id) {
                return { ...c, order: currentItem.order }
            }
            if (c.id === currentItem.id) {
                return { ...c, order: item.order }
            }
            return c;
        }))
    }

    return (
        <thead>
            {
                table.map((item, id) => {
                    return (
                        <tr
                            onDragStart={(e) => dragStartHandler(e, item)}
                            onDragLeave={(e) => dragEndHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOVerHandler(e)}
                            onDrop={(e) => dragHandler(e, item)}
                            draggable={true}
                            key={item.id}>
                            <DataItem
                                setIdItem={setIdItem}
                                idItem={idItem}
                                table={table}
                                style={style}
                                handleEditing={handleEditing}
                                item={item} id={id} />
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
    table: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired,
}