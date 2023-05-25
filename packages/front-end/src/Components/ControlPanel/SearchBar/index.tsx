import { Input } from "antd";
import React from "react";
import { DataType, selectList, setListView } from "Redux/listSlice";
import { useAppDispatch, useAppSelector } from "Redux/store";
import styles from "./style.module.css";

const SearchBar = () => {
  const list = useAppSelector(selectList);
  const dispatch = useAppDispatch();
  const fuzzyQuery = (list: DataType[], key: string) => {
    const arr: DataType[] = [];
    for (const item of list) {
      if (item.name.includes(key)) arr.push(item);
    }
    return arr;
  };

  const onSearch = (val: string) => {
    const res = fuzzyQuery(list, val);
    console.log(res);
    dispatch(setListView(res));
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
