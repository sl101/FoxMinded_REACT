import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  user: [],
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
    }
  }
});

export const { receiveUsers, receiveUser } = userSlice.actions;

export default userSlice.reducer;
