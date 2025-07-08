import "./App.css";
import { Header } from "./components/Header";
import ScrollHorizontal from "./components/ScrollHorizontal";
import SideBar from "./components/SideBar";
import { Videos } from "./components/Videos";
import { useState } from "react";

function App() {
  let [sideBarMode, setSideBarMode] = useState(true);

  const toggleSideBar = () => {
    setSideBarMode(!sideBarMode);
  };

  return (
    <>
      <Header changeSidebar={toggleSideBar} />
      <ScrollHorizontal />
      <SideBar modeBar={sideBarMode}/> 
      <Videos />
    </>
  );
}

export default App;
