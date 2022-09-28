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
    },

    completeTodo(state, action) {
      const { id, completed } = action.payload;
      state.todos = state.todos.map((u) => {
        if (u.id === id) {
          return { ...u, completed };
        }
        return u;
      });
    },

    changeTodo(state, action) {
      const { id, title } = action.payload;
      state.todos = state.todos.map((u) => {
        if (u.id === id) {
          return { ...u, title };
        }
        return u;
      });
    }
  }
});

export const { receiveTodos, completeTodo, changeTodo } = todoSlice.actions;

export default todoSlice.reducer;
