import dataFetch from '../utils/axios';

export const usersAPI = {
  fetchUsers(path) {
    return dataFetch.get(path);
  }
};
