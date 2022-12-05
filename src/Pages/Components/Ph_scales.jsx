import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import socketIOClient from "socket.io-client";

// import GaugeChart from "react-gauge-chart";

function Ph_scales() {
  // const Chartstyle={width: '500px'}
  const token = localStorage.getItem("_auth");
  const [temp, setTemp] = useState();
  const [ph, setPh] = useState()
  const [ultrasonic, setUltrasonic] = useState()

  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("temp", (data) => {
      console.log(data);
      setTemp(data);
    });
  }, []);
  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("ph", (data) => {
      console.log(data);
      setPh(data);
    });
  }, []);
  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("ultrasonic", (data) => {
      console.log(data);
      setPh(data);
    });
  }, []);
  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("ultrasonic", (data) => {
      console.log(data);
      setUltrasonic(data);
    });
  }, []);

  return (
    <>
      <div className="flex flex-row mt-20 flex-wrap justify-center">
        <div className="mx-10 mt-5">
          <div className="text-3xl font-bold mb-10">Temperature (°F)</div>
          <ReactSpeedometer
            customSegmentStops={[20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]}
            // segmentColors={['#fff','']}
            minValue={20}
            maxValue={30}
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
            customSegmentStops={[0, 5, 10, 15, 20, 25, 30, 35, 40]}
            // segmentColors={['#fff','']}
            minValue={0}
            maxValue={40}
            value={ultrasonic}
            ringWidth={12}
            startColor={"#2f80ed"}
            endColor={"#2F80ED"}
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
