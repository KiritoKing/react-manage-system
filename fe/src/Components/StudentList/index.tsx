import { Table, Avatar, Tag } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import {
  selectList,
  selectListReady,
  setList,
  DataType,
  delItem,
} from "Redux/listSlice";
import styles from "./style.module.css";
import { useAppDispatch, useAppSelector } from "Redux/store";
import type { ColumnsType } from "antd/es/table";

import DropMenu from "./DropMenu";

const StudentList: React.FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectList);
  const listReady = useAppSelector(selectListReady);

  const columns: ColumnsType<DataType> = [
    {
      title: "头像",
      key: "avatar",
      dataIndex: "avatar",
      render: (src) => {
        // console.log(src);
        if (src !== undefined) return <Avatar src={src} />;
        return <Avatar src="https://joeschmoe.io/api/v1/random" />;
      },
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "专业",
      dataIndex: "faculty",
      key: "faculty",
    },
    {
      title: "年级",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "性别",
      key: "gender",
      dataIndex: "gender",
      render: (text) => {
        const color = text === "男" ? "blue" : "pink";
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "电话",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "邮箱",
      dataIndex: "mail",
      key: "mail",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record, index) => {
        return (
          <DropMenu
            onEdit={() => {
              console.log("edit row:", index);
            }}
            onDel={() => {
              console.log("del row:", index);
              dispatch(delItem(index));
            }}
            data={record}
          />
        );
      },
    },
  ];

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
