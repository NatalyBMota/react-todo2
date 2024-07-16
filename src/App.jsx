import './App.css';
import { useState } from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const App = () => {
  let [todoList, setTodoList] = useState([]);

  let addTodo = (newTodo) => {
    setTodoList(...todoList, newTodo);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <p></p>
      <TodoList todoList={todoList} />
    </>
  );
};

export default App;
