import dataFetch from '../utils/axios';

const usersAPI = {
  fetchUsers(path) {
    return dataFetch.get(path);
  }
};

export default usersAPI;
