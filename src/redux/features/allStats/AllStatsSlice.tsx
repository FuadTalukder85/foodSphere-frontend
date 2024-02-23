import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allStats: [],
};

const allStatsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    addAllStats: (state, action) => {
      const { allStats } = action.payload;
      state.allStats = allStats;
    },
  },
});

export const { addAllStats } = allStatsSlice.actions;

export default allStatsSlice.reducer;
