import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

import { data1 } from "./data";

function GraphPh() {
  return (
    <>
        <div>
          <div className="mx-10 mt-5 ">
            <LineChart
              width={800}
              height={400}
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="Ph" stroke="#a83289" />
              <XAxis dataKey="name" />
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

export default GraphPh;
