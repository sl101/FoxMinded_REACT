import dataFetch from '../../utils/axios';

const postsAPI = {
  fetchPosts() {
    return dataFetch.get('/posts');
  },
  postRequest(path, value) {
    return dataFetch.post(path, value);
  }
};

export default postsAPI;
