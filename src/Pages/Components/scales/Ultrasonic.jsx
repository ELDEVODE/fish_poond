import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import socketIOClient from "socket.io-client";

function Ultrasonic() {
    const token = localStorage.getItem("_auth");
    const [ultrasonic, setUltrasonic] = useState(72);
    
    useEffect(() => {
        const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
          extraHeaders: { Authorization: `Bearer ${token}` },
        });
        socket.on("sensor", (data) => {
          // console.log(data);
          setUltrasonic(data.ultrasonic);
        });
      }, [token]);


  return (
    <div>
        <div className="mx-10 mt-5">
          <div className="text-3xl font-bold mb-10">Dissolved Oxygen</div>
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
    </div>
  )
}

export default Ultrasonic