import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  status: null,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    receiveUsers(state, action) {
      state.users = action.payload;
    }
  }
});

export const { receiveUsers } = userSlice.actions;

export default userSlice.reducer;
