import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='inputWrapper'>
        <input className='input' placeholder='write your task...' />
        <button className='btn add'>Add</button>
      </div>
      <div className='todosWrapper'>
        <p className='text'></p>
        <button className='btn edit'>✎</button>
        <button className='btn delete'>🗑️</button>
      </div>
    </div>
  );
}

export default App;
