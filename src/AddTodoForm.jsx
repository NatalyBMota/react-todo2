import { useState } from 'react';

const AddTodoForm = (props) => {
    let [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (event) => {
        let todoInput = document.querySelector("input");
        let newTodoTitle = todoInput.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log("Form Submitted!");
        todoTitle = "";
        props.onAddTodo({id: Date.now(), title: todoTitle});
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>&nbsp;&nbsp;
            <input type="text" name="title" id='todoTitle' value={props.todoTitle} onChange={handleTitleChange} />&nbsp;&nbsp;
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;