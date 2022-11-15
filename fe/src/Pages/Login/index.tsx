import useLogin from "Hooks/useLogin";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPanel from "../../Components/LoginPanel";
import styles from "./style.module.css";

const Login = () => {
  const isLogin = useLogin();
  const nav = useNavigate();
  useEffect(() => {
    if (isLogin) nav("/home");
  }, [isLogin]);

  return (
    <div className={styles.container}>
      <div className={styles.text}>背景图来自网络随机图片源，与本人无关</div>
      <LoginPanel />
    </div>
  );
};

export default Login;
