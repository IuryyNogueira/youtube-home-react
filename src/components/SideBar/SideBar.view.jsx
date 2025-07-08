import React from "react";
import { SideBarMax } from "./SideBarMax";
import { SideBarMin } from "./SideBarMin";
import "./SideBar.css";

const SideBarView = ({ modeBar }) => {
  if (modeBar) {
    return <SideBarMax />;
  } else {
    return <SideBarMin />;
  }
};

export default SideBarView;
