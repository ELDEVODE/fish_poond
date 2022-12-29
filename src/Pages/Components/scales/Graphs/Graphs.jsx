import React from "react";
import GraphTemp from "./GraphTemp";
import GraphPh from "./GraphPh";
import GraphDO from "./GraphDO";
import GraphTby from "./GraphTby";

function Graphs() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="flex flex-col">
          <div className="flex wrap">
            <div className="">
              <GraphTemp />
            </div>
            <div className="">
              <GraphPh />
            </div>
          </div>
          <div className="flex wrap">
            <div className="">
              <GraphDO />
            </div>
            <div className="">
              <GraphTby />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graphs;
