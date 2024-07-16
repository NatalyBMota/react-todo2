import { useState } from 'react';

const AddTodoForm = (props) => {
    let [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (event) => {
        //let todoInput = document.querySelector("input");
        //let newTodoTitle = todoInput.value;
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        // let form = event.target;
        event.preventDefault();
        props.onAddTodo({id: Date.now(), title: todoTitle});
        setTodoTitle("");
        let todoInput = document.querySelector("input");
        todoInput.value = "";
        console.log("Todo input field's value:", todoInput.value);
        console.log("todoTitle state;", todoTitle);
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