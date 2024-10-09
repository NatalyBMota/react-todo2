import PropTypes from 'prop-types';
import TodoListItem from "./TodoListItem.jsx";
import styles from './TodoList.module.css';

const TodoList = ({ todoList, removeTodo }) => {
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
  removeTodo: PropTypes.func.isRequired
};

export default TodoList;