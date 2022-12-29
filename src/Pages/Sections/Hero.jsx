import React from "react";
import ControlSettings from "../Components/Control_settings";
import Graphs from "../Components/scales/Graphs/Graphs";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Digital Twin System</h1>
          <p className="py-6 ">
            A digital twin is a virtual representation that serves as the real
            time counterpart of a physical object
          </p>
          <ControlSettings />
          {/* <Ph_scales /> */}
          <Graphs />
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
