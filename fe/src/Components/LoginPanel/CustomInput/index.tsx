import React, { FC } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";
import styles from "./style.module.css";

interface IProp {
  isPwd?: boolean;
  placeholder?: string;
  size?: SizeType;
  onChange?: (value: string) => void;
  onEnter: () => void;
}

const CustomInput: FC<IProp> = ({
  isPwd,
  placeholder,
  size,
  onChange,
  onEnter,
}) => {
  const changeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange !== undefined) onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {isPwd === true ? (
        <Input.Password
          placeholder={placeholder}
          size={size}
          onChange={changeHanlder}
          onPressEnter={onEnter}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      ) : (
        <Input
          placeholder={placeholder}
          size={size}
          onChange={changeHanlder}
          onPressEnter={onEnter}
        />
      )}
    </div>
  );
};

export default CustomInput;
