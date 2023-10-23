import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const [colorCode, setColorCode] = useState("#000000");
  const handleColorChange = (event) => {
    setColor(event.target.value);
    setColorCode(event.target.value);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <label htmlFor="colorPicker" className="font-bold">
            Color Picker:{" "}
          </label>
          <input
            type="color"
            id="colorPicker"
            value={color}
            onChange={handleColorChange}
          />
          <h1 className="font-bold">{colorCode}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
