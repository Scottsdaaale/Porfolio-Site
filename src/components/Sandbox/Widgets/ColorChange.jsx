import React, { useState } from "react";

const ColorChange = () => {
  const [color, setColor] = useState("red");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="color-widget-container">
      <div className="square-container">
        <div className="square" style={{ backgroundColor: color }}></div>
      </div>
      <div className="button-container">
        <button onClick={() => changeColor("red")}>Red</button>
        <button onClick={() => changeColor("blue")}>Blue</button>
        <button onClick={() => changeColor("green")}>Green</button>
        <button onClick={() => changeColor("yellow")}>Yellow</button>
      </div>
    </div>
  );
};

export default ColorChange;