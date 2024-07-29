const TodoListItem = ({todo}) => {
    return (
        <li key={todo.id}>{todo}<button type="button">Remove</button></li>
    );
}

export default TodoListItem;