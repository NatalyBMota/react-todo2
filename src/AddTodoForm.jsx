import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

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
            <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} />
            &nbsp;&nbsp;
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;