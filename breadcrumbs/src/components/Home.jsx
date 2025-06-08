import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "./Home.css"

const Home = () => {
  const STATUS = {
    success: "SUCCESS",
    loading: "LOADING",
    error: "ERROR",
  };

  const [status, setStatus] = useState(STATUS.loading);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      setStatus(STATUS.loading);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
     // console.log(data.products);
      const slicedProducts=data.products.slice(0,6);
      setProducts(slicedProducts);
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

      <div className="products-container">
        {status === "SUCCESS" &&
          products.map((product, index) => {
            return (
              <div className="product-item" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
              </div>
            );
          })}
      </div>

      <div className="addMoreBtn">
        <Link to="/products">
        <button className="btn">Show more products</button>
        </Link>
        
      </div>
    </>
  );
};

export default Home;
