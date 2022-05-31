import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss'

function Timer({ remainingTime }) {
    return (
        <div className="timer">
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span> hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>secends</span>
        </div>
    )
}

export default Timer;


Timer.propTypes = {
    remainingTime: PropTypes.objectOf(PropTypes.string)
}