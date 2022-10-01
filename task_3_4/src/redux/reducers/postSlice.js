import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
};

const postSlice = createSlice({
  name: 'post',
  initialState,

  reducers: {
    receivePosts(state, action) {
      state.posts = action.payload.reverse();
    },
    inputPost(state, action) {
      const { body, title, userId } = action.payload;
      const id = state.posts.length + 1;
      state.posts.unshift({ body, title, userId, id });
    }
  }
});

export const { receivePosts, inputPost } = postSlice.actions;

export default postSlice.reducer;
