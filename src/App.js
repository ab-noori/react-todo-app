import './App.scss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Todo = ({ todo, index }) => (
  <div className="todo">
    {todo.text}
  </div>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
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

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
