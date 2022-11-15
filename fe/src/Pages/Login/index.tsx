import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPanel from "../../Components/LoginPanel";
import { selectLogin, setLogin } from "../../Redux/loginSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { getCookie } from "react-use-cookie";
import styles from "./style.module.css";

const Login = () => {
  const isLogin = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      console.log("read from storage:", user);
      dispatch(setLogin(user));
    }
    if (isLogin) nav("/home");
  }, [isLogin]);

  return (
    <div className={styles.container}>
      <LoginPanel />
    </div>
  );
};

export default Login;
