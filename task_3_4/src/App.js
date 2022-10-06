import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/App.scss';
import './styles/reset.scss';

import { Navigation } from './components/Navigation';
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
          <Route path="/" element={<PostListPage />} />
          <Route path="/todolist" element={<TodoListPage />} />
          <Route path="/userlist" element={<UserListPage />} />
          <Route path="/userpage/:id" element={<UserPage />} />
        </Routes>
      </main>
    </div>
  );
}
