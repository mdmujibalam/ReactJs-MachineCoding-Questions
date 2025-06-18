import React, { useState } from "react";
import "./Accordion.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ items }) => {
  //const [activeIndex, setActiveIndex] = useState(null);
  const [openIndexes,setOpenIndexes] = useState(new Array(items.length).fill(false));

  // const handleClick = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  const handleIndexes=(index)=>{
    setOpenIndexes((prev)=>{
      const newOpenIndexs=[...prev];
      newOpenIndexs[index]= !newOpenIndexs[index];
      return newOpenIndexs;
    })
  }

  return (
    <div>
      {items.map((item, index) => (
        <div className="accordion-container" key={index}>
          <div className="accordion-header" onClick={() => handleIndexes(index)}>
            <div className="accordion-title">{item.title}</div>

            <div className="accordion-icon">
              {openIndexes[index] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {openIndexes[index] && (
            <div className="accordion-body">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
