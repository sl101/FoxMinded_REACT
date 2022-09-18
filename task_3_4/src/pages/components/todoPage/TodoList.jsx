import React from 'react';
import TodoItem from './TodoItem';

import Preloader from '../../../components/Preloader';

const TodoList = ({ isLoading, todos }) => {
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
