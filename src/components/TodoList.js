import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const { id, name, completed, color } = todos;
  console.log(id);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id}></Todo>
      ))}
    </div>
  );
}
