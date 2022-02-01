import { Slider, InputNumber, Divider } from "antd";
import React, { useState } from "react";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";
import "./Drink.css";

const START_COLOR = "#8df";
const END_COLOR = "#48d";

function Drink() {
  const [value, setValue] = useState(50);

  const radius = 125;
  const interpolate = interpolateRgb(START_COLOR, END_COLOR);
  const fillColor = interpolate(value / 100);
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  const handleSliderChange = (val) => {
    setValue(val / 10);
  };

  const handleInputChange = (val) => {
    setValue(val / 10);
  };

  return (
    <div className="Drink">
      <Divider orientation="left">Add Water</Divider>
      <div className="Drink__user-input">
        <LiquidFillGauge
          style={{ margin: "0 auto" }}
          width={radius * 2}
          height={radius * 2}
          value={value}
          percent="Milliliters"
          textSize={0.75}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={(props) => {
            const value = Math.round(props.value * 10);
            const radius = Math.min(props.height / 2, props.width / 2);
            const textPixels = (props.textSize * radius) / 2;
            const valueStyle = {
              fontSize: textPixels,
            };
            const percentStyle = {
              fontSize: textPixels * 0.6,
            };

            return (
              <tspan>
                <tspan className="value" style={valueStyle}>
                  {value}
                </tspan>
                <tspan style={percentStyle}>{props.percent}</tspan>
              </tspan>
            );
          }}
          riseAnimation
          waveAnimation
          waveFrequency={2}
          waveAmplitude={1}
          gradient
          gradientStops={gradientStops}
          circleStyle={{
            fill: fillColor,
          }}
          waveStyle={{
            fill: fillColor,
          }}
          textStyle={{
            fill: color("#444").toString(),
            fontFamily: "Arial",
          }}
          waveTextStyle={{
            fill: color("#fff").toString(),
            fontFamily: "Arial",
          }}
        />
        <div className="inputs">
          <Slider
            min={0}
            max={1000}
            onChange={handleSliderChange}
            value={typeof value === "number" ? value * 10 : 0}
            vertical
          />
          <InputNumber
            min={0}
            max={1000}
            style={{ margin: "16px 0" }}
            value={value * 10}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Drink;
