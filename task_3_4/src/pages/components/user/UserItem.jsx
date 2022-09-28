import React from 'react';
import style from './UserItem.module.scss';

const UserItem = (props) => {
  const { name, username } = props.user;

  return (
    <li className={style.item}>
      <span className={style.name}>{name}</span>
      <span className={style.username}>{username}</span>
    </li>
  );
};

export default UserItem;
