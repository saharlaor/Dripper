import React from "react";
import { Progress, Divider } from "antd";
import "./ProgressBar.css";

const quotes = [
  <>
    Prove Yourself To Yourself
    <br />
    Not Others
  </>,
  <>
    Great Start
    <br />
    Keep It Going
  </>,
  <>
    Almost There
    <br />
    Get Your Goals
  </>,
  <>
    Well Done
    <br />
    You Have Finished Your Daily Goal
  </>,
];

function ProgressBar({ progressPercentage }) {
  return (
    <div className="ProgressBar">
      <Divider orientation="left">Daily Progress</Divider>
      <h2 className="daily-progress__motivational-quote">
        {quotes[Math.min(Math.floor(progressPercentage / (100 / 3)), 3)]}
      </h2>
      <Progress type="circle" percent={progressPercentage} />
      <span className="daily-progress__progress-description"></span>
    </div>
  );
}

export default ProgressBar;
