import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import GaugeChart from "react-gauge-chart";

function Ph_scales() {
  return (
    <>
      <div className="flex flex-row mt-20 flex-wrap justify-center">
        <div className="mx-10 mt-5">
          <div className="text-3xl font-bold mb-10">Temperature</div>
          <ReactSpeedometer
            customSegmentStops={[0, 5, 10, 15, 20, 25, 30, 35, 40]}
            // segmentColors={['#fff','']}
            minValue={0}
            maxValue={40}
            value={25}
            ringWidth={12}
            startColor={["#2f80ed"]}
            endColor={["#2F80ED"]}
            width={320}
          />
        </div>
        <div className="mx-10 mt-5">
          <div className="text-3xl font-bold mb-10">PH scale</div>
          <ReactSpeedometer
            customSegmentStops={[1, 3, 5, 7, 9, 12, 13, 14]}
            segmentColors={[
              "#F50404",
              "#F45E07",
              "#F2B90A",
              "#219653",
              "#2F80ED",
              "#2F80ED",
              "#9B51E0",
            ]}
            minValue={1}
            maxValue={14}
            value={2}
            ringWidth={35}
            startColor={["#2f80ed"]}
            endColor={["#2F80ED"]}
            width={320}
          />
        </div>
        <div className="mx-10 mt-5">
          <div className="text-3xl font-bold mb-10">Ultrasonic</div>
          <ReactSpeedometer
            customSegmentStops={[0, 5, 10, 15, 20, 25, 30, 35, 40]}
            // segmentColors={['#fff','']}
            minValue={0}
            maxValue={40}
            value={25}
            ringWidth={12}
            startColor={["#2f80ed"]}
            endColor={["#2F80ED"]}
            width={320}
          />
        </div>
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={30}
          colors={["#FF5F6D", "#FFC371"]}
          arcWidth={0.3}
          percent={0.37}
        />
      </div>
    </>
  );
}

export default Ph_scales;
