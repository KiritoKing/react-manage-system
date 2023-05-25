import { Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { faker } from "@faker-js/faker";
import { DataType } from "Redux/listSlice";

interface IProp {
  open: boolean;
  setOpen: (val: boolean) => void;
  onOk?: (data: DataType) => void;
  data?: DataType;
}

const DetailModal: React.FC<IProp> = ({ open, setOpen, onOk, data }) => {
  const [avatar, setAvatar] = useState("");
  const [key, setKey] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [faculty, setFaculty] = useState("计算机科学与技术");
  const [grade, setGrade] = useState("2020");
  const [gender, setGender] = useState("男");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");

  useEffect(() => {
    if (data === undefined) {
      const id = faker.datatype.uuid();
      setAvatar(faker.image.avatar());
      setId(id);
      setKey(id);
      setName(faker.internet.userName());
      setTel(faker.phone.number("1##########"));
      setMail(faker.internet.email());
    } else {
      const { id, name, faculty, grade, gender, tel, mail, key, avatar } = data;
      if (avatar !== undefined) setAvatar(avatar);
      setId(id);
      setName(name);
      setFaculty(faculty);
      setGender(gender);
      setGrade(grade);
      setTel(tel);
      setMail(mail);
      setKey(key);
    }
  }, [open]);

  const handleOk = () => {
    setOpen(false);
    if (onOk === undefined) return;
    const item: DataType = {
      avatar,
      key,
      id,
      name,
      faculty,
      grade,
      gender,
      tel,
      mail,
    };
    console.log("submit", item);
    onOk(item);
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

export default DetailModal;
