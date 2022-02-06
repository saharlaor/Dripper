import { Divider } from "antd";
import React from "react";
import Chart from "react-apexcharts";
import "./Graph.css";

function Graph({ weeklyDrinks }) {
  const dailyAmounts = () => {
    return Object.values(weeklyDrinks)
      .reverse()
      .map((day) => day.reduce((acc, { amount }) => acc + amount, 0));
  };

  const lastSevenDays = () => Object.keys(weeklyDrinks).reverse();

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
            // Get a list of the last 7 dates
            categories: lastSevenDays(),
          },
          yaxis: {
            max: (num) => Math.max(num, 3000),
          },
        }}
        series={[
          {
            name: "Milliliters",
            data: dailyAmounts(),
          },
        ]}
        type="bar"
        height="92.5%"
      />
    </div>
  );
}

export default Graph;
