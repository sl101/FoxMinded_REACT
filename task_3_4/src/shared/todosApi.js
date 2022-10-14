import dataFetch from '../utils/axios';

export const todosAPI = {
  fetchTodos(value) {
    return dataFetch.get(value);
  },
  patchRequest(path, value) {
    return dataFetch.patch(path, value);
  }
};
