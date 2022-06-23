import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import EditComp from './EditComp';
import RemoveItem from './RemoveItem';
import DataItem from './DataItem';

function TableComponent({ table, removeItem, setTable }) {
  const [editingText, setEditingText] = useState('');
  const [idItem, setIdItem] = useState(null);
  const [style] = useState('null');
  const [currentItem, setCurrentItem] = useState(null);
  const [currentEnd, setCurrentEnd] = useState(null);

  useEffect(() => {
    const SortItems = (a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      return -1;
    };
    setTable((prevTable) => ([...prevTable].sort(SortItems)));
  }, [currentEnd, setTable]);

  const handleEditing = useCallback((id) => {
    setIdItem(id);
  }, []);

  const Edit = (e) => {
    setEditingText(e.currentTarget.value);
  };

  const submitEdits = (item) => {
    axios.patch(`http://localhost:3004/item/${item.id}`, { text: editingText })
      .catch((error) => {
        console.log(error);
      });
    setIdItem(null);
    setEditingText('');
  };

  function dragStartHandler(e, item) {
    setCurrentItem(item);
  }

  function dragEndHandler(e, item) {
    setCurrentEnd(item);
  }

  function dragOVerHandler(e) {
    e.preventDefault();
  }

  function dragHandler(e, item) {
    e.preventDefault();
    setTable(table.map((c) => {
      if (c.id === item.id) {
        return { ...c, order: currentItem.order };
      }
      if (c.id === currentItem.id) {
        return { ...c, order: item.order };
      }
      return c;
    }));
  }

  return (
    <thead>
      {
        table.map((item, id) => (
          <tr
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e, item)}
            onDragOver={(e) => dragOVerHandler(e)}
            onDrop={(e) => dragHandler(e, item)}
            draggable
            key={item.id}
          >
            <DataItem
              setIdItem={setIdItem}
              idItem={idItem}
              table={table}
              style={style}
              handleEditing={handleEditing}
              item={item}
              id={id}
            />
            <EditComp
              item={item}
              handleEditing={handleEditing}
              setIdItem={setIdItem}
              submitEdits={submitEdits}
              editingText={editingText}
              Edit={Edit}
              id={id}
              idItem={idItem}
            />

            <RemoveItem
              items={item}
              removeItem={removeItem}
            />
          </tr>
        ))
      }
    </thead>
  );
}

export default TableComponent;

TableComponent.propTypes = {
  setTable: PropTypes.func.isRequired,
  table: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    order: PropTypes.number,
    id: PropTypes.number,
    data: PropTypes.shape({
      year: PropTypes.number,
      day: PropTypes.number,
      month: PropTypes.number,
    })
  })).isRequired,
  removeItem: PropTypes.func.isRequired,
};
