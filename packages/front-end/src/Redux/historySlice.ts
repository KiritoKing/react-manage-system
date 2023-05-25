/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface HistoryItem {
  title: string;
  path: string;
}

export interface HistoryState {
  stack: HistoryItem[];
}

const initialState: HistoryState = {
  stack: [
    { title: "主页", path: "/" },
    { title: "学生列表", path: "/home" },
  ],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    pushStack: (state, action: PayloadAction<HistoryItem>) => {
      state.stack.push(action.payload);
    },
    popStack: (state) => {
      if (state.stack.length <= 1) return;
      state.stack.pop();
    },
    changeTop: (state, action: PayloadAction<HistoryItem>) => {
      state.stack[state.stack.length - 1] = action.payload;
    },
    clearStack: (state) => {
      state.stack = [];
    },
    setStack: (state, action: PayloadAction<HistoryItem[]>) => {
      state.stack = action.payload;
    },
  },
});

export const { pushStack, popStack, changeTop, clearStack, setStack } =
  historySlice.actions;
export const selectHistory = (state: RootState) => state.history.stack;
export const selectHistorykTop = (state: RootState) =>
  state.history.stack[state.history.stack.length - 1];

export default historySlice.reducer;
