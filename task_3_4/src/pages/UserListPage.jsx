import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUsers from '../redux/actions/users';

import UserList from './components/userPage/UserList';

const UserListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.loader);

  return (
    <section>
      <div className="container">
        <h2 className="title">Welcome to UserList!</h2>
        <UserList isLoading={isLoading} users={users} />
      </div>
    </section>
  );
};

export default UserListPage;
