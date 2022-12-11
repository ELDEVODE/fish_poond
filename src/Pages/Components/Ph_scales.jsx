import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import socketIOClient from "socket.io-client";

// import GaugeChart from "react-gauge-chart";

function Ph_scales() {

//* VARIABLES 
  const token = localStorage.getItem("_auth");
  const [temp, setTemp] = useState(20);
  const [ph, setPh] = useState(5);
  const [ultrasonic, setUltrasonic] = useState(72);
  const [turbidity, setTurbidity] = useState(35);
//* END OF VARIABLES

//* API CALLS

  //* Temp API Call 
  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("sensor", (data) => {
      // console.log(data);
      setTemp(data.temp);
    });
  }, [token]);

  //* PH API Call
  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("sensor", (data) => {
      // console.log(data);
      setPh(data.ph);
    });
  }, [token]);

  //* Ultrasonic API Call
  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("sensor", (data) => {
      // console.log(data);
      setUltrasonic(data.ultrasonic);
    });
  }, [token]);

  //* Turnidity API Call
  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("sensor", (data) => {
      // console.log(data);
      setTurbidity(data.turbidity);
    });
  }, [token]);

//* END OF API CALLS

  return (
    <>
      <div className="flex flex-row mt-20 flex-wrap justify-center">
        <div className="mx-10 mt-5">
          <div className="text-3xl font-bold mb-10">Temperature (°F)</div>
          <ReactSpeedometer
            customSegmentStops={[20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]}
            // segmentColors={['#fff','']}
            minValue={20}
            maxValue={40}
            value={temp}
            ringWidth={12}
            startColor={"#2f80ed"}
            endColor={"#fc0a0a"}
            needleHeightRatio={0.75}
            width={320}
            needleTransitionDuration={700}
          />
        </div>
        <div className="mx-10 mt-5">
          <div className="text-3xl font-bold mb-10">PH scale</div>
          <ReactSpeedometer
            customSegmentStops={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
            segmentColors={[
              "#ff2e1f",
              "pink",
              "orange",
              "#f5f5dc",
              "yellow",
              "#32CD32",
              "green",
              "#023020",
              "#30D5C8",
              "#ADD8E6",
              "blue",
              "#00008B",
              "violet",
              "purple",
            ]}
            minValue={1}
            maxValue={14}
            value={ph}
            ringWidth={20}
            startColor={"#2f80ed"}
            endColor={"#2F80ED"}
            width={320}
            needleColor={"black"}
            needleHeightRatio={0.6}
            needleTransition={"easePolyIn"}
            needleTransitionDuration={700}
          />
        </div>
        <div className="mx-10 mt-5">
          <div className="text-3xl font-bold mb-10">Ultrasonic (°C)</div>
          <ReactSpeedometer
            customSegmentStops={[
              30, 77, 124, 171, 218, 265, 312, 359, 406, 453, 500,
            ]}
            // segmentColors={['#fff','']}
            minValue={30}
            maxValue={500}
            value={ultrasonic}
            ringWidth={12}
            startColor={"#2f80ed"}
            endColor={"red"}
            width={320}
            needleHeightRatio={0.75}
            needleTransitionDuration={700}
          />
        </div>
        <div className="mx-10 mt-5">
          <div className="text-3xl font-bold mb-10">Turbidity</div>
          <ReactSpeedometer
            customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            // segmentColors={['#fff','']}
            minValue={0}
            maxValue={100}
            value={turbidity}
            ringWidth={12}
            startColor={"#2f80ed"}
            endColor={"red"}
            width={320}
            needleHeightRatio={0.75}
            needleTransitionDuration={700}
          />
        </div>
      </div>
    </>
  );
}

export default Ph_scales;
