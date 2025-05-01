import React, { useState } from "react";
import "./Accordion.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div className="accordion-container" key={index}>
          <div className="accordion-header" onClick={() => handleClick(index)}>
            <div className="accordion-title">{item.title}</div>

            <div className="accordion-icon">
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {activeIndex === index && (
            <div className="accordion-body">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
