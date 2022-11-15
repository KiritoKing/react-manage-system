/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export interface DataType {
  avatar?: string;
  key: number;
  id: string;
  name: string;
  faculty: string;
  grade: string;
  gender: string;
  tel: string;
  mail: string;
}

export interface ListState {
  value: DataType[];
  ready: boolean;
}

const initialState: ListState = {
  value: [],
  ready: false,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<DataType[]>) => {
      state.value = action.payload;
      state.ready = true;
    },
    addItem: (state, action: PayloadAction<DataType>) => {
      state.value.push(action.payload);
      axios
        .post("/api/stu/add", action.payload)
        .then((res) => {
          const response = res.data;
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    delItem: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { setList, addItem, delItem } = listSlice.actions;
export const selectList = (state: RootState) => state.list.value;
export const selectListReady = (state: RootState) => state.list.ready;

export default listSlice.reducer;
