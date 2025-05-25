import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import { MIN, INTERVAL } from "../constant";

const ProgressBar = ({ startProgress = 0, maxProgress = 100 }) => {
  const [progress, setProgress] = useState(startProgress);
  const MAX_PROGRESS = maxProgress;
  const MAX = 100;

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= MAX_PROGRESS) {
          clearInterval(timerInterval);
          return prev;
        }

        return Math.min(prev + 1, MAX_PROGRESS);
      });
    }, INTERVAL);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <>
      <div className="outer-container">
        <span
          className="progressSpan"
          style={{ color: progress >= 50 ? "white" : "black" }}
        >
          {progress}%
        </span>
        <div
          className="inner-container"
          style={{
            transform: `scaleX(${progress / MAX})`,
            transformOrigin: "left",
          }}
          role="progressbar"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={progress}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
