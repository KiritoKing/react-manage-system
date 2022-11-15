import { Modal } from "antd";
import React from "react";

interface IProp {
  open: boolean;
  setOpen: (val: boolean) => void;
  setDelete: () => void;
}

const ConfirmModal: React.FC<IProp> = ({ open, setOpen, setDelete }) => {
  const handleOk = () => {
    setOpen(false);
    setDelete();
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal title="确认删除" open={open} onOk={handleOk} onCancel={handleCancel}>
      <p>你确定要删除吗？</p>
      <p>这个操作将永久删除这条记录，不可恢复。</p>
    </Modal>
  );
};

export default ConfirmModal;
