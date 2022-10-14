import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  userPosts: []
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
      state.userPosts.unshift({ body, title, userId, id });
    },
    receiveUserPosts(state, action) {
      state.userPosts = action.payload.reverse();
    }
  }
});

export const { receivePosts, inputPost, receiveUserPosts } = postSlice.actions;

export default postSlice.reducer;
