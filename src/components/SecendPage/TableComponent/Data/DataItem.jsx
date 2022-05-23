import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DataItem({ id, item, handleEditing, classBull, styleActive }) {
    return (
        <th
            onClick={styleActive}
            className={classBull(id)}
            onDoubleClick={() => handleEditing(id)}
        >
            {`${item.data.year}.${item.data.day}.${item.data.month}`}
        </th>
    )
}

export default DataItem;



DataItem.propTypes = {
    handleEditing: PropTypes.func.isRequired,
    id: PropTypes.number,
    idItem: PropTypes.number,
}