import React from 'react';
import './App.css';
import { TodoList } from './components/todoList';
import { Diagram } from './components/diagram/diagram';
import { getFromLocalStorage } from './helpers/helpers';

function App() {
  console.log(getFromLocalStorage())
  return (
    <div className="App">
      <TodoList />
      <Diagram />
    </div>
  );
}

export default App;
