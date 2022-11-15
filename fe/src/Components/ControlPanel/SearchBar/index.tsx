import { Input } from "antd";
import React from "react";
import styles from "./style.module.css";

const SearchBar = () => {
  const onSearch = (val: string) => {
    console.log(val);
  };
  return (
    <Input.Search
      className={styles.searchbar}
      size="large"
      placeholder="请输入搜索内容"
      onSearch={onSearch}
      enterButton
    />
  );
};

export default SearchBar;
