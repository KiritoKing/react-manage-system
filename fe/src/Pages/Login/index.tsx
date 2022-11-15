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
      <LoginPanel />
    </div>
  );
};

export default Login;
