import { Drawer, Menu } from "antd";
import type { MenuProps } from "antd";
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProp {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const DrawerMenu: React.FC<IProp> = ({ open, setOpen }) => {
  const nav = useNavigate();
  const [current, setCurrent] = useState("home");

  const onClose = () => {
    setOpen(false);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "主页",
      key: "home",
      icon: <HomeOutlined />,
      onClick: () => {
        nav("/home");
      },
    },
    {
      label: "关于",
      key: "about",
      icon: <InfoCircleOutlined />,
      onClick: () => {
        nav("/home/about");
      },
    },
  ];

  return (
    <Drawer placement="left" open={open} onClose={onClose}>
      <Menu
        onClick={onClick}
        style={{ width: "100%" }}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </Drawer>
  );
};

export default DrawerMenu;
