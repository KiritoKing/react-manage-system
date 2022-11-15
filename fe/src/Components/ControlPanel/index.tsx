import React from "react";
import AddButton from "./AddButton";
import BreadBar from "./BreadBar";
import SearchBar from "./SearchBar";
import styles from "./style.module.css";

const ControlPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bread}>
        <BreadBar />
      </div>
      <div className={styles.buttons}>
        <AddButton />
        <SearchBar />
      </div>
    </div>
  );
};

export default ControlPanel;
