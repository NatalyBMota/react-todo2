import './App.css';
import { useState, useEffect, Fragment } from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const useSemiPersistentState = () => {
  // Previously using short-circuit evaluation
  // let [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  // Using nullish coalescing operator instead.
  // Both work, but I just learned about the latter., so
  // I am using it.
  let [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) ?? []);

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
    <Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <p></p>
      <TodoList todoList={todoList} />
    </Fragment>
  );
};

export default App;
