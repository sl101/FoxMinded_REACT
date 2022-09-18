import { receiveUsers } from '../reducers/userSlice';
import usersAPI from '../api/usersApi';
import { showLoader, hideLoader } from '../reducers/loaderSlice';

const getUsers = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const responce = await usersAPI.fetchUsers();
    dispatch(receiveUsers(responce.data));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(hideLoader());
  }
};

export default getUsers;
