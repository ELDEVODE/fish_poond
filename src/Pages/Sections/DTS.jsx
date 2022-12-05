import React from "react";
import Pond from "../Components/pond/Pond";

function DTS() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Digital Twin System</h1>
            <p className="py-6 max-w-xl">
              A digital twin is a virtual representation that serves as the real
              time counterpart of a physical object
            </p>
          </div>
          <Pond />
        </div>
      </div>
    </>
  );
}

export default DTS;
