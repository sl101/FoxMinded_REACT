import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/App.css';
import './scss/reset.css';

import PostsList from './components/PostsList';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/postlist" element={<PostsList />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
