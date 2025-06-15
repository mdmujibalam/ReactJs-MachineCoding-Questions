import React from "react";
import "./Tabs.css";

const Interest = ({ data, setData, errors }) => {
  const handleCheck = (e, item) => {
    // const newInterests = data.interests.filter((interest) => interest !== item);

    // if (e.target.checked) newInterests.push(item);

    // setData((prev) => ({
    //   ...prev,
    //   interests: newInterests,
    // })); 

  setData((prev)=>{
    if(e.target.checked){
      //Add only if item if not present to avoid duplicancy
     return  !prev.interests.includes(item)? {...prev,interests:[...prev.interests,item]} : prev
    }
    else{
      //Remove item if unchecked
      return {
        ...prev,
        interests: prev.interests.filter((interest)=> interest!=item)
      }
    }
  })
  };

  return (
    <>
      <input
        type="checkbox"
        id="playing"
        name="playing"
        onChange={(e) => handleCheck(e, "playing")}
        checked={data.interests.includes("playing")}
      />
      <label htmlFor="playing">Playing</label>

      <input
        type="checkbox"
        id="music"
        name="music"
        onChange={(e) => handleCheck(e, "music")}
        checked={data.interests.includes("music")}
      />
      <label htmlFor="music">Music</label>

      <input
        type="checkbox"
        id="coding"
        name="coding"
        onChange={(e) => handleCheck(e, "coding")}
        checked={data.interests.includes("coding")}
      />
      <label htmlFor="coding">Coding</label>

      {errors.interests && <span className="error">{errors.interests}</span>}
    </>
  );
};

export default Interest;
