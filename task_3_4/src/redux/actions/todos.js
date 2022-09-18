import { receiveTodos } from '../reducers/todoSlice';
import todosAPI from '../api/todosApi';
import { showLoader, hideLoader } from '../reducers/loaderSlice';

const getTodos = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const responce = await todosAPI.fetchTodos();
    dispatch(receiveTodos(responce.data));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(hideLoader());
  }
};

export default getTodos;
