import React, { useState, useContext, useEffect } from "react";
import { Layout } from "antd";

import LoginContext from "../../../contexts/LoginContext";
import ProgressBar from "./ProgressBar/ProgressBar";
import Graph from "./Graph/Graph";
import Drink from "./Drink/Drink";
import api from "../../../api/api";
import "./Home.css";

const { Content } = Layout;

// Costants
const DAY_MILLISECONDS = 24 * 60 * 60 * 1000;

function Home() {
  const [dailyProgress, setDailyProgress] = useState(0);
  const [weeklyDrinks, setWeeklyDrinks] = useState([]);
  const { user, setUser } = useContext(LoginContext);

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-GB");
    setDailyProgress(
      Math.round(
        weeklyDrinks[today]?.reduce(
          (acc, { amount }) => acc + (amount * 100) / 3000,
          0
        )
      )
    );
  }, [weeklyDrinks]);

  useEffect(() => {
    const weekAgo = new Date(
      new Date(new Date().getTime() - DAY_MILLISECONDS * 6).toDateString()
    );
    const weekDates = [...Array(7).keys()]
      .map((num) => new Date(new Date().getTime() - DAY_MILLISECONDS * num))
      .map((date) => date.toLocaleDateString("en-GB"))
      .reduce((obj, date) => {
        obj[date] = [];
        return obj;
      }, {});

    user?.uid &&
      setWeeklyDrinks(
        user.drinkHistory
          .filter(({ timestamp }) => new Date(timestamp) >= weekAgo)
          .reduce((obj, drink) => {
            const date = new Date(drink.timestamp);
            obj[date.toLocaleDateString("en-GB")] = [
              ...obj[date.toLocaleDateString("en-GB")],
              drink,
            ];
            return obj;
          }, weekDates)
      );
  }, [user]);

  const handleProgressIncrease = async (amount) => {
    const { data: drink } = await api.post("/drinks/", {
      userId: user._id,
      amount,
    });
    await api.put(`/users/${user._id}`, { drinkId: drink._id });
    setUser((prev) => {
      return { ...prev, drinkHistory: [...prev.drinkHistory, drink] };
    });
  };

  return (
    <div className="Home">
      <Content>
        <ProgressBar progressPercentage={dailyProgress} />
        <Graph weeklyDrinks={weeklyDrinks} />
        <Drink drinkHandler={handleProgressIncrease} />
      </Content>
    </div>
  );
}

export default Home;
