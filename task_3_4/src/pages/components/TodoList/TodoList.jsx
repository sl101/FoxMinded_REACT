import React from 'react';
<<<<<<<< HEAD:task_3_4/src/components/TodoList/TodoList.jsx
import { TodoItem } from '../TodoItem';
import { Preloader } from '../../shared/Preloader';
========
import { TodoItem } from './TodoItem';
import { Preloader } from '../../../components/Preloader';
>>>>>>>> 53a07870656b53aeead7344a02be3c563beb6583:task_3_4/src/pages/components/TodoList/TodoList.jsx

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
