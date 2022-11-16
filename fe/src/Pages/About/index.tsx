import React from "react";
import styles from "./style.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Powered By: ChlorineC 陈梁子豪@HUST, 2022</p>
      <a
        href="https://github.com/KiritoKing/student-management"
        className={styles.link}
      >
        点此访问 Github Repo
      </a>
    </div>
  );
};

export default About;
