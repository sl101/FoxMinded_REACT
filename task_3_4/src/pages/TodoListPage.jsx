import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, getSelect, changeTodoAPI } from '../redux/actions/todos';

import TodoList from './components/todo/TodoList';

const TodoListPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.loader);
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    if (!todos.length) {
      dispatch(getTodos());
    }
  }, [dispatch]);

  const toggleSelect = (selectTarget) => {
    dispatch(getSelect(selectTarget));
  };

  const handleChange = (data) => {
    dispatch(changeTodoAPI(data));
  };

  return (
    <section>
      <div className="container">
        <h2 className="title">Welcome to TodoList!</h2>
        <TodoList
          isLoading={isLoading}
          todos={todos}
          toggleSelect={toggleSelect}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

export default TodoListPage;
