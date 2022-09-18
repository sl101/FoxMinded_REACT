import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    receiveTodos(state, action) {
      state.todos = action.payload;
    }
  }
});

export const { receiveTodos } = todoSlice.actions;

export default todoSlice.reducer;
