import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tabs from "./components/Tabs";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Setting from "./components/Setting";

function App() {
  const tabsData = [
    {
      title: "Profile",
      content: "This is the content of Tab 1",
      component: Profile,
      validate: ()=>{
        let errors={};


      }
    },
    {
      title: "Interest",
      content: "This is the content of Tab 2",
      component: Interest,
    },
    {
      title: "Setting",
      content: "This is the content of Tab 3",
      component: Setting,
    },
  ];

  

  return <Tabs  />;
}

export default App;
