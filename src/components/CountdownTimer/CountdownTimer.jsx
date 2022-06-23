import PropTypes from 'prop-types';
import React from 'react';
import Timer from './Timer';
import getRemainingTimes from './CountDownTimerUtils';
import './sass/Style.scss';

class CountdownTimer extends React.Component {
  constructor() {
    super();

    this.state = ({
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00 ',
    });
  }

  componentDidMount() {
    const { countdownTimestampMs } = this.props;
    this.intervalId = setInterval(() => {
      this.updateRemainingTime(countdownTimestampMs);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateRemainingTime(countdown) {
    this.setState(getRemainingTimes(countdown));
  }

  render() {
    const {
      days, minutes, hours, seconds
    } = this.state;
    return (
      <div className="CountdownTimer">
        <Timer
          days={days}
          minutes={minutes}
          hours={hours}
          seconds={seconds}
        />
      </div>
    );
  }
}

export default CountdownTimer;

CountdownTimer.propTypes = {
  countdownTimestampMs: PropTypes.number.isRequired
};
