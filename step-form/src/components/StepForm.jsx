import React, { useState } from "react";
import "./StepForm.css";

const StepForm = ({ steps }) => {
  const [currStep, setCurrStep] = useState(0);

  const handleNext = () => {
    if (currStep < steps.length - 1) setCurrStep((prev) => prev + 1);
  };

  const handlePrevoius = () => {
    if (currStep !== 0) setCurrStep((prev) => prev - 1);
  };

  return (
    <div className="main-page-content">
      <div className="stepper">
        {steps.map(({ label, content }, index) => {
          return (
            <div>
              <div className="stepper-container">
                <div
                  className={`step-number ${index <= currStep ? "active" : ""}`}
                >
                  {index + 1}

                  {index < steps.length - 1 && (
                    <div
                      className={`step-line ${
                        index < currStep ? "active" : ""
                      }`}
                    ></div>
                  )}
                </div>

                <div className="step-label">{label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="main-content">
        <div className="step-content">{steps[currStep].content}</div>
        <div className="btn-container">
          <button className="prev-btn" onClick={handlePrevoius}>
            Prev
          </button>
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
