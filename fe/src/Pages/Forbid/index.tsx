import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Forbid = () => {
  return (
    <div className={styles.container}>
      <h1>您还尚未登录，没有权限访问</h1>
      <div className={styles.link}>
        <Link to="/">返回登录页面</Link>
      </div>
    </div>
  );
};

export default Forbid;
