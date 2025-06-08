import React from "react";
import "./Tabs.css";

const Setting = ({ data, setData, errors }) => {
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.value }));
  };

  return (
    <>
      <input
        type="radio"
        name="theme"
        id="dark"
        value="dark"
        onChange={handleChange}
        checked={data.theme === "dark"}
      />
      <label htmlFor="dark">Dark</label>

      <input
        type="radio"
        name="theme"
        id="light"
        value="light"
        onChange={handleChange}
        checked={data.theme === "light"}
      />
      <label htmlFor="light">Light</label>
    </>
  );
};

export default Setting;
