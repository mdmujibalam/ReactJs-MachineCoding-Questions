import React, { useState, useEffect } from "react";
import "./Pagination.css";
import Product from "./Product";
import { PAGE_SIZE } from "./constant";

const Pagination = () => {
  const [productList, setProductList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/products?limit=200");
      const data = await res.json();
      console.log(data);
      setProductList(data.products);
    } catch (e) {
      console.log("Error occurreed while fetching products: ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalProducts = productList.length;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  const handleClick = (val) => {
    setPageNo(val);
  };

  const leftIconHandler = () => {
    if (pageNo > 1) setPageNo((prev) => prev - 1);
  };

  const rightIconHandler = () => {
    if (pageNo < totalPages) setPageNo((prev) => prev + 1);
  };

  // console.log("ProductsList", productList);

  const paginatedProductList = productList.slice(
    (pageNo - 1) * PAGE_SIZE,
    pageNo * PAGE_SIZE
  );

  return (
    <>
      {loading && <div className="loader">Loading Products ...</div>}

      <div className="allProducts-container">
        {paginatedProductList.map((product, index) => {
          return (
            <Product
              key={product.id}
              url={product.thumbnail}
              title={product.title}
              altText={`image${product.id}`}
            />
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="pagination-container">
          <button
            className="pagination-btn"
            onClick={leftIconHandler}
            disabled={pageNo === 1}
            aria-label="Prev page"
          >
            {"<"}
          </button>

          {!loading &&
            [...Array(totalPages).keys()].map((n) => (
              <button
                className={
                  pageNo === n + 1 ? "active pageNumber" : "pageNumber"
                }
                key={n}
                onClick={() => handleClick(n + 1)}
                aria-current={pageNo === n + 1 ? "page" : undefined}
              >
                {n + 1}
              </button>
            ))}

          <button
            className="pagination-btn"
            onClick={rightIconHandler}
            disabled={pageNo === totalPages}
            aria-label="Next page"
          >
            {">"}
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
