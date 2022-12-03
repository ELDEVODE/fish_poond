import React from "react";
import Control_settings from "../Components/Control_settings";
import Ph_scales from "../Components/Ph_scales";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">
            Modify, manage and control the aquaculture farm in real time
          </h1>
          <p className="py-6 ">
            Keep track of different sensors of Ph, Temperature and Ultrasonic
            sensor
          </p>
          <Control_settings />
          <Ph_scales />
        </div>
      </div>
    </div>
  );
}

export default Hero;
