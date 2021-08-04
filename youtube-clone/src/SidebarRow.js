import React from "react";
import "./css/SidebarRow.css";

function SidebarRow(props) {
  return (
    <div className={`sidebarRow ${props.selected && "selected"}`}>
      <props.Icon className="sidebarRow_icon" />
      <p className="sidebarRow_title">{props.title}</p>
    </div>
  );
}

export default SidebarRow;
