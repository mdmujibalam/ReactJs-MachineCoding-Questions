import React, { useState } from "react";
import "./Star.css";

const Star = () => {
  const [selectedStar, setSelectedStar] = useState(-1);
  const [hoverValue, setHoverValue] = useState(-1);

  return (
    <div>
      <div className="starContainer">
        {new Array(10).fill(0).map((item, index) => {
          return (
            <span
              key={index}
              className={
                index <= selectedStar || index <= hoverValue ? "gold" : ""
              }
              onClick={() => setSelectedStar(index)}
              onMouseEnter={() => setHoverValue(index)}
              onMouseDown={() => setHoverValue(-1)}
            >
              &#9733;
            </span>
          );
        })}

        <p>Hover value : {hoverValue}</p>
      </div>
    </div>
  );
};

export default Star;
