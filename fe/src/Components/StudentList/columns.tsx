import type { ColumnsType } from "antd/es/table";
import { Avatar, Tag } from "antd";
import React from "react";
import { DataType } from "Redux/listSlice";
import DropMenu from "./DropMenu";

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
    render: () => <DropMenu />,
  },
];

export default columns;
