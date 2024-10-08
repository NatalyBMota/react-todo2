import PropTypes from 'prop-types';
import TodoListItem from "./TodoListItem.jsx";
import styles from './TodoList.module.css';

const TodoList = ({ todoList, setTodoList }) => {
  const removeTodo = async (id) => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`;
    
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        let errorResponse = `${response.status}`;
        throw new Error(errorResponse);
      }

      const filteredTodoList = todoList.filter((item) => item.id !== id);
      setTodoList(filteredTodoList);
    } catch (error) {
      return null;
    }
  };

  return (
      <ul className={styles.list}>
          {todoList.map(function(item) {
              return (
                <TodoListItem 
                  key={item.id} 
                  id={item.id}
                  todo={item.title} 
                  removeTodo={removeTodo}
                />
              );
          })}
      </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoList;