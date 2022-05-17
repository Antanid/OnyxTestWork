import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import { getRemainingTimes } from "./Utils/CountDownTimerUtils";

const CountdownTimer = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState({
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '00 ',
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [countdownTimestampMs])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimes(countdown))
    }

    return (
        <div className="CountdownTimer">
            <Timer remainingTime={remainingTime} />
        </div>
    );
}

export default CountdownTimer;