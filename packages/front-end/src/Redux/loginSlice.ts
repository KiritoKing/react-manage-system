/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface LoginState {
  status: boolean;
  user: string | undefined;
}

const initialState: LoginState = {
  status: false,
  user: undefined,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.status = true;
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.status = false;
      state.user = undefined;
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
export const selectLogin = (state: RootState) => state.login.status;
export const selectUser = (state: RootState) => state.login.user;

export default loginSlice.reducer;
