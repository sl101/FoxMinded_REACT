import dataFetch from '../utils/axios';

const todosAPI = {
  fetchTodos(value) {
    return dataFetch.get(value);
  },
  patchRequest(path, value) {
    return dataFetch.patch(path, value);
  }
};

export default todosAPI;
