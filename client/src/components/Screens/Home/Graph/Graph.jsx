import { Divider } from "antd";
import React from "react";
import Chart from "react-apexcharts";
import "./Graph.css";

function Graph() {
  return (
    <div className="Graph">
      <Divider orientation="left">Weekly Graph</Divider>
      <Chart
        options={{
          chart: {
            id: "basic-bar",
            width: "auto",
          },
          xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          },
          yaxis: {
            max: (num) => Math.max(num, 3000),
          },
        }}
        series={[
          {
            name: "Milliliters",
            data: [2200, 2400, 1950, 2800, 2400, 1650, 2000],
          },
        ]}
        type="bar"
        height="92.5%"
      />
    </div>
  );
}

export default Graph;
