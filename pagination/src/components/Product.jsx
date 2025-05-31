import React from "react";
import "./Product.css";

const Product = ({ url, title, altText }) => {
  return (
    <>
      <div className="product-container">
        <img className="product-image" src={url} alt={altText} />

        <div className="product-title">{title}</div>
      </div>
    </>
  );
};

export default Product;
