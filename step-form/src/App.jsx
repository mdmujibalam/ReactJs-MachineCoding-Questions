import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StepForm from "./components/StepForm";
import PersonalInfo from "./components/PersonalInfo";
import AccountInfo from "./components/AccountInfo";
import PaymentInfo from "./components/PaymentInfo";
import Summary from "./components/Summary";
import Confirmation from "./components/Confirmation";

function App() {
  const stepData = [
    {
      label: "Personal Info",
      content: <PersonalInfo/>,
    },
    {
      label: "Account Info",
      content: <AccountInfo/>,
    },
    {
      label: "Payment Info",
      content: <PaymentInfo/>,
    },
    {
      label: "Summary",
      content: <Summary/>,
    },
    {
      label: "Confirmation",
      content: <Confirmation/>,
    },
  ];

  return (
    <>
      <StepForm steps={stepData} />
    </>
  );
}

export default App;
