import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../constants/routes';
import style from './UserItem.module.scss';

export const UserItem = ({ user: { id, name, username } }) => (
  <li className={style.item}>
    <NavLink className={style.name} to={AppRoutes.UserItem + id}>
      {name}
    </NavLink>
    <span className={style.username}>{username}</span>
  </li>
);
