const InputWithLabel = (props) => {
    return (
        <>
            <label htmlFor="todoTitle">Title</label>&nbsp;&nbsp;
            <input type="text" name="title" id='todoTitle' value={todoTitle} onChange={handleTitleChange} />
        </>
    );
};

export default InputWithLabel;