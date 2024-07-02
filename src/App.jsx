import './App.css';
import { useState } from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const App = () => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
    </>
  );
};

export default App;
