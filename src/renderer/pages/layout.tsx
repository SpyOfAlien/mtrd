import { Navigate, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FormOutlined, HomeOutlined, FolderOutlined } from "@ant-design/icons";
import { Layout as Container, Menu, Button, theme } from "antd";

const Layout = () => {
  const { Header, Sider, Content } = Container;
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Container className="h-full">
      <Sider
        onCollapse={(value) => setCollapsed(value)}
        collapsible
        collapsed={collapsed}
        theme="light"
      >
        <div className="h-16 p-2 bg-red-500">BAO</div>
        <Menu
          className="items-center"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <FormOutlined />,
              label: "New report",
              onClick: () => navigate("/new"),
            },
            {
              key: "3",
              icon: <FolderOutlined />,
              label: "Reports",
              onClick: () => navigate("/reports"),
            },
          ]}
        />
      </Sider>
      <Container>
        <Header style={{ padding: 0, background: colorBgContainer }}></Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Container>
    </Container>
  );
};

export default Layout;
