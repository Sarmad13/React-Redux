import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: false },
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state, action) {
      state.showCounter = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
