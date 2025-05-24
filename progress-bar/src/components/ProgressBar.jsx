import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const handleDecrement = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  function getColor() {
    if (progress >= 80) return "green";
    else if (progress >= 40 && progress < 80) return "orange";
    else return "red";
  }

  return (
    <>
      <div className="title">Progress Bar</div>

      <div className="outer-container">
        <div
          className="inner-container"
          style={{ width: `${progress}%`, backgroundColor: getColor() }}
        >
          <span className="currProgress">{progress}%</span>
        </div>
      </div>

      <div className="progress-btn">
        <button className="increment-btn" onClick={handleIncrement}>
          +10%
        </button>
        <button className="decrement-btn" onClick={handleDecrement}>
          -10%
        </button>
      </div>
    </>
  );
};

export default ProgressBar;
