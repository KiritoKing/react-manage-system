import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, DataType } from "Redux/listSlice";
import AddButton from "./AddButton";
import DetailModal from "../DetailModal";
import BreadBar from "./BreadBar";
import SearchBar from "./SearchBar";
import styles from "./style.module.css";

const ControlPanel = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setModalOpen(true);
  };
  const addHandler = (data: DataType) => {
    dispatch(addItem(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.bread}>
        <BreadBar />
      </div>
      <div className={styles.buttons}>
        <AddButton onClick={clickHandler} />
        <DetailModal
          open={modalOpen}
          setOpen={setModalOpen}
          onOk={addHandler}
        />
        <SearchBar />
      </div>
    </div>
  );
};

export default ControlPanel;
