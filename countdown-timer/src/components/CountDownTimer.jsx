import React, { useEffect, useState } from "react";
import "./CountDownTimer.css";

const CountDownTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(null);

  const handleStart = () => {
    let total = hours * 3600 + minutes * 60 + seconds;
    setTotalSeconds(total);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTotalSeconds(null);
  };

  useEffect(() => {
    if (totalSeconds === null || totalSeconds <= 0) return;

    const timerInterval = setInterval(() => {
      setTotalSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [totalSeconds]);

  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <div>
      <div className="inputSection">
        <div className="hourSection">
          <label htmlFor="hours">Hours</label>
          <input
            type="number"
            id="hours"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            min="0"
          />
        </div>

        <div className="minuteSection">
          <label htmlFor="minutes">Minutes</label>
          <input
            type="number"
            id="minutes"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            min="0"
          />
        </div>

        <div className="secondSection">
          <label htmlFor="seconds">Seconds</label>
          <input
            type="number"
            id="seconds"
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
            min="0"
          />
        </div>

        <div className="buttonSection">
          <div>
            <button className="startBtn" onClick={handleStart}>
              Start Timer
            </button>
          </div>

          <div>
            <button className="resetBtn" onClick={handleReset}>
              Reset Timer
            </button>
          </div>
        </div>
      </div>

      {totalSeconds !== null && totalSeconds !== 0 && (
        <h3 className="timerSection">
          {formatTime(Math.floor(totalSeconds / 3600))}:
          {formatTime(Math.floor((totalSeconds % 3600) / 60))}:
          {formatTime(Math.floor(totalSeconds % 60))}
        </h3>
      )}
    </div>
  );
};

export default CountDownTimer;
