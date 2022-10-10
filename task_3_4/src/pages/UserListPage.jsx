import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/users';
import { UserList } from '../components/UserList';

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
