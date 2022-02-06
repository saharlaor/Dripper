import React, { useState, useContext, useEffect } from "react";
import { Layout, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import LoginContext from "../../../contexts/LoginContext";
import ProgressBar from "./ProgressBar/ProgressBar";
import Graph from "./Graph/Graph";
import Drink from "./Drink/Drink";
import "./Home.css";

const { Header, Content } = Layout;

function Home() {
  const [dailyProgress, setDailyProgress] = useState(0);
  const [weeklyDrinks, setWeeklyDrinks] = useState([]);
  const { user, setUser } = useContext(LoginContext);
  const { name, email, photoURL } = user ? user : {};

  useEffect(() => {
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const weekAgo = new Date(new Date().getTime() - dayInMilliseconds * 7);
    const weekDates = [...Array(7).keys()]
      .map((num) => new Date(new Date().getTime() - dayInMilliseconds * num))
      .map((date) => date.toLocaleDateString("en-GB"))
      .reduce((obj, date) => {
        obj[date] = [];
        return obj;
      }, {});
    console.log("user", user);
    user.uid &&
      setWeeklyDrinks(
        user.drinkHistory
          .filter(({ timestamp }) => new Date(timestamp) > weekAgo)
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

  const handleLogoutClick = () => {
    setUser(null);
  };

  const handleProgressIncrease = (amount) => {
    setDailyProgress((prev) => prev + Math.round((amount * 100) / 3000));
  };

  return (
    <div className="Home">
      <Layout>
        <Header>
          <span>Welcome, {name}</span>
          <span>
            {email} <img src={photoURL} alt={name} />
          </span>
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            onClick={handleLogoutClick}>
            Logout
          </Button>
        </Header>
        <Content>
          <ProgressBar progressPercentage={dailyProgress} />
          <Graph weeklyDrinks={weeklyDrinks} />
          <Drink drinkHandler={handleProgressIncrease} />
        </Content>
      </Layout>
    </div>
  );
}

export default Home;
