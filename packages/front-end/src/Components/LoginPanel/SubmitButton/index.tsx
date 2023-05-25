import React, { FC } from "react";
import { Button } from "antd";
import styles from "./style.module.css";

interface IProp {
  onClick: () => void;
}

const SubmitButton: FC<IProp> = ({onClick}) => {
  return (
    <Button className={styles.button} type="primary" onClick={onClick}>
      提交
    </Button>
  );
};

export default SubmitButton;
