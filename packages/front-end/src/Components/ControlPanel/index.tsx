import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, DataType, resetListView } from "Redux/listSlice";
import AddButton from "./AddButton";
import DetailModal from "../DetailModal";
import BreadBar from "./BreadBar";
import SearchBar from "./SearchBar";
import styles from "./style.module.css";
import ResetButton from "./ResetButton";

const ControlPanel = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setModalOpen(true);
  };
  const addHandler = (data: DataType) => {
    dispatch(addItem(data));
  };

  const resetHandler = () => {
    dispatch(resetListView());
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
        <ResetButton onClick={resetHandler} />
      </div>
    </div>
  );
};

export default ControlPanel;
