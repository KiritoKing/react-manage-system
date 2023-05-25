import React, { useState } from "react";
import { Avatar, Button, message, PageHeader } from "antd";
import styles from "./style.module.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { selectUser, setLogout } from "../../Redux/loginSlice";
import { MenuOutlined } from "@ant-design/icons";
import axios from "axios";
import Forbid from "../../Pages/Forbid";
import useLogin from "Hooks/useLogin";
import DrawerMenu from "./DrawerMenu";

const Layout = () => {
  const isLogin = useLogin();
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const loc = useLocation();
  const user = useAppSelector(selectUser);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const logoutHandler = () => {
    if (localStorage.getItem("user") === null) return;
    axios
      .post("/api/logout")
      .then((res) => {
        console.log(res.data);
        dispatch(setLogout());
        localStorage.removeItem("user");
        void message.success("登出成功");
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PageHeader
        backIcon={loc.pathname === "/home" ? <MenuOutlined /> : undefined}
        onBack={() => {
          if (loc.pathname === "/home") {
            setDrawerOpen(true);
          } else {
            nav(-1);
          }
        }}
        className={styles.header}
        title={loc.pathname === "/home/about" ? "关于" : "人员管理系统"}
        extra={[
          <span key="1" className={styles.user}>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            {user}
          </span>,
          <Button
            key="2"
            type="primary"
            onClick={logoutHandler}
            hidden={!isLogin}
          >
            登出
          </Button>,
        ]}
      />
      <DrawerMenu
        open={drawerOpen}
        setOpen={(val) => {
          setDrawerOpen(val);
        }}
      />
      {isLogin ? <Outlet /> : <Forbid />}
    </>
  );
};

export default Layout;
