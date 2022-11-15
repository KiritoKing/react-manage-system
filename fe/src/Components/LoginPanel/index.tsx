import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { setLogin } from "../../Redux/loginSlice";
import { useAppDispatch } from "../../Redux/store";
import CustomInput from "./CustomInput";
import styles from "./style.module.css";
import SubmitButton from "./SubmitButton";

const LoginPanel = () => {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    if (userName === "" || pwd === "") {
      void message.info("请输入用户名和密码后再登录");
      return;
    }
    // console.log(`userName: ${userName}`);
    // console.log(`pwd: ${pwd}`);
    axios
      .post("/api/login", {
        id: userName,
        pwd,
      })
      .then((res) => {
        const { status, user } = res.data;
        if (status === true && user !== undefined) {
          dispatch(setLogin(user));
          localStorage.setItem("user", user);
          void message.success("登录成功");
        } else {
          void message.error("用户名或密码不正确");
        }
      })
      .catch((err) => {
        void message.error("无法连接到服务器");
        console.error(err);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>登录</h1>
      <CustomInput
        placeholder="用户名"
        onChange={(val) => {
          setUserName(val);
        }}
        onEnter={loginHandler}
      />
      <CustomInput
        isPwd
        placeholder="密码"
        onChange={(val) => {
          setPwd(val);
        }}
        onEnter={loginHandler}
      />
      <div className={styles.controls}>
        <SubmitButton onClick={loginHandler} />
      </div>
    </div>
  );
};

export default LoginPanel;
