import React from 'react';
import PropTypes from 'prop-types';

function Data({styleArray, item, styleNone, id, handleEditing}) {
    return (
        <th
            onClick={() => handleEditing(id)}
             onDoubleClick={styleNone} 
            className={styleArray}
        >
            {`${item.data.year}.${item.data.day}.${item.data.month}`}
        </th>
    )
}

export default Data;


Data.propTypes = {  
    item: PropTypes.object.isRequired,
    styleNone: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    handleEditing: PropTypes.func.isRequired,
}


