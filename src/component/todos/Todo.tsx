import React, { useState } from 'react';

function Todo(props: any) {
  const [todo] = useState(props.todo);
  return <div>{todo.title}</div>;
}

export default Todo;
