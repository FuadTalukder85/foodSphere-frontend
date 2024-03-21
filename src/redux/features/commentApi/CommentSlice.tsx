import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  commenters: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { commenters } = action.payload;
      state.commenters = commenters;
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
