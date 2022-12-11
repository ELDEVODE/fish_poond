import axios from "axios";
import React, { useEffect, useState } from "react";

function History() {
  const [data, setData] = useState(null);

  // https://digitaltwin-fyp.herokuapp.com/api/sensors

  const url = "https://digitaltwin-fyp.herokuapp.com/api/sensors";

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((response) => setData(response.data.sensors))
      .catch((error) => console.log(error));
  }, []);
  const numbers = [];

  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  return (
    <>
      <div className="flex flex-row  flex-wrap justify-center">
        <div className=" w-full">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Temperature</th>
                  <th>PH Scale</th>
                  <th>Turbidity</th>
                  <th>Ultrasonic</th>
                </tr>
              </thead>

              <tbody>
                {data ? (
                  data.slice(0, 10).map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td key={item.id}>{item.temp}</td>
                      <td key={item.id}>{item.ph}</td>
                      <td key={item.id}>{item.turbidity}</td>
                      <td key={item.id}>{item.ultrasonic}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>Loading data...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
