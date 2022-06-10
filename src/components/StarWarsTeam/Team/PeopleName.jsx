import React from 'react'
import PropTypes from 'prop-types';

function PeopleName({ items }) {
    return (
        <>
            <h5>{items.name}</h5>
            <p>Birth Day: {items.birth_year}</p>
            <p>Gender: {items.gender}</p>
        </>
    )
}

export default PeopleName;

PeopleName.propTypes = {
items: PropTypes.object.isRequired,

}