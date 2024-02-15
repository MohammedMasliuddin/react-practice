// TodoList.js
import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
