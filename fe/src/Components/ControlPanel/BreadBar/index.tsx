import React from "react";
import { Breadcrumb } from "antd";

const BreadBar = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>主页</Breadcrumb.Item>
      <Breadcrumb.Item>学生列表</Breadcrumb.Item>
      <Breadcrumb.Item>学生详情</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadBar;
