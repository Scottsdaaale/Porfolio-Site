import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [], // Initial state for blog posts
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    // Other actions like adding, updating, deleting posts, etc.
  },
});

export const { setPosts } = blogSlice.actions;
export default blogSlice.reducer;