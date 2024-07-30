import './App.css';
import { useState, useEffect} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) ?? []);

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList]);

  return [todoList, setTodoList];
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    console.log("Todo list inside of addTodo", todoList);
  };

  console.log("Todo list outside of addTodo", todoList);
  const removeTodo = (id) => {
  // //   setTodoList();
    // for (let i=0; i<todoList.length; i++) {
    //     console.log(todoList[i]);
    // }   
  };

  removeTodo(30);

  console.log("todoList: ", todoList);
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
};

export default App;
