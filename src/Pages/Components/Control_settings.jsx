import axios from "axios";
import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import Pond from "./pond/Pond";
import PhScale from "./scales/PhScale";
import Temprature from "./scales/Temprature";
import Ultrasonic from "./scales/Ultrasonic";
import GraphTemp from "./scales/Graphs/GraphTemp";

function ControlSettings() {
  const [vow, setVow] = useState();

  useEffect(() => {
    axios
      .get("https://digitaltwin-fyp.herokuapp.com/api/water-level")
      .then(
        (response) => (
          setVow(response.data.waterLevel.waterLevel)
        )
      )
      .catch((error) => console.log(error));
  }, []);

  const incrementVow = () => {
    if (vow < 90) {
      setVow(vow + 1);
    }
  };

  const decrementVow = () => {
    if (vow > 10) {
      setVow(vow - 1);
    }
  };

  const [fill, setFill] = useState(false);

  useEffect(() => {
    if (fill) {
      const interval = setInterval(incrementVow, 1000);

      return () => clearInterval(interval);
    }
  }, [incrementVow]);

  const handleFill = (nextChecked) => {
    setFill(nextChecked);
    setFill(!fill);
    if (fill) {
      axios
        .post("https://digitaltwin-fyp.herokuapp.com/api/water-level", {
          waterLevel: vow,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("first");
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const [drain, setDrain] = useState(false);

  useEffect(() => {
    if (drain) {
      const interval = setInterval(decrementVow, 1000);

      return () => clearInterval(interval);
    }
  }, [decrementVow]);

  const handleDrain = (nextChecked) => {
    setDrain(nextChecked);
    setDrain(!drain);
    if (drain) {
      axios
        .post("https://digitaltwin-fyp.herokuapp.com/api/water-level", {
          waterLevel: vow,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("first");
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const waterLevel = () => {
    document.documentElement.style.setProperty(
      "--my-height",
      280 - (400 * vow) / 100 + "px"
    );
    // console.log(
    //   getComputedStyle(document.documentElement).getPropertyValue("--my-height")
    // );
  };
  return (
    <>
      <div className="flex flex-row justify-start">
        
      </div>
      <div className="mt-5">
        <div className="text-base"></div>
        <button className="mx-5 mt-3 csbw text-2xl">{vow}</button>
      </div>
      
      
      <div className="flex flex-row justify-center mb-10">
      <div className="mr-5 ml-5">
            <div className="text-base mb-5">Fill</div>
            <Switch
              onChange={handleFill}
              checked={fill}
              className="react-switch"
              width={100}
              height={30}
              onColor="#2F80ED"
              // onChange={handleDrain}
              // checked={drain}
              // className="react-switch"
              // width={100}
              // height={30}
              // onColor="#2F80ED"
            />
          </div>

          <Pond />
          <div className="mt-80 m-5">
            <div className="text-base mb-5">Drain</div>
            <Switch
              onChange={handleDrain}
              checked={drain}
              className="react-switch"
              width={100}
              height={30}
              onColor="#2F80ED"
            />
          </div>
      </div>

      <div className="flex-row">
        <h2 className="text-4xl font-bold mt-0">{waterLevel()}</h2>

        <div className="flex flex-row justify-center">
          <PhScale />
          <Temprature />
          <Ultrasonic />
        </div>
      </div>
    </>
  );
}

export default ControlSettings;
