import {
  receiveTodos,
  completeTodo,
  changeTodo
} from '../redux/reducers/todoSlice';
import todosAPI from '../shared/todosApi';
import { showLoader, hideLoader } from '../redux/reducers/loaderSlice';

export const getTodos = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const response = await todosAPI.fetchTodos('/todos');
    dispatch(receiveTodos(response.data));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(hideLoader());
  }
};

export const getSelect = (selectedTarget) => async (dispatch) => {
  const { id, completed } = selectedTarget;

  const isCompleted = {
    completed: !completed
  };
  try {
    const responce = await todosAPI.patchRequest(`todos/${id}`, isCompleted);
    dispatch(completeTodo(responce.data));
  } catch (error) {
    alert(error.message);
  }
};

export const changeTodoAPI = (targetElement) => async (dispatch) => {
  const { id, inputTitle } = targetElement;

  const dataTitle = {
    title: inputTitle
  };

  try {
    const responce = await todosAPI.patchRequest(`todos/${id}`, dataTitle);
    dispatch(changeTodo(responce.data));
  } catch (error) {
    alert(error.message);
  }
};
