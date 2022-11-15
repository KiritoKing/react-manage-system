import { Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { faker } from "@faker-js/faker";
import { DataType, selectList } from "Redux/listSlice";
import { useAppSelector } from "Redux/store";

interface IProp {
  open: boolean;
  setOpen: (val: boolean) => void;
  add: (data: DataType) => void;
}

const AddModal: React.FC<IProp> = ({ open, setOpen, add }) => {
  const listLen = useAppSelector(selectList).length;
  const [avatar, setAvatar] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [faculty, setFaculty] = useState("计算机科学与技术");
  const [grade, setGrade] = useState("2020");
  const [gender, setGender] = useState("男");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");

  useEffect(() => {
    setAvatar(faker.image.avatar());
    setId(faker.datatype.uuid());
    setName(faker.internet.userName());
    setTel(faker.phone.number("1##########"));
    setMail(faker.internet.email());
  }, [open]);

  const handleOk = () => {
    setOpen(false);
    const item: DataType = {
      avatar,
      key: listLen,
      id,
      name,
      faculty,
      grade,
      gender,
      tel,
      mail,
    };
    console.log(item);
    add(item);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      okText="确定"
      okType="primary"
      cancelText="取消"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={avatar} />
        </div>
        <div className={styles.input}>
          <Input
            placeholder="UUID"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div className={styles.input}>
          <Input
            placeholder="姓名"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.input}>
          <Input
            placeholder="专业"
            value={faculty}
            onChange={(e) => {
              setFaculty(e.target.value);
            }}
          />
        </div>
        <div className={styles.input}>
          <Input
            placeholder="年级"
            value={grade}
            addonAfter="级"
            onChange={(e) => {
              setGrade(e.target.value);
            }}
          />
        </div>
        <div className={styles.input}>
          <Select
            defaultValue="lucy"
            className={styles.select}
            onChange={(val) => {
              setGender(val);
            }}
            value={gender}
            options={[
              {
                value: "男",
                label: "男",
              },
              {
                value: "女",
                label: "女",
              },
            ]}
          />
        </div>
        <div className={styles.input}>
          <Input
            placeholder="电话"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </div>
        <div className={styles.input}>
          <Input
            placeholder="邮箱"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddModal;
