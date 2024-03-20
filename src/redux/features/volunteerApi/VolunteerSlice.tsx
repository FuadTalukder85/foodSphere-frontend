import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  volunteers: [],
};

const volunteerSlice = createSlice({
  name: "volunteer",
  initialState,
  reducers: {
    addVolunteer: (state, action) => {
      const { volunteers } = action.payload;
      state.volunteers = volunteers;
    },
  },
});

export const { addVolunteer } = volunteerSlice.actions;

export default volunteerSlice.reducer;
