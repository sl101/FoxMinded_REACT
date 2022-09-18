import { receivePosts } from '../reducers/postSlice';
import { showLoader, hideLoader } from '../reducers/loaderSlice';

import postsAPI from '../api/postsApi';

const getPosts = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const responce = await postsAPI.fetchPosts();
    dispatch(receivePosts(responce.data));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(hideLoader());
  }
};

export default getPosts;
