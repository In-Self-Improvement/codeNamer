import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import "./SidebarHeader.css";

const SidebarHeader = ({ onClick }) => {
  return (
    <div className="sidebar_header_container">
      <div className="sidebar_header">
        <button className="sidebar_toggle" onClick={onClick}>
          <MenuIcon />
        </button>
        <h1 className="sidebar_title">Code Namer</h1>
      </div>
    </div>
  );
};

export default SidebarHeader;