const TodoListItem = ({todo}) => {
    console.log("TodoListItem mounted.");
    return (
        <li key={todo.id}>{todo}</li>
    );
}

export default TodoListItem;