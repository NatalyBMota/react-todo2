import styles from './TodoListItem.module.css';
import trashCan from './assets/trash-can.svg';

const TodoListItem = ({id, todo, onRemoveTodo}) => {
    return (
        <li key={id} className={styles.ListItem}>
            {todo}
            &nbsp;&nbsp;
            <button type="button" onClick={() => {
                onRemoveTodo(id)
            }} className={styles.removeButton}><img src={trashCan} alt="Remove item from to-do list." className={styles.trashCanIcon} /></button>
        </li>
    );
}

export default TodoListItem;