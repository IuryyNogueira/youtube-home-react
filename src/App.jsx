import "./App.css";
import { Header } from "./components/Header";
import ScrollHorizontal from "./components/ScrollHorizontal";
import SideBar from "./components/SideBar";
import {Videos} from "./components/Videos";

function App() {
  return (
    <>
      <Header />
      <ScrollHorizontal />
      <SideBar />
      <Videos />
    </>
  );
}

export default App;
