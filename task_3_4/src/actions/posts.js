import { receivePosts, inputPost } from '../redux/reducers/postSlice';
import { showLoader, hideLoader } from '../redux/reducers/loaderSlice';

import postsAPI from '../shared/postsApi';

export const getPosts = () => async (dispatch) => {
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

export const inputPostAPI = (data) => async (dispatch) => {
  const { title, body, userId } = data;
  const userIdValue = Number(userId);

  const postData = {
    title,
    body,
    userId: userIdValue
  };

  try {
    const responce = await postsAPI.postRequest('/posts', postData);
    dispatch(inputPost(responce.data));
  } catch (error) {
    alert(error.message);
  }
};
