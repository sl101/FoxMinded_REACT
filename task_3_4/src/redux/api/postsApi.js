import dataFetch from '../../utils/axios';

const postsAPI = {
  fetchPosts() {
    return dataFetch.get('/posts');
  }
};

export default postsAPI;
