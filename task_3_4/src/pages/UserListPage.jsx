import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { getUsers } from '../actions/users';
import { UserList } from '../components/UserList';
=======
import { getUsers } from '../redux/actions/users';
import { UserList } from './components/UserList';
>>>>>>> 53a07870656b53aeead7344a02be3c563beb6583

export const UserListPage = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <section>
      <div className="container">
        <h2 className="title">Welcome to UserList!</h2>
        <UserList isLoading={isLoading} users={users} />
      </div>
    </section>
  );
};
