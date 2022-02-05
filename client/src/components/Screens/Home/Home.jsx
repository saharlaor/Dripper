import React, { useState, useContext } from "react";
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
  const { user, setUser } = useContext(LoginContext);
  const { name, email, photoURL } = user ? user : {};

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
          <Graph />
          <Drink drinkHandler={handleProgressIncrease} />
        </Content>
      </Layout>
    </div>
  );
}

export default Home;
