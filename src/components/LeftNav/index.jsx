import React, { Component } from "react";
//  引入路由
import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { Layout, Menu } from "antd";
const { SubMenu } = Menu;
const { Sider } = Layout;

const myClass = (El) => {
  return (props) => {
    const location = useLocation();
    const params = useParams();
    return <El {...props} location={location} params={params}></El>;
  };
};

class StemLeftNav extends Component {
  state = { items: [], selKeys: "", openKeys: [] };
  componentDidMount() {
    //  模拟获取过来的路由数据
    const items = [
      { path: "StemHome/", title: "首页" },
      {
        path: "StemGoods/",
        title: "商品",
        children: [
          { path: "StemGoods/goods/", title: "商品管理" },
          { path: "StemGoods/brands/", title: "品牌管理" },
        ],
      },
      {
        path: "StemOrders/",
        title: "订单",
        children: [{ path: "StemOrders/orders/", title: "订单管理" }],
      },
      {
        path: "StemUsers/",
        title: "用户",
        children: [{ path: "StemUsers/users/", title: "用户列表" }],
      },
    ];
    const pathname = this.props.location.pathname.substring(1);
    const openkey = pathname.substring(0, pathname.indexOf("/") + 1);

    this.setState({
      items: items,
      selKeys: pathname,
      openKeys: [openkey],
    });
  }
  render() {
    const { items, selKeys, openKeys } = this.state;
    return (
      <Sider>
        <div className="sider-href">
          <a href="https://www.baidu.com" id="sider-href-xanxong">
            MALL
          </a>
        </div>
        <div className="sider-nav">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selKeys}
            openKeys={openKeys}
            onClick={this.handleSelect}
            onOpenChange={this.handleOpen}
          >
            {items.map((e) =>
              e.children ? (
                <SubMenu key={e.path} title={e.title}>
                  {e.children.map((el) => (
                    <Menu.Item key={el.path}>
                      <Link to={el.path}>{el.title}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={e.path}>
                  <Link to={e.path}>{e.title}</Link>
                </Menu.Item>
              )
            )}
          </Menu>
        </div>
      </Sider>
    );
  }
  handleSelect = (e) => {
    const { key, keyPath } = e;
    const { openKeys } = this.state;
    return this.setState({
      selKeys: key,
      openKeys: keyPath.length > 1 ? openKeys : [],
    });
  };
  handleOpen = (newopenKeys) => {
    const { openKeys } = this.state;
    let newKey = newopenKeys.find((e) => openKeys.indexOf(e) === -1);
    return this.setState({
      openKeys: [newKey],
    });
  };
}
export default myClass(StemLeftNav);
