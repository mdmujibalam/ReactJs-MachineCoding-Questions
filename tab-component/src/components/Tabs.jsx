import React, { useState } from "react";
import "./Tabs.css";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

const Tabs = () => {
  const [current, setCurrent] = useState(0);
  const [errors, setErrors] = useState({});

  const tabs = [
    {
      title: "Profile",
      content: "This is the content of Tab 1",
      component: Profile,
      validate: () => {
        let err = {};

        if (data.name.trim() === "" || data.name.length <= 2)
          err.name = "Plz enter a valid name";
        else if (!data.email.trim().includes("@"))
          err.email = "Plz enter a valid email";
        else if (isNaN(data.age) || data.age < 18)
          err.age = "plz enter a value greater than or equal to 18";

        setErrors(err);

        return err.name || err.email || err.age ? false : true;
      },
    },
    {
      title: "Interest",
      content: "This is the content of Tab 2",
      component: Interest,
      validate: () => {
        let err = {};

        if (data.interests.length === 0) {
          err.interests = "Plz select atleast one interest from above";
        }

        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      title: "Setting",
      content: "This is the content of Tab 3",
      component: Setting,
      validate:()=>{
        return true;
      }
    },
  ];

  const handleClick = (index) => {
    tabs[current].validate() && setCurrent(index);
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    interests: [],
    theme: "",
  });

  const ActiveTab = tabs[current].component;

  const handlePrev = () => {
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    if (tabs[current].validate()) setCurrent((prev) => prev + 1);
  };

  const handleSubmit = () => {
    console.log("API call to submit data ", data);
  };

  return (
    <>
      <div className="title-container">
        {tabs.length === 0 && <span>No Tabs available...</span>}

        {tabs.length > 0 &&
          tabs.map((tab, index) => {
            return (
              <span
                key={index}
                className={current === index ? "title active" : "title"}
                onClick={() => handleClick(index)}
              >
                {tab.title}
              </span>
            );
          })}
      </div>

      <div className="content-container">
        <ActiveTab data={data} setData={setData} errors={errors} />
      </div>

      <div className="btn-container">
        {current > 0 && (
          <button className="btn" onClick={handlePrev}>
            Prev
          </button>
        )}
        {current < tabs.length - 1 && (
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        )}
        {current === tabs.length - 1 && (
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default Tabs;
