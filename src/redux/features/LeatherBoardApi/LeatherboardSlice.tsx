import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  leatherboard: [],
};

const leatherboardSlice = createSlice({
  name: "leatherboard",
  initialState,
  reducers: {
    addLeatherboard: (state, action) => {
      const { leatherboard } = action.payload;
      state.leatherboard = leatherboard;
    },
  },
});

export const { addLeatherboard } = leatherboardSlice.actions;

export default leatherboardSlice.reducer;
