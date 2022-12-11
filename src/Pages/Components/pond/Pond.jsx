import React from "react";
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
// import './script'

function Pond() {
  const [level, setLevel] = useState("");

  // token
  const token = localStorage.getItem("_auth");

  // const handleChange = (event) => {
  //   setLevel(event.target.value);

  //   console.log("value is:", event.target.value);
  // };

  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("waterlevel", (data) => {
      // console.log(data);
      setLevel(data);
    });
  }, []);

  const variableValue = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--my-height");

  return (
    <div className="flex-col justify-center mt-14">
      {/* <div className="flex justify-center">
        <div className="level mx-4 bg-base-content">Water Level: {variableValue}%</div>
      </div> */}

      <div className="flex justify-center mt-5">
        <div className="cup" id="cup"></div>
      </div>
    </div>
  );
}

export default Pond;
