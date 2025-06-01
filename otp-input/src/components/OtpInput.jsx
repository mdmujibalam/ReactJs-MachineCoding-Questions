import React, { useState, useEffect, useRef } from "react";
import "./OtpInput.css";
import { TOTAL_DIGITS } from "./constant";

const OtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(TOTAL_DIGITS).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  useEffect(() => {
    if (inputArr.every((digit) => digit !== "")) {
      const otp = inputArr.join("");
      console.log("final otp", otp);
      console.log("Call API Here !!!");
    }
  }, [inputArr]);

  const handleInputChange = (e, index) => {
    const value = e.target.value.trim();

    if (isNaN(value) || value === "") return;

    const newInputArr = [...inputArr];
    newInputArr[index] = value.slice(-1);

    setInputArr(newInputArr);
    inputRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    //console.log("event in onKeyDown",e);

    if (e.key === "Backspace") {
      if (inputArr[index]) {
        const newInputArr = [...inputArr];
        newInputArr[index] = "";
        setInputArr(newInputArr);
      }

      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <div className="input-container">
        {inputArr.map((item, index) => {
          return (
            <input
              className="input-box"
              key={index}
              ref={(input) => (inputRef.current[index] = input)}
              type="text"
              value={inputArr[index]}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default OtpInput;
