import './App.css';
import { useState, useEffect} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const App = () => {  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    console.log(`import.meta.env.VITE_TABLE_NAME: ${import.meta.env.VITE_TABLE_NAME}`);
    console.log(`import.meta.env.VITE_AIRTABLE_BASE_ID: ${import.meta.env.VITE_AIRTABLE_BASE_ID}`)
    console.log(`import.meta.env.VITE_TABLE_NAME: ${import.meta.env.VITE_TABLE_NAME}`);
    //const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const url = "https://api.airtable.com/v0/app2PWdIhOrGFyQZj/Default";

    // const options = {
    //   method: 'GET',
    //   headers: `{
    //     Authorization: Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}
    //   }`
    // };
    
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer patr9YifKUoE4urAS.41267566defd99b41f8f10d3154b70d53c79de4bab00ef80597038189235b917",
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
      console.log(`Data variable: ${data}`);
    } catch {

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
