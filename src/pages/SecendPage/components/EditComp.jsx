import React from 'react';

import PropTypes from 'prop-types';
import cansel from '../../../assets/img/cancel.png';

function EditComp({
  id, idItem, Edit, editingText, submitEdits, setIdItem, handleEditing, item
}) {
  return (
    <div>
      {
        id === idItem

          ? (
            <>
              <td>
                <input
                  className={id === idItem ? 'table_data_active' : null}
                  onChange={Edit}
                  value={editingText}
                  type="text"
                />
              </td>
              <td>
                {' '}
                <button
                  type="button"
                  onClick={() => submitEdits(item)}
                >
                  Edit
                </button>
              </td>
              <td>
                {' '}
                <button
                  type="button"
                  onKeyDown={() => setIdItem(null)}
                  onClick={() => setIdItem(null)}
                >
                  <img
                    src={cansel}
                    alt="cancel"
                  />
                </button>
              </td>

            </>
          )

          : <th onDoubleClick={() => handleEditing(id)}>{item.text}</th>
      }
    </div>
  );
}

export default EditComp;

EditComp.defaultProps = {
  item: PropTypes.shape({
    id: 12,
    text: 'Text',
    data: PropTypes.shape({
      year: 2022,
      month: 10,
      day: 25,
    })
  }),
  idItem: null,
};

EditComp.propTypes = {
  idItem: PropTypes.number,
  handleEditing: PropTypes.func.isRequired,
  setIdItem: PropTypes.func.isRequired,
  submitEdits: PropTypes.func.isRequired,
  editingText: PropTypes.string.isRequired,
  Edit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    data: PropTypes.shape({
      year: PropTypes.number,
      month: PropTypes.number,
      day: PropTypes.number,
    })
  })
};
