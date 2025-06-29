import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);

  const handleClick = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem("themeMode", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("themeMode");
    if (savedTheme) {
      setDark(savedTheme === "dark");
    }
  }, []);

  return (
    <div className="navigationBar">
      <div className="nav-title">Navbar</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={handleClick}>SwitchMode</button>
      </div>
    </div>
  );
};

export default Navbar;
