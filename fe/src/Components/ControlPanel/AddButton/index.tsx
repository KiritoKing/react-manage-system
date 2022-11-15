import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddButton = () => {
  return (
    <Button type="primary" icon={<PlusOutlined />} size={"large"}>
      添加人员
    </Button>
  );
};

export default AddButton;
