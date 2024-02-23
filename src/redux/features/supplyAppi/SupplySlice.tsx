import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  supplies: [],
};

const supplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    addSupply: (state, action) => {
      const { supplies } = action.payload;
      state.supplies = supplies;
    },
  },
});

export const { addSupply } = supplySlice.actions;

export default supplySlice.reducer;
