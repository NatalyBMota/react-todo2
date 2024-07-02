const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log("Form Submitted!");
        let form = event.target;
        let todoInput = document.querySelector("input");
        let todoTitle = todoInput.value;
        //let todoTitle = event.target.value;
        //console.log(form);
        //console.log(todoInput);
        console.log(todoTitle);
        form.reset();
        props.onAddTodo(todoTitle);
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>&nbsp;&nbsp;
            <input type="text" name="title" id='todoTitle' />&nbsp;&nbsp;
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;