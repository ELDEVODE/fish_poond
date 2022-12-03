import React from "react";
import { useState } from "react";

function Control_settings() {
  const [drain, setDrain] = useState(true);
  const [fill, setFill] = useState(false);
  const [stop, setStop] = useState(false);

  const handleclick = () => {
    setDrain(false);
    console.log(drain);
    setFill(true);
    console.log(fill);
  };
  const handleclick2 = () => {
    setDrain(true);
    console.log(drain);
    setFill(false);
    console.log(fill);
  };
  const handleclick3 = () => {
    setDrain(false)
    console.log(drain)
    setFill(false)
    console.log(fill)
  }
  return (
    <>
      <div className="flex-row">
        <h2 className="text-4xl font-bold mt-10">Controls settings</h2>

        <div className="flex flex-row justify-center">
          {drain ? (
            <div className="mt-5">
              <div className="text-base">Drain</div>
              <button onClick={handleclick} className="mx-5 csbo text-2xl mt-3">
                on
              </button>
            </div>
          ) : (
            <div className="mt-5">
              <div className="text-base">Drain</div>
              <button onClick={handleclick2} className="mx-5 csb text-2xl mt-3">
                off
              </button>
            </div>
          )}
          {fill ? (
            <div className="mt-5">
              <div className="text-base">Fill</div>
              <button onClick={handleclick2} className="mx-5 mt-3 csbo text-2xl">On</button>
            </div>
          ) : (
            <div className="mt-5">
              <div className="text-base">Fill</div>
              <button onClick={handleclick} className="mx-5 mt-3 csb text-2xl">Off</button>
            </div>
          )}
        </div>
        <div className="mt-5">
          <div className="text-base">Stop</div>
          <button onClick={handleclick3} className="mx-5 mt-3 csbs text-2xl">Off</button>
        </div>
      </div>
    </>
  );
}

export default Control_settings;
