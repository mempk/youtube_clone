import React from "react";
import "./css/RecommendationBar.css";

function RecommendationBar() {
  return (
    <div className="recommendationBar">
      <hr />
      <div className="recommendationBar_list">
        <p className="selected">All</p>
        <p>JavaScript</p>
        <p>Music</p>
        <p>Microsoft</p>
        <p>Soccer</p>
        <p>Crypto</p>
        <p>TypesScript</p>
      </div>
      <hr />
    </div>
  );
}

export default RecommendationBar;
