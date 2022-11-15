import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectLogin, setLogout } from "../../Redux/loginSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

const index = () => {
  const isLogin = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const logout = () => {
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
    <div>
      顺利登录啦 <button onClick={logout}>登出</button>
      <button
        onClick={() => {
          console.log(document.cookie);
        }}
      >
        打印cookie
      </button>
    </div>
  );
};

export default index;
