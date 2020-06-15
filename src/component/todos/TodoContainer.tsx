import React, { useState, useContext } from 'react';
import Todo from './Todo';
import './Styles.css';
import { TodoType } from '../../interfaces/todosInterface';
import { TodosContext } from '../../context/todosContext';
import TodoForm from './TodoForm';

function TodoContainer(props: any) {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo: TodoType, index: Number) => {
          return <Todo key={todo.title} todo={todo} />;
        })
      ) : (
        <div className='no-todos'>No todos</div>
      )}
      <TodoForm></TodoForm>
    </div>
  );
}

export default TodoContainer;
