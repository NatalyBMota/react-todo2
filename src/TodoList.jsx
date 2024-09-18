import TodoListItem from "./TodoListItem.jsx";
import styles from './styles/TodoList.module.css';

const TodoList = ({todoList, onRemoveTodo}) => {
  return (
      <ul className={styles.list}>
          {todoList.map(function(item) {
              return (
                <TodoListItem 
                  key={item.id} 
                  id={item.id}
                  todo={item.title} 
                  onRemoveTodo={onRemoveTodo} 
                />
              );
          })}
      </ul>
  );
};

export default TodoList;