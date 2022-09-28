import React from 'react';
import UserItem from './UserItem';
import Preloader from '../../../components/Preloader';

const UserList = ({ isLoading, users }) => {
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
