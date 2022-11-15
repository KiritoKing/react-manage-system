/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface DataType {
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
  },
});

export const { setList } = listSlice.actions;
export const selectList = (state: RootState) => state.list.value;
export const selectListReady = (state: RootState) => state.list.ready;

export default listSlice.reducer;
