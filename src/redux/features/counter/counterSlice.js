import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { value_one, value_two } = action.payload;
      state.total = value_one + value_two;
    },
    decrement: (state, action) => {
      const { value_one, value_two } = action.payload;
      state.total = value_one - value_two;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
