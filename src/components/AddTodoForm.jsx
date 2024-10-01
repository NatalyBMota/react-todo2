import { useState } from 'react';
import PropTypes from 'prop-types';
import InputWithLabel from './InputWithLabel';
import styles from './AddTodoForm.module.css';
import addSign from '../assets/add-sign.svg';

const AddTodoForm = ({todoList, setTodoList}) => {
    const [todoTitle, setTodoTitle] = useState("");

    const addTodo = async (newTodo) => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    
    const options = {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify({"fields":
        {
            "title": newTodo.title,
        }
        })
    };

    const response = await fetch(url, options);
    const json = await response.json();
    
        setTodoList([...todoList, {
            id: json.id, 
            title: json.fields.title,
        }]);
    };
    

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        addTodo({id: Date.now(), title: todoTitle});
        setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo} className={styles.addTodoForm}>
            <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}><span className={styles.labelForInput}>Title</span>
            </InputWithLabel>
            &nbsp;&nbsp;
            <button type="submit" className={styles.addButton}><img src={addSign} alt="Add item to to-do list." className={styles.addButtonImg} /></button>
        </form>
    );
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;