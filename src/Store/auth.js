import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { IsAuthenticated: false },
  reducers: {
    login(state) {
      state.IsAuthenticated = true;
    },
    logout(state) {
      state.IsAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
