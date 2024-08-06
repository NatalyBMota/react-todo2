import './App.css';
import { useState, useEffect} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

// Might have completed all of the requirements for the assignment
// for lesson 1.7, but need to double-check to see if everything is
// working as it should.

const App = () => {

  // const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) ?? []);
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let myNewPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let existingTodo = JSON.parse(localStorage.getItem('savedTodoList'));
        const object = {
          data: {
            todoList: existingTodo,
          },
        };
        resolve(object);
      }, 2000);
    })
    .then(result => {
      let retrievedTodoList = result.data.todoList;
      setTodoList(retrievedTodoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
    // localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const filteredTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(filteredTodoList);
  };

  return (
    <>
      {isLoading ? (<p>Loading...</p>) : (<h1>Todo List</h1>)}
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
};

export default App;
