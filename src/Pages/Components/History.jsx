import axios from "axios";
import React, { useEffect, useState } from "react";

function History() {
  const [data, setData] = useState(null);

  const [selectedValue, setSelectedValue] = useState("");
  const [axiosParams, setAxiosParams] = useState({});

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  function updateAxiosParams() {
    if (selectedValue === "option1") {
      setAxiosParams({
        filter: "thirty_mins",
      });
    } else if (selectedValue === "option2") {
      setAxiosParams({
        filter: "sixty_mins",
      });
    }
    if (selectedValue === "option3") {
      setAxiosParams({
        filter: "ninety_mins",
      });
    }
    if (selectedValue === "option4") {
      setAxiosParams({
        filter: "two_hours",
      });
    }
    if (selectedValue === "option5") {
      setAxiosParams({
        filter: "three_hours",
      });
    }
    if (selectedValue === "option6") {
      setAxiosParams({
        filter: "six_hours",
      });
    }
  }

  useEffect(() => {
    updateAxiosParams();
  }, [selectedValue]);

  // https://digitaltwin-fyp.herokuapp.com/api/sensors

  const url = "https://digitaltwin-fyp.herokuapp.com/api/sensors";

  useEffect(() => {
    axios
      .get(`${url}`, {})
      .then(
        (response) => (
          setData(response.data.sensors), console.log(response.data.sensors)
        )
      )
      .catch((error) => console.log(error));
  }, []);
  const numbers = [];

  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  return (
    <>
      <div className="flex flex-row  flex-wrap justify-center">
        <div>
          <select onChange={handleChange} className="btn m-1">
            <option value="">Select an option</option>
            <option value="option1">Thirty Minutes</option>
            <option value="option2">Sixty Minutes</option>
            <option value="option3">Ninety Minutes</option>
            <option value="option4">Two Hours</option>
            <option value="option5">Three Hours</option>
            <option value="option6">Six Hours</option>
          </select>
          <button
          className="btn"
            onClick={() =>
              axios.get("https://digitaltwin-fyp.herokuapp.com/api/sensors", {
                params: {
                  filter: "two_hours"
                },
              }).then((response) => {
                setData(response.data.sensors)
              })
            }
          >
            Send Request
          </button>
        </div>
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
