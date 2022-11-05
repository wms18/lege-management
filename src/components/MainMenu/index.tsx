/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-11-01 02:02:55
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-02 01:12:43
 */
import React, { FC, useState } from "react";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "/home", <PieChartOutlined />),
  getItem("About", "/about", <DesktopOutlined />),
  getItem("User", "/user", <UserOutlined />, [
    getItem("Tom", "/user/1"),
    getItem("Bill", "/user/2"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const MainMenu: React.FC = () => {
  const currentRoute = useLocation();
  const [openKeys, setOpenKeys] = useState([
    "/" + currentRoute.pathname.split("/")[1],
  ]);
  const navigateTo = useNavigate();
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };
  const handleOnOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys([keys[keys.length - 1]]);
  };
  return (
    <div>
      <Menu
        theme="dark"
        onClick={menuClick}
        openKeys={openKeys}
        defaultSelectedKeys={[currentRoute.pathname]}
        mode="inline"
        items={items}
        onOpenChange={handleOnOpenChange}
      />
    </div>
  );
};

export default MainMenu;
