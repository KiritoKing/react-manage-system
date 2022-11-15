import React from "react";
import { Button, PageHeader } from "antd";
import styles from "./style.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/store";
import { setLogout } from "../../Redux/loginSlice";
import axios from "axios";
import Forbid from "../../Pages/Forbid";
import useLogin from "Hooks/useLogin";

const Layout = () => {
  const isLogin = useLogin();
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const logoutHandler = () => {
    if (localStorage.getItem("user") === null) return;
    axios
      .post("/api/logout")
      .then((res) => {
        console.log(res.data);
        dispatch(setLogout());
        localStorage.removeItem("user");
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PageHeader
        onBack={() => null}
        className={styles.header}
        title="人员管理系统"
        extra={
          <Button type="primary" onClick={logoutHandler} hidden={!isLogin}>
            登出
          </Button>
        }
      />
      {isLogin ? <Outlet /> : <Forbid />}
    </>
  );
};

export default Layout;
