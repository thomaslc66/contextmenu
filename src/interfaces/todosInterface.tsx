export interface TodoType {
  title: string;
}

export interface TodoListType extends Array<TodoType> {}

export interface TodoContextType {
  todos: TodoListType;
  addTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
}
