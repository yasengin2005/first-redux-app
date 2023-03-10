import { createSlice, configureStore } from "@reduxjs/toolkit";
//createReducer can also be imported instead createSlice but createSlice is more powerful and convenient

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseBy10(state, action) {
      state.counter = state.counter + action.payload; //same with "state.counter += action.payload"
    },
    reset(state) {
      state.counter = 0;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions

export default store;
