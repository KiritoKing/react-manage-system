import React from "react";
import { Button } from "antd";

interface IProp {
  onClick?: () => void;
}

const ResetButton: React.FC<IProp> = ({ onClick }) => {
  return (
    <Button size={"large"} onClick={onClick}>
      重置筛选
    </Button>
  );
};

export default ResetButton;
