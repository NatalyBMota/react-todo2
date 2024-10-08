import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';
import trashCan from '../assets/trash-can.svg';

const TodoListItem = ({ id, todo, removeTodo }) => {
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
    removeTodo: PropTypes.func.isRequired
};

export default TodoListItem;