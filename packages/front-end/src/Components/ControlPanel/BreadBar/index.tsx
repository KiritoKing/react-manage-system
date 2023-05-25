import React from "react";
import { Breadcrumb } from "antd";
import { useAppSelector } from "Redux/store";
import { selectHistory } from "Redux/historySlice";
import { Link, useLocation } from "react-router-dom";

const BreadBar = () => {
  const history = useAppSelector(selectHistory);
  const loc = useLocation();
  return (
    <Breadcrumb>
      {history.map((value, index) => (
        <Breadcrumb.Item key={index}>
          {value.path === "/" ||
          value.path === loc.pathname ||
          value.path === "/home/student" ? (
            value.title
          ) : (
            <Link to={value.path}>{value.title}</Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadBar;
