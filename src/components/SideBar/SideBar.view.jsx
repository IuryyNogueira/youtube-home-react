import React from "react";
import PropTypes from "prop-types";
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

SideBarView.propTypes = {
  modeBar: PropTypes.bool,
};

SideBarView.defaultProps = {
  modeBar: false,
};

export default SideBarView;
