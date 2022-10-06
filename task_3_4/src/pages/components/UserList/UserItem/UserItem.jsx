import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './UserItem.module.scss';

export const UserItem = (props) => {
  const { id, name, username } = props.user;

  return (
    <li className={style.item}>
      <NavLink className={style.name} to={'/userpage/' + id}>
        {name}
      </NavLink>
      <span className={style.username}>{username}</span>
    </li>
  );
};
