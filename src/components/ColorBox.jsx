import React from "react";

const ColorBox = ({ size, color, top, left, bottom, right }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        position: "absolute",
        zIndex: -1,
        top: top,
        left: left,
        bottom: bottom,
        right: right,
      }}
    ></div>
  );
};

export default ColorBox;
