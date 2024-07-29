const TodoListItem = ({todo}) => {
    return (
        <li key={todo.id}>{todo}</li>
    );
}

export default TodoListItem;