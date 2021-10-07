import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

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

// const counterReducer = (state = { counter: 0, showCounter: false }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.payload,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: action.payload,
//     };
//   }
//   return state;
// };
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
