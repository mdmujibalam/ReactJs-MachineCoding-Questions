import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const images = [
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
    "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg",
    "https://picsum.photos/600/400",
    "https://picsum.photos/800/500",
    "https://picsum.photos/1000/600",
    "https://picsum.photos/1200/800",
  ];

  return (
    <>
      <Carousel images={images} />
    </>
  );
}

export default App;
