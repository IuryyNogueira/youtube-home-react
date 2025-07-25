import "./App.css";
import { Header } from "./components/Header";
import ScrollHorizontal from "./components/ScrollHorizontal";
import SideBar from "./components/SideBar";
import { Videos } from "./components/Videos";
import { useState} from "react";

function App() {
  const [sideBarState, setSideBarState] = useState(true);
  const [categorySelect, setCategorySelect] = useState("Tudo");

  const toggleSideBar = () => {
    setSideBarState(!sideBarState);
  };

  return (
    <>
      <Header changeSidebar={toggleSideBar} />
      <ScrollHorizontal
        sideBarState={sideBarState}
        categorySelect={categorySelect}
        setCategorySelect={setCategorySelect}
      />
      <SideBar modeBar={sideBarState} />
      <Videos sideBarState={sideBarState} categorySelect={categorySelect} />
    </>
  );
}

export default App;
