import {useRef, useEffect} from 'react';
import styles from './InputWithLabel.module.css';

const InputWithLabel = (props) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>&nbsp;&nbsp;
            <input 
                type="text" 
                name="title" 
                ref={inputRef} 
                id='todoTitle' 
                value={props.todoTitle} 
                onChange={props.handleTitleChange} 
                className={styles.inputField}
            />
        </>
    );
};

export default InputWithLabel;