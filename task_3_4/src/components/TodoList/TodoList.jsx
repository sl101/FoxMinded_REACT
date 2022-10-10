import React from 'react';
import { TodoItem } from '../TodoItem';
import { Preloader } from '../../shared/Preloader';

export const TodoList = ({ isLoading, todos, toggleSelect, handleChange }) => {
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
};
