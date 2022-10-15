import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from './constants/routes';
import { Navigation } from './pages/Navigation';
import { PostListPage } from './pages/PostListPage';
import { TodoListPage } from './pages/TodoListPage';
import { UserListPage } from './pages/UserListPage';
import { UserPage } from './pages/UserPage';
import './styles/App.scss';
import './styles/reset.scss';

export function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <div className="container">
          <Navigation />
        </div>
      </header>
      <main className="appContain">
        <div className="container">
          <Routes>
            <Route path={AppRoutes.Home} element={<PostListPage />} />
            <Route path={AppRoutes.TodoList} element={<TodoListPage />} />
            <Route path={AppRoutes.UsersList} element={<UserListPage />} />
            <Route path={AppRoutes.UserPage} element={<UserPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
