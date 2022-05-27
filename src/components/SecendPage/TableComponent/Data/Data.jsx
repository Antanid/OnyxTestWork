import React from 'react'

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

export default Data