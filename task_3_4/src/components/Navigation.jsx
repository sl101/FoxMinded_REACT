import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav className="navigation">
    <ul className="list">
      <li className="item">
        <NavLink className="link" to="/">
          PostList
        </NavLink>
      </li>

      <li className="item">
        <NavLink className="link" to="/todolist">
          TodoList
        </NavLink>
      </li>

      <li className="item">
        <NavLink className="link" to="/userlist">
          UserList
        </NavLink>
      </li>
    </ul>
  </nav>
);
