import { DeleteOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import React, { useState } from "react";
import { DataType } from "Redux/listSlice";
import ConfirmModal from "../ConfirmModal";

interface IProp {
  onEdit: () => void;
  onDel: () => void;
  data: DataType;
}

const DropMenu: React.FC<IProp> = ({ onEdit, onDel }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const editHandler = () => {
    console.log("edit");
    onEdit();
  };
  const deleteItem = () => {
    console.log("del");
    onDel();
  };
  const delHandler = () => {
    setModalOpen(true);
  };

  const items: MenuProps["items"] = [
    {
      key: 0,
      icon: <DeleteOutlined />,
      label: "删除",
      danger: true,
      onClick: delHandler,
    },
  ];

  return (
    <>
      <Dropdown.Button menu={{ items }} onClick={editHandler}>
        编辑
      </Dropdown.Button>
      <ConfirmModal
        open={modalOpen}
        setOpen={(val) => {
          setModalOpen(val);
        }}
        setDelete={deleteItem}
      />
    </>
  );
};

export default DropMenu;
