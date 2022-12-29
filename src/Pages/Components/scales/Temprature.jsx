import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import socketIOClient from "socket.io-client";

function Temprature() {
    const token = localStorage.getItem("_auth");
    const [temp, setTemp] = useState(20);
    const [data, setData] = useState();

    useEffect(() => {
        const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
          extraHeaders: { Authorization: `Bearer ${token}` },
        });
        socket.on("sensor", (data) => {
          // console.log(data);
          setTemp(data.temp);
          setData(data)
        });
      }, [token]);

    


  return (
    <div>
        <div className="mx-10 mt-5 ">
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
    </div>
  )
}

export default Temprature