import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  userTodos: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    receiveTodos(state, action) {
      state.todos = action.payload;
    },

    receiveUserTodos(state, action) {
      state.userTodos = action.payload;
    },

    completeTodo(state, action) {
      const { id, completed } = action.payload;
      state.todos = state.todos.map((u) => {
        if (u.id === id) {
          return { ...u, completed };
        }
        return u;
      });
      state.userTodos = state.userTodos.map((u) => {
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
      state.userTodos = state.userTodos.map((u) => {
        if (u.id === id) {
          return { ...u, title };
        }
        return u;
      });
    }
  }
});

export const { receiveTodos, completeTodo, changeTodo, receiveUserTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
