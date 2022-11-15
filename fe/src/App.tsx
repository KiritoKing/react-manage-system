import React from "react";
import axios from "axios";

const App = () => {
  const login = () => {
    axios
      .post("/api/login", {
        id: "admin",
        pwd: "123456",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    axios
      .post("/api/logout")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const test = () => {
    fetch("/api")
      .then(async (res) => await res.text())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <button onClick={login}>登录</button>
      <button onClick={logout}>登出</button>
      <button onClick={test}>测试代理</button>
    </div>
  );
};

export default App;
