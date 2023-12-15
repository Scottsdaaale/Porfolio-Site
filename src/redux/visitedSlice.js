import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasVisitedRoot: false,
};

const visitedSlice = createSlice({
  name: "visited",
  initialState,
  reducers: {
    setVisitedRoot(state, action) {
      state.hasVisitedRoot = action.payload;
    },
  },
});

export const { setVisitedRoot } = visitedSlice.actions;
export default visitedSlice.reducer;