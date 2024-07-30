const TodoListItem = ({id, todo, onRemoveTodo}) => {
    return (
        <li key={id}>
            {todo}
            <button type="button" onClick={() => {
                console.log("The remove button was clicked.");
                console.log("id of the list item next to the clicked remove button", id);
                onRemoveTodo(id)
            }}>Remove</button>
        </li>
    );
}

export default TodoListItem;