// Todo.js
import React from 'react';

const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed} />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
