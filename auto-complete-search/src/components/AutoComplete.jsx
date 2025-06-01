import React, { useState, useEffect, useRef, useCallback } from "react";
import "./AutoComplete.css";

const AutoComplete = () => {
  const STATUS = {
    LOADING: "LOADING",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
  };

  const [status, setStatus] = useState(STATUS.LOADING);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const cacheRef = useRef({});

  const handleChange = (e) => {
    setQuery(e.target.value);
    //console.log(e.target.value);
  };

  const fetchQuery = useCallback(
    async (signal) => {
    //   if (!query.trim()) {
    //     setProducts([]);
    //     setStatus(STATUS.SUCCESS);
    //     return;
    //   }
      try {
        setStatus(STATUS.LOADING);
        if (cacheRef.current[query]) {
          console.log("picked from cache");
          setProducts(cacheRef.current[query]);
          setStatus(STATUS.SUCCESS);
          return;
        }

        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10`,
          { signal }
        );
        const data = await response.json();
        //console.log(data);
        cacheRef.current[query] = data.products;
        console.log("picked from api response");
        setProducts(data.products);
        setStatus(STATUS.SUCCESS);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.log("Error occurred", e);
          setStatus(STATUS.ERROR);
        }
      }
    },
    [query]
  );

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const timerId = setTimeout(() => fetchQuery(signal), 2000);

    return () => {
      clearTimeout(timerId);
      abortController.abort();
    };
  }, [fetchQuery]);

  console.log(cacheRef);

  return (
    <div className="autoComplete-container">
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e)}
        placeholder="Search..."
        aria-label="Search products"
        aria-autocomplete="list"
      />

      {status === "LOADING" && <div>...Loading</div>}

      {status === "ERROR" && <div>...Error Occurred</div>}

      {status === "SUCCESS" && products.length === 0 && (
        <div>No products found !!!</div>
      )}

      <div className="products-container">
        {status === "SUCCESS" &&
          products.map((product, index) => {
            return <div key={product.id}>{product.title} </div>;
          })}
      </div>
    </div>
  );
};

export default AutoComplete;
