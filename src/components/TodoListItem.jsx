import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';
import trashCan from '../assets/trash-can.svg';

const TodoListItem = ({id, todo, onRemoveTodo}) => {
    return (
        <li key={id} className={styles.listItem}>
            {todo}
            &nbsp;&nbsp;
            <button type="button" onClick={() => {
                onRemoveTodo(id)
            }} className={styles.removeButton}><img src={trashCan} alt="Remove item from to-do list." className={styles.trashCanIcon} /></button>
        </li>
    );
}

TodoListItem.propTypes = {
    id: PropTypes.string,
    todo: PropTypes.string,
    onRemoveTodo: PropTypes.func,
};

export default TodoListItem;