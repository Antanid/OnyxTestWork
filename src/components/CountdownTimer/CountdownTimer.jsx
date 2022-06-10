import React from "react";
import Timer from "./Timer";
import { getRemainingTimes } from "./Utils/CountDownTimerUtils";
import './Style.scss'

class CountdownTimer extends React.Component {
    constructor() {
        super();

        this.state = ({
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00 ',
        })
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.updateRemainingTime(this.props.countdownTimestampMs);
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }


    updateRemainingTime(countdown) {
        this.setState(getRemainingTimes(countdown))
    }

    render() {
        return (
            <div className="CountdownTimer">
                <Timer 
                days={this.state.days}
                minutes={this.state.minutes}
                hours={this.state.hours}
                seconds={this.state.seconds}/>
            </div>
        )
    }
}

export default CountdownTimer;