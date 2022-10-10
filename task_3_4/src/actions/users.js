import { receiveUsers, receiveUser } from '../redux/reducers/userSlice';
import usersAPI from '../shared/usersApi';
import { showLoader, hideLoader } from '../redux/reducers/loaderSlice';

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
