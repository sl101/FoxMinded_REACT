import { tabsAPI } from '../shared/tabsApi';
import { receiveAlbums } from '../redux/reducers/userSlice';
import { receiveUserPosts } from '../redux/reducers/postSlice';
import { receiveUserTodos } from '../redux/reducers/todoSlice';

export const getUserTabs = (data) => async (dispatch) => {
  const { id, tab } = data;

  const responseActions = {
    albums: receiveAlbums,
    posts: receiveUserPosts,
    todos: receiveUserTodos
  };
  const action = responseActions[tab];

  try {
    const responce = await tabsAPI.fetchTabs(`${/users/}${id}/${tab}`);
    dispatch(action(responce.data));
  } catch (error) {
    alert(error.message);
  }
};
