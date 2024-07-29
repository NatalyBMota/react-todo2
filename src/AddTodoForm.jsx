import { useState } from 'react';

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (event) => {
        const todoInput = document.querySelector("input");
        const newTodoTitle = todoInput.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({id: Date.now(), title: todoTitle});
        setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>&nbsp;&nbsp;
            <input type="text" name="title" id='todoTitle' value={todoTitle} onChange={handleTitleChange} />&nbsp;&nbsp;
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;