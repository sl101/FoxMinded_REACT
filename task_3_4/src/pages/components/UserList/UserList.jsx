import React from 'react';
<<<<<<<< HEAD:task_3_4/src/components/UserList/UserList.jsx
import { UserItem } from '../UserItem';
import { Preloader } from '../../shared/Preloader';
========
import { UserItem } from './UserItem';
import { Preloader } from '../../../components/Preloader';
>>>>>>>> 53a07870656b53aeead7344a02be3c563beb6583:task_3_4/src/pages/components/UserList/UserList.jsx

export const UserList = ({ isLoading, users }) => {
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
