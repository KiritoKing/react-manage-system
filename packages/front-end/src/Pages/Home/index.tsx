import ControlPanel from "Components/ControlPanel";
import StudentList from "Components/StudentList";
import useStack from "Hooks/useStack";
import React from "react";
import styles from "./style.module.css";

const index = () => {
  useStack();
  return (
    <div className={styles.container}>
      <ControlPanel />
      <StudentList />
    </div>
  );
};

export default index;
