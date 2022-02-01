import React from "react";
import "./Home.css";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

function Home() {
  return (
    <div className="Home">
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default Home;
