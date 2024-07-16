import { useState } from 'react';

const AddTodoForm = (props) => {
    let [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (event) => {
        let todoInput = document.querySelector("input");
        console.log("Todo input field:", todoInput);
        // let newTodoTitle = todoInput.value;
        let newTodoTitle = event.target.value;
        console.log("Value of input field:", newTodoTitle)
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        let form = event.target;
        event.preventDefault();
        console.log("Form Submitted!");
        props.onAddTodo({id: Date.now(), title: todoTitle});
        //setTodoTitle("");
        form.reset();
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