import React, { useState } from "react";
import "./Home.css";
import { Layout } from "antd";
import ProgressBar from "./ProgressBar/ProgressBar";
import Graph from "./Graph/Graph";
import Drink from "./Drink/Drink";

const { Header, Footer, Content } = Layout;

function Home() {
  const [dailyProgress, setDailyProgress] = useState(150);

  return (
    <div className="Home">
      <Layout>
        <Header>Header</Header>
        <Content>
          <ProgressBar progressPercentage={dailyProgress} />
          <Graph />
          <Drink />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default Home;
