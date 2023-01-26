import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";


function GraphTby() {
  const [data, setData] = useState(5);
  const token = localStorage.getItem("_auth");

  useEffect(() => {
    const socket = socketIOClient("https://digitaltwin-fyp.herokuapp.com/", {
      extraHeaders: { Authorization: `Bearer ${token}` },
    });
    socket.on("graph", (data) => {
      setData(data);
    });
  }, [token]);

  return (
    <>
      <div>
        <div className="mx-10 mt-5 ">
          <LineChart
            width={800}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="turbidity" stroke="#8f7a5e" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
            <Legend />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          </LineChart>
        </div>
      </div>
    </>
  );
}

export default GraphTby;
