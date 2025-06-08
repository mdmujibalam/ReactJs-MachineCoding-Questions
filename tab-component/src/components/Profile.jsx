import React,{useState} from "react";
import "./Tabs.css";

const Profile = ({ data, setData, errors }) => {

  const handleChange = (e, item) => {
    setData((prev) => ({ ...prev, [item]: e.target.value }));
  };

  return (
    <>
      <div className="name">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e, "name")}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={(e) => handleChange(e, "email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          id="age"
          name="age"
          value={data.age}
          onChange={(e) => handleChange(e, "age")}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
    </>
  );
};

export default Profile;
