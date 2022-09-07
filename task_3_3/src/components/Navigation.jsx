import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="container">
      <nav className="navigation">
        <ul className="list">
          <li className="item">
            <NavLink className="link" to="/postlist">
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
    </div>
  );
}

export default Navigation;
