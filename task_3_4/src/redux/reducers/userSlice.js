import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  user: [],
  albums: [],
  status: null,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    receiveUsers(state, action) {
      state.users = action.payload;
    },

    receiveUser(state, action) {
      state.user = action.payload;
    },

    receiveAlbums(state, action) {
      state.albums = action.payload;
    }
  }
});

export const { receiveUsers, receiveUser, receiveAlbums } = userSlice.actions;

export default userSlice.reducer;
