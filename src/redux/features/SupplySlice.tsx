import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  supplies: [],
};

const supplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    addSupply: (state, action) => {
      state.supplies.push({ ...action.payload });
    },
    // removeSupply: (state, action: PayloadAction<string>) => {
    //   state.supplies = state.supplies.filter(
    //     (supply) => supply._id !== action.payload
    //   );
    // },
  },
});

export const { addSupply } = supplySlice.actions;

export default supplySlice.reducer;
