const TodoListItem = ({todo}) => {
    console.log("TodoListItem mounted.");
    return (
        <li>{todo}</li>
    );
}

export default TodoListItem;