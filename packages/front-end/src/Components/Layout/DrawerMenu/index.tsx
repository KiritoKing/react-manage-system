import { Drawer, Menu } from "antd";
import type { MenuProps } from "antd";
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IProp {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const DrawerMenu: React.FC<IProp> = ({ open, setOpen }) => {
  const nav = useNavigate();
  const loc = useLocation();
  const [current, setCurrent] = useState("home");

  useEffect(() => {
    const paths = loc.pathname.split("/");
    if (paths.length <= 2) {
      setCurrent("home");
    } else {
      setCurrent("about");
    }
  }, [loc]);

  const onClose = () => {
    setOpen(false);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    setOpen(false);
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
