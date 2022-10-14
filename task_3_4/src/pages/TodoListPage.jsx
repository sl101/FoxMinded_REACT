import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../actions/todos';
import { TodoList } from '../components/TodoList';

export const TodoListPage = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    if (!todos.length) {
      dispatch(getTodos());
    }
  }, []);

  return (
    <section className="section">
      <h2 className="title">Welcome to TodoList!</h2>
      <TodoList todos={todos} />
    </section>
  );
};
