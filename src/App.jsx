import './App.css';
import { useState, useEffect} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const useSemiPersistentState = () => {
  // Previously using short-circuit evaluation
  // let [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  // Using nullish coalescing operator instead.
  // Both work, but I just learned about the latter., so
  // I am using it.
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) ?? []);

  useEffect(() => {
    console.log("useEffect ran");
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList]);

  return [todoList, setTodoList];
};

const App = () => {
  console.log("App mounted");

  const [todoList , setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
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
