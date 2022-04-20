import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//  引入路由
import { BrowserRouter } from "react-router-dom";
//  引入antd
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.min.css";
//  设置antd为中文版
import { ConfigProvider } from "antd";
moment.locale("zh-cn");

//  引入redux状态库
// import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
