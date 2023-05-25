import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface IProp {
  onClick?: () => void;
}

const AddButton: React.FC<IProp> = ({ onClick }) => {
  return (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      size={"large"}
      onClick={onClick}
    >
      添加人员
    </Button>
  );
};

export default AddButton;
