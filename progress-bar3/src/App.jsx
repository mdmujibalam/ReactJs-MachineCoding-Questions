import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const arr = [
    {
      startProgress: "0",
      maxProgress: "5",
    },
    {
      startProgress: "0",
      maxProgress: "10",
    },
    {
      startProgress: "0",
      maxProgress: "20",
    },
    {
      startProgress: "0",
      maxProgress: "40",
    },
    {
      startProgress: "0",
      maxProgress: "60",
    },
    {
      startProgress: "0",
      maxProgress: "80",
    },
    {
      startProgress: "0",
      maxProgress: "100",
    },
  ];

  return (
    <>
      <div className="main-container">
        {arr.map(({ startProgress, maxProgress }, index) => (
          <ProgressBar
            key={index}
            startProgress={startProgress}
            maxProgress={maxProgress}
          />
        ))}
      </div>
    </>
  );
}

export default App;
