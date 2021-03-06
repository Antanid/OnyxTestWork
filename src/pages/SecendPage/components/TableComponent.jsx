import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import EditComp from './EditComp';
import RemoveItem from './RemoveItem';
import DataItem from './DataItem';
import { dragAndDropTable, editTextTable } from '../../../redux/tableRedux/action';

function TableComponent({ table, removeItem }) {
  const [editingText, setEditingText] = useState('');
  const [idItem, setIdItem] = useState(null);
  const [style] = useState('null');
  const [currentItem, setCurrentItem] = useState(null);
  const [currentEnd, setCurrentEnd] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dragAndDropTable(table));
  }, [currentEnd]);

  const handleEditing = useCallback((id) => {
    setIdItem(id);
  }, []);

  const Edit = (e) => {
    setEditingText(e.currentTarget.value);
  };

  const submitEdits = (item) => {
    dispatch(editTextTable(item, editingText));
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
    table.map((c) => {
      if (c.id === item.id) {
        return { ...c, order: currentItem.order };
      }
      if (c.id === currentItem.id) {
        return { ...c, order: item.order };
      }
      return c;
    });
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
