/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export interface DataType {
  avatar?: string;
  key: string;
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
  view: DataType[];
  ready: boolean;
}

const initialState: ListState = {
  value: [],
  view: [],
  ready: false,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<DataType[]>) => {
      state.value = action.payload;
      state.view = state.value;
      state.ready = true;
    },
    addItem: (state, action: PayloadAction<DataType>) => {
      state.value.push(action.payload);
      state.view = state.value;
      axios
        .post("/api/stu/add", action.payload)
        .then((res) => {
          const response = res.data;
          console.log(response.message);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    delItem: (state, action: PayloadAction<number>) => {
      const id = state.value[action.payload].key;
      state.value.splice(action.payload, 1);
      state.view = state.value;
      axios
        .post("/api/stu/del", { id })
        .then((res) => {
          console.log(res.data.message);
          if (res.data.code !== 200) {
            alert("操作失败");
            location.reload();
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    modifyItem: (state, action: PayloadAction<DataType>) => {
      const key = action.payload.key;
      const target = state.value.find((item) => item.key === key);

      if (target !== undefined) {
        state.value.splice(state.value.indexOf(target), 1, action.payload);
        state.view = state.value;
        axios
          .post("/api/stu/modify", { id: key, data: action.payload })
          .then((res) => {
            console.log(res.data.message);
            if (res.data.code !== 200) {
              alert("操作失败");
              location.reload();
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    setListView: (state, action: PayloadAction<DataType[]>) => {
      state.view = action.payload;
    },
    resetListView: (state) => {
      state.view = state.value;
    },
  },
});

export const {
  setList,
  addItem,
  delItem,
  modifyItem,
  setListView,
  resetListView,
} = listSlice.actions;
export const selectList = (state: RootState) => state.list.value;
export const selectListReady = (state: RootState) => state.list.ready;
export const selectListView = (state: RootState) => state.list.view;

export default listSlice.reducer;
