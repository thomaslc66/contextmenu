import React, { useState, useContext } from 'react';
import { TodosContext } from '../../context/todosContext';

export default function TodoForm(props: any) {
  const { todos, addTodos } = useContext(TodosContext);
  const [myTodo, setMyTodo] = useState('');
  const [formError, setformError] = useState('');

  const handleInputchange = (event: any) => {
    event.persist();
    setMyTodo(event.target.value);
  };

  const add = (event: any) => {
    if (event) {
      event.preventDefault();
    }

    if (myTodo) {
      let todoExist = false;
      todos.forEach((val) => {
        if (val.title === myTodo) {
          todoExist = true;
          return;
        }
      });

      if (todoExist) {
        setformError('This Todo already exist');
      } else {
        setformError('');
        addTodos({ title: myTodo });
        setMyTodo('');
      }
    } else {
      setformError('Please enter a todo');
    }
  };
  return (
    <>
      <form onSubmit={add}>
        <input
          type='text'
          id='todoTitle'
          data-testid='input-form'
          onChange={handleInputchange}
          value={myTodo}
        />
        <button type='submit' data-testid='add-button'>
          Add new Todo
        </button>
      </form>
      <div className='error'>{formError}</div>
    </>
  );
}
