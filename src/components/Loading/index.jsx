import React, { Component } from "react";
import { Spin } from "antd";
import "./index.css";
export default class Loading extends Component {
  render() {
    return (
      <div className="Stem-Loading">
        <Spin size="large" />
        <h1>正在加载中，请稍等。</h1>
      </div>
    );
  }
}
