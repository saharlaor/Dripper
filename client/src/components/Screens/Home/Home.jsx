import React, { useState, useContext } from "react";
import { Layout } from "antd";
import LoginContext from "../../../contexts/LoginContext";
import ProgressBar from "./ProgressBar/ProgressBar";
import Graph from "./Graph/Graph";
import Drink from "./Drink/Drink";
import "./Home.css";

const { Header, Footer, Content } = Layout;

function Home() {
  const [dailyProgress, setDailyProgress] = useState(0);
  const {
    user: { uid, displayName, email, photoURL, accessToken },
  } = useContext(LoginContext);

  const handleProgressIncrease = (amount) => {
    setDailyProgress((prev) => prev + Math.round((amount * 100) / 3000));
  };

  return (
    <div className="Home">
      <Layout>
        <Header>
          <span>Welcome, {displayName}</span>
          <span>
            {email} <img src={photoURL} alt={`${displayName}'s photo`} />
          </span>
        </Header>
        <Content>
          <ProgressBar progressPercentage={dailyProgress} />
          <Graph />
          <Drink drinkHandler={handleProgressIncrease} />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
}

export default Home;
