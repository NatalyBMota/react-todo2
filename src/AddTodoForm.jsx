const AddTodoForm = () => {
    return (
        <form>
            <label htmlFor="todoTitle">Title</label>&nbsp;&nbsp;
            <input type="text" id='todoTitle' />&nbsp;&nbsp;
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;