import React from "react";
import axios from "axios";
import { useAppDispatch } from "../../Redux/store";
import { setLogin, setLogout } from "../../Redux/LoginSlice";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Login = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const login = () => {
    axios
      .post("/api/login", {
        id: "admin",
        pwd: "123456",
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setLogin(res.data.user));
        // nav("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    axios
      .post("/api/logout")
      .then((res) => {
        console.log(res.data);
        dispatch(setLogout());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div className={styles.container}></div>;
};

export default Login;
