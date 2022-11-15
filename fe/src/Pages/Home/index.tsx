import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectLogin, setLogout } from "../../Redux/LoginSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

const index = () => {
  const isLogin = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (!isLogin) nav("/");
  });

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

  return (
    <div>
      顺利登录啦 <button onClick={logout}>登出</button>
    </div>
  );
};

export default index;
