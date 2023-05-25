/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Image, List, Tag } from "antd";
import BreadBar from "Components/ControlPanel/BreadBar";
import useStack from "Hooks/useStack";
import Error from "Pages/Error";
import React from "react";
import { useParams } from "react-router-dom";
import { selectList } from "Redux/listSlice";
import { useAppSelector } from "Redux/store";
import styles from "./style.module.css";

const Detail = () => {
  const { key } = useParams();
  const list = useAppSelector(selectList);
  const res = list.find((item) => item.key === key);
  const str = localStorage.getItem("temp");
  const data =
    res === undefined ? (str === null ? undefined : JSON.parse(str)) : res;
  if (data === undefined) {
    return <Error />;
  }
  localStorage.setItem("temp", JSON.stringify(data));
  useStack();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BreadBar />
      </div>
      <div className={styles.view}>
        <div className={styles.avatar}>
          <Image className={styles.img} src={data.avatar} />
          <h1 className={styles.name}>{data.name}</h1>
        </div>
        <div className={styles.list}>
          <List bordered>
            <List.Item key="1">{`ID：${data.id}`}</List.Item>
            <List.Item key="2">{`姓名：${data.name}`}</List.Item>
            <List.Item key="3">{`专业：${data.faculty}`}</List.Item>
            <List.Item key="4">{`年级：${data.grade}`}</List.Item>
            <List.Item key="5">
              性别：
              {
                <Tag color={data.gender === "男" ? "blue" : "pink"}>
                  {data.gender}
                </Tag>
              }
            </List.Item>
            <List.Item key="6">{`电话：${data.tel}`}</List.Item>
            <List.Item key="7">{`邮件：${data.mail}`}</List.Item>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Detail;
