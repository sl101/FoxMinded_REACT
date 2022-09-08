import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
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
}

export default Navigation;
