import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import getRemainingTimes from './CountDownTimerUtils';
import './sass/Style.scss';

function CountdownTimer({ countdownTimestampMs }) {
  const [remainingTime, setRemainingTime] = useState({
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00 ',
  });

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimes(countdown));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [countdownTimestampMs]);

  return (
    <div className="CountdownTimer">
      <Timer
        days={remainingTime.days}
        minutes={remainingTime.minutes}
        hours={remainingTime.hours}
        seconds={remainingTime.seconds}
      />
    </div>
  );
}

export default CountdownTimer;

CountdownTimer.propTypes = {
  countdownTimestampMs: PropTypes.number.isRequired
};
