import React from 'react';
import './App.scss';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <ClassCounter />
        <FunctionalCounter />
      </div>
    </div>
  );
}

export default App;
