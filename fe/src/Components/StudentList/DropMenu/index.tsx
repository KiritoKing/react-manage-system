import { DeleteOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import DetailModal from "Components/DetailModal";
import React, { useState } from "react";
import { DataType, modifyItem } from "Redux/listSlice";
import { useAppDispatch } from "Redux/store";
import ConfirmModal from "../ConfirmModal";

interface IProp {
  onEdit: () => void;
  onDel: () => void;
  data: DataType;
}

const DropMenu: React.FC<IProp> = ({ onEdit, onDel, data }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [modifyOpen, setModifyOpen] = useState(false);
  const dispatch = useAppDispatch();

  const editHandler = () => {
    setModifyOpen(true);
    onEdit();
  };
  const delHandler = () => {
    setConfirmOpen(true);
  };
  const deleteItem = () => {
    onDel();
  };
  const modify = (data: DataType) => {
    dispatch(modifyItem(data));
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
        open={confirmOpen}
        setOpen={(val) => {
          setConfirmOpen(val);
        }}
        setDelete={deleteItem}
      />
      <DetailModal
        open={modifyOpen}
        setOpen={(val) => {
          setModifyOpen(val);
        }}
        data={data}
        onOk={modify}
      />
    </>
  );
};

export default DropMenu;
