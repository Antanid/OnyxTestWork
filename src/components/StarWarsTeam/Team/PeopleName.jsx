import React from 'react'

function PeopleName({ items }) {
    return (
        <>
            <h5>{items.name}</h5>
            <p>Birth Day: {items.birth_year}</p>
            <p>Gender: {items.gender}</p>
        </>
    )
}

export default PeopleName