import React, { useState, useEffect, useRef } from "react";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const [imagesList, setImagesList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchImages = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageNo}&limit=3`
      );
      const data = await response.json();
      // console.log(data);
      setImagesList((prev) => [...prev, ...data]);
    } catch (e) {
      console.log("Failed to fetch images", e);
    } finally {
      setLoading(false);
    }
  };

  //this useEffect hook will be called as soon as the page number changes to get new list of images
  useEffect(() => {
    fetchImages();
  }, [pageNo]);

  //this useEffect hook will be called when imagesList is updated to observe new last image of updated list
  //Each time when imagesList is changing -> Each time last element of imagesList is getting changed ->
  //Each time disconnect previous observer and connect new observer with updated list

  useEffect(() => {
    if (imagesList.length === 0) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageNo((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const containers = document.querySelectorAll(".image-container");
    const lastImage = containers[containers.length - 1];

    observer.current.observe(lastImage);

    return () => {
      if (lastImage) observer.current.unobserve(lastImage);

      observer.current.disconnect();
    };
  }, [imagesList]);

  return (
    <>
      {imagesList.length > 0 &&
        imagesList.map((item, index) => {
          return (
            <div className="image-container" key={item.id}>
              <img
                className="image-content"
                src={item.download_url}
                alt={`image${item.id}`}
              />
            </div>
          );
        })}

      {loading && <div className="loader-container">Loading Images...</div>}
    </>
  );
};

export default InfiniteScroll;
