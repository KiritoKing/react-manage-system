import React from "react";
import { Avatar, Button, message, PageHeader } from "antd";
import styles from "./style.module.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { selectUser, setLogout } from "../../Redux/loginSlice";
import { MenuOutlined } from "@ant-design/icons";
import axios from "axios";
import Forbid from "../../Pages/Forbid";
import useLogin from "Hooks/useLogin";

const Layout = () => {
  const isLogin = useLogin();
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const loc = useLocation();
  const user = useAppSelector(selectUser);

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
          nav(-1);
        }}
        className={styles.header}
        title="人员管理系统"
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
      {isLogin ? <Outlet /> : <Forbid />}
    </>
  );
};

export default Layout;
