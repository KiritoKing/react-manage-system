import ControlPanel from "Components/ControlPanel";
import React from "react";
import styles from "./style.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <ControlPanel />
    </div>
  );
};

export default index;
