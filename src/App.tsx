import React from 'react';
import './App.css';
import { TodoList } from './components/todoList';
import { Diagram } from './components/diagram/diagram';

function App() {

  return (
    <div className="App">
      <TodoList />
      <Diagram />
    </div>
  );
}

export default App;
