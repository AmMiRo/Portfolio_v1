import React from "react";

function Arrow() {
  return (
    <div className="arrow-wrapper">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 100,0 50,100"></polygon>
      </svg>
    </div>
  );
}

export default Arrow;
