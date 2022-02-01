import React from "react";
import "./Home.css";
import { Layout } from "antd";
import ProgressBar from "./ProgressBar/ProgressBar";
import Graph from "./Graph/Graph";

const { Header, Footer, Content } = Layout;

function Home() {
  return (
    <div className="Home">
      <Layout>
        <Header>Header</Header>
        <Content>
          <ProgressBar />
          <Graph />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default Home;
