import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from '../TodoItem';
import { Preloader } from '../../shared/Preloader';
import { getSelect, changeTodoAPI } from '../../actions/todos';

export const TodoList = ({ todos }) => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.loader);

  const toggleSelect = (selectTarget) => {
    dispatch(getSelect(selectTarget));
  };

  const handleChange = (data) => {
    dispatch(changeTodoAPI(data));
  };

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
