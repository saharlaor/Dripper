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
  const {
    user: { displayName, email, photoURL },
    setUser,
  } = useContext(LoginContext);

  const handleLogoutClick = () => {
    setUser({});
  };

  const handleProgressIncrease = (amount) => {
    setDailyProgress((prev) => prev + Math.round((amount * 100) / 3000));
  };

  return (
    <div className="Home">
      <Layout>
        <Header>
          <span>Welcome, {displayName}</span>
          <span>
            {email} <img src={photoURL} alt={displayName} />
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
