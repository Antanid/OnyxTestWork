import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss'

function Timer({ days, minutes, hours, seconds}) {
    return (
        <div className="timer">
            <span>{days}</span>
            <span>days</span>
            <span>{hours}</span>
            <span> hours</span>
            <span>{minutes}</span>
            <span>minutes</span>
            <span>{seconds}</span>
            <span>secends</span>
        </div>
    )
}

export default Timer;


Timer.propTypes = {
    days: PropTypes.string.isRequired,
    minutes: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    seconds: PropTypes.string.isRequired,
}