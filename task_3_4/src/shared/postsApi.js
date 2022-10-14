import dataFetch from '../utils/axios';

export const postsAPI = {
  fetchPosts(path) {
    return dataFetch.get(path);
  },
  postRequest(path, value) {
    return dataFetch.post(path, value);
  }
};
