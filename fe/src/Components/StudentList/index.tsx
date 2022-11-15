import { Table } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { selectList, selectListReady, setList } from "Redux/listSlice";
import styles from "./style.module.css";
import columns from "./columns";
import { useAppDispatch, useAppSelector } from "Redux/store";

const StudentList: React.FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectList);
  const listReady = useAppSelector(selectListReady);

  useEffect(() => {
    axios
      .get("/api/stu/list")
      .then((res) => {
        console.log(res.data);
        dispatch(setList(res.data.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Table
        columns={columns}
        dataSource={list}
        bordered
        loading={!listReady}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default StudentList;
