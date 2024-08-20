import './App.css';
import { useState, useEffect} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const App = () => {  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        let errorResponse = `${response.status}`;
        throw new Error(errorResponse);
        // throw new Error(`${response.status}`);
      }
      let data = await response.json();
      let todos = data.records.map(function(item) {
        const newTodo =  {
          id: item.id,
          title: item.fields.title,
        }
        console.log(`newTodo: ${newTodo}`);
        console.log(newTodo);
        return newTodo;
      });
      setTodoList(todos);
      console.log(`todos: ${todos}`);
      console.log(todos);
      console.log(`todoList: ${todoList}`);
      console.log(todoList);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
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
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (<p>Loading...</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
    </>
  );
};

export default App;
