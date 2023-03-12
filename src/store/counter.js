import { createSlice } from "@reduxjs/toolkit";
//createReducer can also be imported instead createSlice but createSlice is more powerful and convenient

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;