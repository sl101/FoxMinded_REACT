import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './UserItem.module.scss';

const UserItem = (props) => {
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

export default UserItem;
