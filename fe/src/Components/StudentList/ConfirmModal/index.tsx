import { Modal } from "antd";
import React from "react";
import { WarningOutlined } from "@ant-design/icons";
import styles from "./style.module.css";

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
    <Modal
      title="确认删除"
      okText="确定"
      okType="danger"
      cancelText="取消"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className={styles.container}>
        <div className={styles.icon}>
          <WarningOutlined />
        </div>
        <div className={styles.text}>
          <p>你确定要删除吗？</p>
          <p>这个操作将永久删除这条记录，不可恢复。</p>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
