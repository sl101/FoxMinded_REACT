import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, getSelect, changeTodoAPI } from '../actions/todos';

<<<<<<< HEAD
import { TodoList } from '../components/TodoList';
=======
import { TodoList } from './components/TodoList';
>>>>>>> 53a07870656b53aeead7344a02be3c563beb6583

export const TodoListPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.loader);
  const { todos } = useSelector((state) => state.todo);

  const toggleSelect = (selectTarget) => {
    dispatch(getSelect(selectTarget));
  };

  const handleChange = (data) => {
    dispatch(changeTodoAPI(data));
  };

  useEffect(() => {
    if (!todos.length) {
      dispatch(getTodos());
    }
  }, []);

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
