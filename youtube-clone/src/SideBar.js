import React from "react";
import "./css/Sidebar.css";
import SidebarRow from "./SidebarRow";

function SideBar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Home"/>
      <SidebarRow title="Explore"/>
      <SidebarRow title=""/>
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
    </div>
  );
}

export default SideBar;
