import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevClick = () => {
    {
      activeIndex === 0
        ? setActiveIndex(images.length - 1)
        : setActiveIndex((curr)=> curr-1);
    }
  };

  const handleNextClick = () => {
    {
      activeIndex === images.length - 1
        ? setActiveIndex(0)
        : setActiveIndex((curr)=> curr+1);
    }
  };
  return (
    <div>
      <div className="parentSection">
        <div className="imageSection">
          <img src={images[activeIndex]} alt={`image${activeIndex}`} />
        </div>
        <div className="buttonSection">
          <button className="prevBtn" onClick={() => handlePrevClick()}>
            prev
          </button>
          <button className="nextBtn" onClick={() => handleNextClick()}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
