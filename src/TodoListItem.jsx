const TodoListItem = ({id, todo, onRemoveTodo}) => {
    return (
        <li key={id}>{todo}<button type="button" onClick={() => onRemoveTodo(id)}>Remove</button></li>
    );
}

export default TodoListItem;