const InputWithLabel = (props) => {
    return (
        <>
            <label htmlFor="todoTitle">{props.label}</label>&nbsp;&nbsp;
            <input type="text" name="title" id='todoTitle' value={props.todoTitle} onChange={props.handleTitleChange} />
        </>
    );
};

export default InputWithLabel;