import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/App.scss';
import './styles/reset.scss';

<<<<<<< HEAD
import { AppRoutes } from './constants/routes';

import { Navigation } from './pages/Navigation';
=======
import { AppRoutes } from './redux/constants/routes';

import { Navigation } from './components/Navigation';
>>>>>>> 53a07870656b53aeead7344a02be3c563beb6583
import { PostListPage } from './pages/PostListPage';
import { TodoListPage } from './pages/TodoListPage';
import { UserListPage } from './pages/UserListPage';
import { UserPage } from './pages/UserPage';

export function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <div className="container">
          <Navigation />
        </div>
      </header>
      <main className="appContain">
        <Routes>
          <Route path={AppRoutes.PostsList} element={<PostListPage />} />
          <Route path={AppRoutes.TodoList} element={<TodoListPage />} />
          <Route path={AppRoutes.UserList} element={<UserListPage />} />
          <Route path={AppRoutes.UserPage} element={<UserPage />} />
        </Routes>
      </main>
    </div>
  );
}
