import React, { createContext, useState } from 'react';
import { TodoListType, TodoType } from '../interfaces/todosInterface';

let TodoList: TodoListType = [];

export const TodosContext = createContext({
  todos: TodoList,
  addTodos: (todo: TodoType) => {},
});

export function TodosContextProvider(props: any) {
  const [todos, setTodo] = useState(TodoList);

  return (
    <TodosContext.Provider
      value={{ todos, addTodos: (data: any) => setTodo([data, ...todos]) }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
