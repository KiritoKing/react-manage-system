import { DeleteOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import React, { useState } from "react";
import ConfirmModal from "../ConfirmModal";

const DropMenu: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const editHandler = () => {
    console.log("edit");
  };
  const deleteItem = () => {
    console.log("del");
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
