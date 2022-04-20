import React, { lazy, Suspense, useEffect, useState } from "react";

//  引入路由组件
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";

//  引入加载中组件
import Loading from "../components/Loading";
//  引入样式
import "./index.css";

const StemHome = lazy(() => import("./Stem_Home"));
const StemGoods = lazy(() => import("./Stem_Goods"));
const StemTypeList = lazy(() => import("./Stem_TypeList"));
const StemOrders = lazy(() => import("./Stem_Orders"));
const StemUsers = lazy(() => import("./Stem_Users"));

const { Content } = Layout;

const Pages = () => {
  const location = useLocation();
  const [breadItems, setBreadItems] = useState([]);
  useEffect(() => {
    const { pathname } = location;
    let arr = pathname.split("/").filter((e) => e);
    setBreadItems(arr);
  }, [location]);
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        {breadItems.map((e, index) => (
          <Breadcrumb.Item key={index}>{e}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Suspense fallback={<Loading></Loading>}>
          <Routes>
            <Route path="StemHome/" element={<StemHome />}></Route>
            <Route path="StemGoods/goods/" element={<StemGoods />}></Route>
            <Route path="StemGoods/brands/" element={<StemTypeList />}></Route>
            <Route path="StemOrders/orders/" element={<StemOrders />}></Route>
            <Route path="StemUsers/users/" element={<StemUsers />}></Route>
            <Route path="" element={<Navigate to="StemHome/" />}></Route>
          </Routes>
        </Suspense>
      </Content>
    </Layout>
  );
};

export default Pages;
