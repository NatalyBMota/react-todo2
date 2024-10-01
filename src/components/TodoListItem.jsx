import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';
import trashCan from '../assets/trash-can.svg';

const TodoListItem = ({ id, todo, todoList, setTodoList }) => {
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
        <li key={id} className={styles.listItem}>
            {todo}
            &nbsp;&nbsp;
            <button type="button" onClick={() => {
                removeTodo(id)
            }} className={styles.removeButton}><img src={trashCan} alt="Remove item from to-do list." className={styles.trashCanIcon} /></button>
        </li>
    );
}

TodoListItem.propTypes = {
    id: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;