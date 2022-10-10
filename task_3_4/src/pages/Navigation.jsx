import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../constants/routes';

export const Navigation = () => (
  <nav className="navigation">
    <ul className="list">
      <li className="item">
        <NavLink className="link" to={AppRoutes.PostsList}>
          PostList
        </NavLink>
      </li>

      <li className="item">
        <NavLink className="link" to={AppRoutes.TodoList}>
          TodoList
        </NavLink>
      </li>

      <li className="item">
        <NavLink className="link" to={AppRoutes.UserList}>
          UserList
        </NavLink>
      </li>
    </ul>
  </nav>
);
