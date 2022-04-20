import React, { Component } from "react";
import "./App.css";
//  引入layout布局
import { Layout } from "antd";
import StemHeader from "./components/Stem_Header";
import StemLeftNav from "./components/LeftNav";
import Pages from "./pages";

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout className="base-layout">
          <StemLeftNav></StemLeftNav>
          <Layout>
            <StemHeader></StemHeader>
            <Pages></Pages>
          </Layout>
        </Layout>
      </div>
    );
  }
}
