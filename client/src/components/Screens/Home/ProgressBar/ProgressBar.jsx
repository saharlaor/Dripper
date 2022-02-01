import React, { useState } from "react";
import { Progress, Divider } from "antd";
import "./ProgressBar.css";

function ProgressBar() {
  const [progressPercentage, setProgressPercentage] = useState(75);
  return (
    <div className="ProgressBar">
      <Divider orientation="left">Daily Progress</Divider>
      <h2 className="daily-progress__motivational-quote">
        Prove Yourself To Yourself
        <br />
        Not Others
      </h2>
      <Progress type="circle" percent={progressPercentage} />
      <span className="daily-progress__progress-description"></span>
    </div>
  );
}

export default ProgressBar;
