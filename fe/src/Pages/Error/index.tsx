import React from "react";
import styles from "./style.module.css";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <Result
        status="404"
        title="出错了"
        subTitle="你要找的页面不知道去了哪里"
        extra={
          <Button
            type="primary"
            onClick={() => {
              nav("/");
            }}
          >
            返回主页
          </Button>
        }
      />
    </div>
  );
};

export default Error;
