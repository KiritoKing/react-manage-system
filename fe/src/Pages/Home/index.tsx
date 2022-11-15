import ControlPanel from "Components/ControlPanel";
import StudentList from "Components/StudentList";
import React from "react";
import styles from "./style.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <ControlPanel />
      <StudentList />
    </div>
  );
};

export default index;
