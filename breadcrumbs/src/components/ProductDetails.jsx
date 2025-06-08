import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Home.css";

const ProductDetails = () => {
  const STATUS = {
    success: "SUCCESS",
    loading: "LOADING",
    error: "ERROR",
  };

  const [status, setStatus] = useState(STATUS.loading);

  const [productDetails, setProductDetails] = useState([]);

  const { id } = useParams();

  const fetchProducts = async () => {
    try {
      setStatus(STATUS.loading);
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      //console.log(data);
      setProductDetails(data);
      setStatus(STATUS.success);
    } catch (e) {
      setStatus(STATUS.error);
      console.log("Error occurred while fetchinh data ", e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {status === "LOADING" && <div>loading...</div>}

      {status === "ERROR" && (
        <div>Something went wrong, while fetching data...</div>
      )}

     
        {status === "SUCCESS" && (
          <div className="product-detail" >
            <img src={productDetails.thumbnail} alt={productDetails.title} />
            <h3>{productDetails.title}</h3>
            <p>{productDetails.description}</p>
            <h3>$ {productDetails.price}</h3>
          </div>
        )}
      
    </>
  );
};

export default ProductDetails;
