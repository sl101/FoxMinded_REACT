import { receiveUsers, receiveUser } from '../reducers/userSlice';
import usersAPI from '../api/usersApi';
import { showLoader, hideLoader } from '../reducers/loaderSlice';

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const responce = await usersAPI.fetchUsers('/users');
    dispatch(receiveUsers(responce.data));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(hideLoader());
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch(showLoader());
    const responce = await usersAPI.fetchUsers('/users/' + id);
    dispatch(receiveUser(responce.data));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(hideLoader());
  }
};
