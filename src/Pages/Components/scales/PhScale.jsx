import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import socketIOClient from "socket.io-client";

function PhScale() {
  const [ph, setPh] = useState(5);
  const token = localStorage.getItem("_auth");

  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("sensor", (data) => {
      // console.log(data);
      setPh(data.ph);
    });
  }, [token]);

  return (
    <div>
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
    </div>
  );
}

export default PhScale;
