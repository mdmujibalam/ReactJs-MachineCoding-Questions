import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StepForm from "./components/StepForm";

function App() {
  const stepData = [
    {
      label: "Personal Info",
      content: "Personal Info Content",
    },
    {
      label: "Account Info",
      content: "Account Info Content",
    },
    {
      label: "Payment Info",
      content: "Personal Info Content",
    },
    {
      label: "Summary",
      content: "Summary Page",
    },
    {
      label: "Confirmation",
      content: "Confirmation Page",
    },
  ];

  return (
    <>
      <StepForm steps={stepData} />
    </>
  );
}

export default App;
