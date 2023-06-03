import './App.scss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Todo = ({
  todo, index, completeTodo, removeTodo,
}) => (
  <div className="todo">
    <span className="todo-text" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {todo.text}
    </span>

    <div className="action-button">
      <button type="button" className="complete-btn" onClick={() => completeTodo(index)}>Complete</button>
      <button type="button" className="remove-btn" onClick={() => removeTodo(index)}>x</button>
    </div>
  </div>

);

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add todo..." onChange={(e) => setValue(e.target.value)} />
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.string.isRequired,
};

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React' },
    { text: 'Meet friend for lunch' },
    { text: 'Build really cool todo app' },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={todo.text}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
