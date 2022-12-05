import React from "react";
import { useState } from "react";
// import './script'

function Pond() {
  const [level, setLevel] = useState("");

  const handleChange = (event) => {
    setLevel(event.target.value);

    console.log("value is:", event.target.value);
  };

  const waterLevel = (event) => {
    event.preventDefault();
    document.documentElement.style.setProperty(
      "--my-height",
      280 - (400 * level) / 100 + "px"
    );
    console.log(
      getComputedStyle(document.documentElement).getPropertyValue("--my-height")
    );
  };

  return (
    <div className="flex-col justify-center mt-14">
      <div className="flex justify-center">
        <div className="level mx-4 bg-base-content">Water Level: {level}%</div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="cup" id="cup"></div>
      </div>

      <div className="input">
        <form action="" id="form" onSubmit={waterLevel}>
          <div className="mt-14">
            <input
              type="number"
              max="100"
              placeholder="Level of Water"
              id="userInput"
              onChange={handleChange}
              value={level}
              min="0"
            />
            <input type="submit" id="button" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pond;
