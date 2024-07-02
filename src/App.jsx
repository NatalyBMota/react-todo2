import './App.css';
import { useState } from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const App = () => {
  [newTodo, setNewTodo] = useState("");
  
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </>
  );
};

export default App;
