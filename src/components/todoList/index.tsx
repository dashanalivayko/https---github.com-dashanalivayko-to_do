import React from 'react';
import './index.css';
import { useAppSelector } from '../../store/hooks';
import { ITodo, selectTodos } from '../../store/todoSlice';
import { AddForm } from './addForm/addForm';
import { Todo } from './todo/todo';

const TodoList = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <div className="column-container">
      <AddForm />
      <div className='todosWrapper'>
        {todos.map((todo: ITodo) => <Todo {...todo} key={todo.id} />
        )}
      </div>
    </div>
  );
}

export { TodoList };
