import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/App.scss';
import './scss/reset.scss';

import Navigation from './components/Navigation';
import PostsList from './components/pages/PostsList';
import TodoList from './components/pages/TodoList';
import UserList from './components/pages/UserList';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <div className="container">
          <Navigation />
        </div>
      </header>
      <main className="appContain">
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
