import { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import styles from './TodoContainer.module.css';
import checkListImg from '../assets/checklist.svg';

const TodoContainer = ({ tableName }) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscOrder, setisAscOrder] = useState(true);

  const sortAscCallBack = (objectA, objectB) => (objectA.title < objectB.title) ? -1 : (objectA.title > objectB.title) ? 1 : 0;

  const sortDescCallBack = (objectA, objectB) => (objectA.title < objectB.title) ? 1 : (objectA.title > objectB.title) ? -1 : 0;

  const toggleTitleSortOrder = () => {
    let reverseValueOfSortOrder = !isAscOrder; 
    setisAscOrder(reverseValueOfSortOrder);
    setTodoList(titleSortOrder(todoList, reverseValueOfSortOrder));
  }

  const titleSortOrder = useCallback((listToSort, sortAscendingOrder) => {
    if (!sortAscendingOrder) {
      const sortedList = [...listToSort].sort(sortDescCallBack);
      return sortedList;
    } else {
      const sortedList = [...listToSort].sort(sortAscCallBack);
      return sortedList;
    }
  }, []);
  
  const fetchData = useCallback(async () => {
    const tableViewToGetQueryParam = "view=Grid%20view";
    const sortQueryParam = "sort%5B0%5D%5Bfield%5D=title";
    const sortAscending = "asc";
    const sortDirectionQueryParam = `sort%5B0%5D%5Bdirection%5D=${sortAscending}`;
    const sortByProperty = `${sortQueryParam}&${sortDirectionQueryParam}`;

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}?${tableViewToGetQueryParam}&${sortByProperty}`;
    
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
      }
      let data = await response.json();

      let todos = data.records.map(function(item) {
        const newTodo =  {
          id: item.id,
          title: item.fields.title,
        }
        return newTodo;
      });
      
      setTodoList(titleSortOrder(todos, isAscOrder));
      setIsLoading(false);
    } catch (error) {
      return null;
    }
  }, [isAscOrder, titleSortOrder, tableName]);

  useEffect(() => {
    fetchData();
  }, [tableName, fetchData]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = async (newTodo) => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    
    const options = {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify({"fields":
        {
            "title": newTodo.title,
        }
        })
    };

    const response = await fetch(url, options);
    const json = await response.json();

    let newList = [...todoList, {
        id: json.id, 
        title: json.fields.title,
    }];
    newList = titleSortOrder(newList, isAscOrder);
    setTodoList(newList);
  };

  return (
    <>
      <nav>
        <Link to="/landing" alt="Go to the landing page.">Landing Page</Link>
        <Link to="https://icons8.com/icons/set/favicon" target="_blank" title="Where I got my fav (or favorite) icon from.">Fav Icons</Link>
        <button onClick={() => toggleTitleSortOrder()}> Current Sort: {isAscOrder ? "Asc" : "Desc"}</button>
      </nav>
      <main>
        <section>
          <h1>{tableName} List</h1>
          <AddTodoForm addTodo={addTodo} />
          {isLoading ? (<p>Loading...</p>) : (<TodoList todoList={todoList} setTodoList={setTodoList} />)}
        </section>
        <section>
          <img src={checkListImg} alt="Checklist." className={styles.checkListImg} />             
        </section>
      </main>
    </>
  );
};

TodoContainer.propTypes = {
  tableName: PropTypes.string.isRequired
};

export default TodoContainer;