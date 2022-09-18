import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTodos from '../redux/actions/todos';

import TodoList from './components/todoPage/TodoList';

const TodoListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const { todos } = useSelector((state) => state.todo);
  const { isLoading } = useSelector((state) => state.loader);

  return (
    <section>
      <div className="container">
        <h2 className="title">Welcome to TodoList!</h2>
        <TodoList isLoading={isLoading} todos={todos} />
      </div>
    </section>
  );
};

export default TodoListPage;
