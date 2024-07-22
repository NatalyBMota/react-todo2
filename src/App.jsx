import './App.css';
import { useState, useEffect } from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const useSemiPersistentState = () => {

  let [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);

  useEffect(() => {
    console.log("useEffect ran");
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList]);

  return [todoList, setTodoList];
};

const App = () => {
  console.log("App mounted");
  //let [todoList, setTodoList] = useState([]);

  const [todoList , setTodoList] = useSemiPersistentState();

  let addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
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
