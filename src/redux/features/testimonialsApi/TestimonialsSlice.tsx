import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  testimonials: [],
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    addTestimonials: (state, action) => {
      const { testimonials } = action.payload;
      state.testimonials = testimonials;
    },
  },
});

export const { addTestimonials } = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
