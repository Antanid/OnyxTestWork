import React from 'react';
import PropTypes from 'prop-types';

function GiftTimerText({texth2, textH3}) {
    return (
        <div className="timer-text">
            <h2>{texth2}</h2>
            <h3>{textH3}</h3>
        </div>
    )
}

export default GiftTimerText;

GiftTimerText.propTypes = {
    texth2: PropTypes.string.isRequired,
    textH3: PropTypes.string.isRequired
}
