import React from 'react';
import PropTypes from 'prop-types';

function WorldText({ planet }) {
    return (
        <p>Home world: {planet}</p>
    )
}

export default WorldText;

WorldText.propTypes = {
    planet: PropTypes.string
}

